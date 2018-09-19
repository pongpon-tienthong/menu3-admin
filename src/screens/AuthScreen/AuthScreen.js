import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { auth } from "../../store/actions/index";
import menu3Logo from "../../asset/images/menu3_logo.png";
import CustomButton from "../../components/UI/CumtomButton/CustomButton";

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: theme.spacing.unit * 5,
    height: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 2
  }
});

class AuthScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.password);
  }

  handleEmailChanged = event => {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChanged = event => {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const { classes } = this.props;

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />
    }

    return (
      <Fragment>
        {authRedirect}
        {/* <CssBaseline /> */}
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <div className={classes.header}>
              <img
                className={classes.logo}
                src={menu3Logo}
                alt="Menu3 Logo"
              />
              <Typography variant="title">Menu3 Admin</Typography>
            </div>
            <form className={classes.form} onSubmit={this.submitHandler}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={this.state.email}
                  onChange={this.handleEmailChanged}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handlePasswordChanged}
                />
              </FormControl>
              <CustomButton
                type="submit"
                fullWidth
                variant="raised"
                btnType="primary"
                className={classes.submit}
              >
                Sign in
            </CustomButton>
            </form>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

// TODO: Add error and loading later
const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AuthScreen));