import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios";

const initialState = {
  restaurants: []
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESTAURANTS:
      // axios
      //   .get('/restaurants')
      //   .then(res => {
      //     return {
      //       ...state,
      //       restaurants: res.restaurants.sort((res1, res2) => {
      //         return (res1.payingPriority > res2.payingPriority) ? -1 : (res2.payingPriority > res1.payingPriority) ? 1 : 0;
      //       })
      //     }
      //   });
      return {
        ...state,
        restaurants: [
          {
            "id": 2,
            "name": "Maize",
            "address1": "60 E Green St",
            "address2": "",
            "city": "Champaign",
            "state": "Illinois",
            "zip": 61820,
            "longitude": 40.1136,
            "latitude": -88.2442,
            "imgSrc": "https://s3.us-east-1.amazonaws.com/staging-menu3-s3/1530657841360-Taco_Mexica.jpg",
            "payingPriority": 1
          }
        ]
      }
    default:
      return state;
  }
}

export default restaurantReducer;