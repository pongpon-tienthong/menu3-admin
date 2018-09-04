import React, { Component } from 'react';
import axios from "../../axios";

import Grid from '@material-ui/core/Grid';

import Restaurant from "../../components/Restaurant/RestaurantCard/RestaurantCard";

class RestaurantScreen extends Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    axios.get('/restaurants')
      .then(res => {
        this.setState({ restaurants: res.data });
      });
  }

  render() {
    const restaurants = this.state.restaurants
      .sort((res1, res2) => {
        return (res1.payingPriority > res2.payingPriority) ? -1 : (res2.payingPriority > res1.payingPriority) ? 1 : 0;
      })
      .map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />);

    return (
      <Grid container spacing={16}>
        {restaurants}
      </Grid>
    );
  }
}

export default RestaurantScreen;