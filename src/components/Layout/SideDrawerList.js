import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RestaurantIcon from "@material-ui/icons/RoomService";

const sideDrawerList = () => (
  <ListItem button>
    <ListItemIcon>
      <RestaurantIcon />
    </ListItemIcon>
    <ListItemText primary="Restaurants" />
  </ListItem>
);

export default sideDrawerList;