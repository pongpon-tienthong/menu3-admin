import React, { Component } from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';

import { getMenuItems, deleteMenuItem, uploadMenuItemImage } from "../../store/actions";

import MenuItemCard from "../../components/MenuItem/MenuItemCard/MenuItemCard";

class MenuScreen extends Component {
  state = {
    restaurantId: ''
  }

  componentDidMount() {
    this.setState({
      restaurantId: this.props.selectedRestaurant ?
        this.props.selectedRestaurant.id :
        this.props.match.params.restaurantId
    }, () => {
      this.props.getMenuItems(this.state.restaurantId);
    });
  }

  handleDropFile = (menuItemId, imageFile) => {
    this.props.uploadMenuItemImage(this.state.restaurantId, menuItemId, imageFile);
  }

  handleDelete = menuItemId => {
    this.props.deleteMenuItem(this.state.restaurantId, menuItemId);
  }

  render() {
    const menuItems = this.props.menuItems.map(
      menuItem => <MenuItemCard
        key={menuItem.id}
        menuItem={menuItem}
        dropped={this.handleDropFile}
        deleted={this.handleDelete}
      />
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
    getMenuItems: (restaurantId) => dispatch(getMenuItems(restaurantId)),
    deleteMenuItem: (restaurantId, menuItemId) => dispatch(deleteMenuItem(restaurantId, menuItemId)),
    uploadMenuItemImage: (restaurantId, menuItemId, imageFile) => dispatch(uploadMenuItemImage(restaurantId, menuItemId, imageFile))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);