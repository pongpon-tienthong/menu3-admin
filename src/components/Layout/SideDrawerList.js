import React from 'react';
import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RestaurantIcon from "@material-ui/icons/RoomService";

const sideDrawerList = () => (
  <Link to="/restaurant">
    <ListItem button>
      <ListItemIcon>
        <RestaurantIcon />
      </ListItemIcon>
      <ListItemText primary="Restaurants" />
    </ListItem>
  </Link>
);

export default sideDrawerList;