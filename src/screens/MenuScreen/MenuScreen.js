import React, { Component } from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';

import { getMenuItems } from "../../store/actions";

import MenuItemCard from "../../components/MenuItem/MenuItemCard/MenuItemCard";

class MenuScreen extends Component {

  componentDidMount() {
    const restaurantId = this.props.selectedRestaurant ?
      this.props.selectedRestaurant.id :
      this.props.match.params.restaurantId;
    this.props.getMenuItems(restaurantId);
  }

  render() {
    const menuItems = this.props.menuItems.map(
      menuItem => <MenuItemCard key={menuItem.id} menuItem={menuItem} />
    );

    return (
      <Grid container spacing={16}>
        {menuItems}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuItems: state.menuItems.menuItems,
    selectedRestaurant: state.restaurants.selectedRestaurant
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getMenuItems: (restaurantId) => dispatch(getMenuItems(restaurantId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);