import * as actionTypes from "../actions/actionTypes";

const initialState = {
  restaurants: []
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESTAURANTS:
      return {
        restaurants: action.restaurants
      };
    default:
      return state;
  }
}

export default restaurantReducer;