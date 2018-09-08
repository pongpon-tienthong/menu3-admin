import * as actionTypes from "../actions/actionTypes";

const initialState = {
  restaurants: [],
  selectedRestaurant: null,
  showRestaurantForm: false
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESTAURANTS:
    case actionTypes.CREATE_RESTAURANT:
      return {
        ...state,
        restaurants: action.restaurants
      };
    case actionTypes.SELECT_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.restaurant,
        showRestaurantForm: true
      }
    case actionTypes.SHOW_RESTAURANT_FORM:
      return {
        ...state,
        showRestaurantForm: true
      }
    case actionTypes.HIDE_RESTAURANT_FORM:
      return {
        ...state,
        showRestaurantForm: false
      }
    default:
      return state;
  }
}

export default restaurantReducer;