import { GET_MENUITEMS, CREATE_MENUITEM } from "./actionTypes";

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