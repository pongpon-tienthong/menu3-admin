import React, { Component } from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';

import {
  getRestaurants,
  selectRestaurant,
  deleteRestaurant,
  uploadRestaurantImage
} from "../../store/actions";

import Restaurant from "../../components/Restaurant/RestaurantCard/RestaurantCard";

class RestaurantScreen extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  handleDropFile = (restaurantId, imageFile) => {
    this.props.uploadRestaurantImage(restaurantId, imageFile);
  }

  render() {
    const restaurants = this.props.restaurants.map(
      restaurant => <Restaurant
        key={restaurant.id}
        restaurant={restaurant}
        dropped={this.handleDropFile}
        deleted={() => this.props.deleteRestaurant(restaurant.id)}
      />
    );

    return (
      <Grid container spacing={16}>
        {restaurants}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants()),
    selectRestaurant: restaurant => dispatch(selectRestaurant(restaurant)),
    deleteRestaurant: restaurantId => dispatch(deleteRestaurant(restaurantId)),
    uploadRestaurantImage: (restaurantId, imageFile) => dispatch(uploadRestaurantImage(restaurantId, imageFile))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);