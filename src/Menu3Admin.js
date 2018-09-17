import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import Layout from "./components/Layout/Layout";
import AuthScreen from "./screens/AuthScreen/AuthScreen";
import RestaurantScreen from "./screens/RestaurantScreen/RestaurantScreen";
import MenuScreen from "./screens/MenuScreen/MenuScreen";

import { authCheckState } from "./store/actions/index";

import 'typeface-roboto'

const theme = createMuiTheme({
  palette: {
    primary: grey
  },
  overrides: {
    MuiFormLabel: {
      root: {
        fontSize: '0.875rem'
      },
    }
  }
});

class Menu3Admin extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={AuthScreen} />
        <Redirect to="/auth" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Fragment>
          <Route path="/auth" component={AuthScreen} />
          <Layout>
            <Switch>
              <Route path="/restaurant/:restaurantId/menu" component={MenuScreen} />
              <Route path="/restaurant" component={RestaurantScreen} />
              <Redirect to="/restaurant" />
            </Switch>
          </Layout>
        </Fragment>
      );
    }

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          {routes}
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu3Admin);
