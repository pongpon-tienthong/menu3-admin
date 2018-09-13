import * as actionTypes from "../actions/actionTypes";

const initialState = {
  menuItems: []
};

const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MENUITEMS:
    case actionTypes.CREATE_MENUITEM:
      return {
        ...state,
        menuItems: action.menuItems
      }
    default:
      return state;
  }
};

export default menuItemReducer;