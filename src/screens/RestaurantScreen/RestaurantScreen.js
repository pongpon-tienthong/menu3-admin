import React, { Component, Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

import RestaurantCard from "../../components/Restaurant/RestaurantCard/RestaurantCard";



class RestaurantScreen extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </Grid>
    );
  }
}

export default RestaurantScreen;