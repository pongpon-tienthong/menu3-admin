import React, { Component } from 'react';
import { connect } from "react-redux";
import { getRestaurants } from "../../store/actions";

import Grid from '@material-ui/core/Grid';

import Restaurant from "../../components/Restaurant/RestaurantCard/RestaurantCard";

class RestaurantScreen extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants.map(
      restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />
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
    getRestaurants: () => dispatch(getRestaurants())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);