import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from "./components/Layout/Layout";
import RestaurantScreen from "./screens/RestaurantScreen/RestaurantScreen";
import MenuScreen from "./screens/MenuScreen/MenuScreen";

import 'typeface-roboto'

class Menu3Admin extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/restaurant/:restaurantId/menu" component={MenuScreen} />
              <Route exact path="/" component={RestaurantScreen} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Menu3Admin;
