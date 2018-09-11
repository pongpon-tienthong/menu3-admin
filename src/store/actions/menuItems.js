import { GET_MENUITEMS } from "./actionTypes";

import axios from "../../axios";

export const getMenuItems = restaurantId => {
  return dispatch => {
    axios.get(`/restaurants/${restaurantId}/menus`).then(res => {
      dispatch(getMenuItemsAsync(res.data));
    });
  };
};

export const getMenuItemsAsync = menuItems => {
  return {
    type: GET_MENUITEMS,
    menuItems: menuItems
  };
};