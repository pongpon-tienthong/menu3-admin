import {
  GET_RESTAURANTS,
  CREATE_RESTAURANT,
  SELECT_RESTAURANT,
  SHOW_RESTAURANT_FORM,
  HIDE_RESTAURANT_FORM,
  DELETE_RESTAURANT
} from "./actionTypes";

import axios from "../../axios";

export const getRestaurantAsync = restaurants => {
  return {
    type: GET_RESTAURANTS,
    restaurants: restaurants
  };
};

export const createRestaurantAsync = restaurants => {
  return {
    type: CREATE_RESTAURANT,
    restaurants: restaurants
  };
};

export const deleteRestaurantAsync = restaurants => {
  return {
    type: DELETE_RESTAURANT,
    restaurants: restaurants
  };
};

export const getRestaurants = () => {
  return dispatch => {
    axios
      .get('/restaurants')
      .then(res => {
        dispatch(getRestaurantAsync(res.data));
      });
  };
};

export const createRestaurant = (newRestaurant, imageFile) => {
  return dispatch => {
    axios.post('/restaurants', newRestaurant).then(res => {
      const imageFormData = new FormData();
      imageFormData.set('file', imageFile);
      imageFormData.set('createdBy', 'Menu3 Admin');

      axios({
        method: 'post',
        url: `/restaurants/${res.data.id}/image`,
        data: imageFormData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }).then(postImageRes => {
        axios
          .get('/restaurants')
          .then(res => {
            dispatch(createRestaurantAsync(res.data));
          });
      });
    })
  };
};

export const selectRestaurant = restaurant => {
  return {
    type: SELECT_RESTAURANT,
    restaurant: restaurant
  };
}

export const hideRestaurantForm = () => {
  return {
    type: HIDE_RESTAURANT_FORM
  };
};

export const showRestaurantForm = () => {
  return {
    type: SHOW_RESTAURANT_FORM
  };
};

export const deleteRestaurant = restaurantId => {
  return dispatch => {
    axios.delete(`/restaurants/${restaurantId}`).then(res => {
      axios
        .get('/restaurants')
        .then(res => {
          dispatch(deleteRestaurantAsync(res.data));
        });
    });
  };
};