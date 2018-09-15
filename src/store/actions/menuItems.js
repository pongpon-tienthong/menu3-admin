import {
  GET_MENUITEMS,
  CREATE_MENUITEM,
  DELETE_MENUITEM,
  UPLOAD_MENUITEM_MEDIA
} from "./actionTypes";

import axios from "../../axios";

export const getMenuItems = restaurantId => {
  return dispatch => {
    axios.get(`/restaurants/${restaurantId}/menus`).then(res => {
      dispatch(getMenuItemsAsync(res.data));
    });
  };
}

export const getMenuItemsAsync = menuItems => {
  return {
    type: GET_MENUITEMS,
    menuItems: menuItems
  };
}

export const createMenuItem = (restaurantId, menuItem) => {
  return dispatch => {
    if (!menuItem.price) menuItem.price = null;

    axios.post(`/restaurants/${restaurantId}/menus`, menuItem).then(res => {
      axios.get(`/restaurants/${restaurantId}/menus`).then(res => {
        dispatch(createMenuItemAsync(res.data));
      });
    });
  };
}

export const createMenuItemAsync = menuItems => {
  return {
    type: CREATE_MENUITEM,
    menuItems: menuItems
  };
}

//TODO: combine the two media methods
export const uploadMenuItemImage = (restaurantId, menuItemId, imageFile) => {
  const formData = new FormData();
  formData.set('file', imageFile);
  formData.set('createdBy', 'Menu3_Admin');

  return dispatch => {
    axios({
      method: 'post',
      url: `/menus/${menuItemId}/image`,
      data: formData,
      config: {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    }).then(res => {
      axios.get(`/restaurants/${restaurantId}/menus`).then(res => {
        dispatch(uploadMenuItemMediaAsync(res.data));
      });
    });
  };
}

export const uploadArModel = (restaurantId, menuItemId, type, arFile) => {
  const formData = new FormData();
  formData.set('file', arFile);
  formData.set('createdBy', 'Menu3_Admin');

  const arUrl = type === 'android' ? 'android-ar' : 'ar';

  return dispatch => {
    axios({
      method: 'post',
      url: `/menus/${menuItemId}/${arUrl}`,
      data: formData,
      config: {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    }).then(res => {
      axios.get(`/restaurants/${restaurantId}/menus`).then(res => {
        dispatch(uploadMenuItemMediaAsync(res.data));
      });
    });
  };
}

export const uploadMenuItemMediaAsync = menuItems => {
  return {
    type: UPLOAD_MENUITEM_MEDIA,
    menuItems: menuItems
  };
}

export const deleteMenuItem = (restaurantId, menuItemId) => {
  return dispatch => {
    axios.delete(`/menus/${menuItemId}`).then(res => {
      axios.get(`/restaurants/${restaurantId}/menus`).then(res => {
        dispatch(deleteMenuItemAsyns(res.data));
      });
    });
  };
}

export const deleteMenuItemAsyns = menuItems => {
  return {
    type: DELETE_MENUITEM,
    menuItems: menuItems
  };
}