import * as actionTypes from "../actions/actionTypes";

const initialState = {
  restaurants: [],
  selectedRestaurant: null
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

      console.log('Hi');
      console.log(action.restaurant);

      return {
        ...state,
        selectedRestaurant: action.restaurant
      }

    default:
      return state;
  }
}

export default restaurantReducer;