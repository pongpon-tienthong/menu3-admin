import React, { Component } from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';

import {
  getRestaurants,
  selectRestaurant,
  deleteRestaurant
} from "../../store/actions";

import Restaurant from "../../components/Restaurant/RestaurantCard/RestaurantCard";

class RestaurantScreen extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants.map(
      restaurant => <Restaurant
        key={restaurant.id}
        restaurant={restaurant}
        // edited={() => this.props.selectRestaurant(restaurant)}
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
    deleteRestaurant: restaurantId => dispatch(deleteRestaurant(restaurantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);