import { GET_RESTAURANTS, CREATE_RESTAURANT, SELECT_RESTAURANT } from "./actionTypes";
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
      imageFormData.set('createdBy', 'Frontend');

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