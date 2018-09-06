import { GET_RESTAURANTS } from "./actionTypes";
import axios from "../../axios";

export const getRestaurantAsync = (restaurants) => {
  return {
    type: GET_RESTAURANTS,
    restaurants: restaurants
  };
}

export const getRestaurants = () => {
  return dispatch => {
    axios
      .get('/restaurants')
      .then(res => {
        dispatch(getRestaurantAsync(res.data));
      });
  }
};