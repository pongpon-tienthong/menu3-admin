import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import Layout from "./components/Layout/Layout";
import RestaurantScreen from "./screens/RestaurantScreen/RestaurantScreen";
import MenuScreen from "./screens/MenuScreen/MenuScreen";

import 'typeface-roboto'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

class Menu3Admin extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/restaurant/:restaurantId/menu" component={MenuScreen} />
              <Route exact path="/" component={RestaurantScreen} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default Menu3Admin;
