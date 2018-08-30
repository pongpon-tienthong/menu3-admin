import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import RestaurantScreen from "./screens/RestaurantScreen/RestaurantScreen";
import MenuScreen from "./screens/MenuScreen/MenuScreen";

class Menu3Admin extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/restaurant/:restaurantId/menu" component={MenuScreen} />
            <Route exact path="/" component={RestaurantScreen} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Menu3Admin;
