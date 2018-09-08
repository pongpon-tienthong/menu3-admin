import React, { Component } from 'react'
import { connect } from "react-redux";
import SideDrawerList from "./SideDrawerList";

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Portal from '@material-ui/core/Portal';
import MenuIcon from '@material-ui/icons/Menu';

import RestaurantForm from "../Restaurant/RestaurantForm/RestaurantForm";
import CustomButton from "../UI/CumtomButton/CustomButton";
import menu3Logo from "../../asset/images/menu3_logo.png";
import { showRestaurantForm, hideRestaurantForm } from "../../store/actions";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none'
  },
  appBarTitle: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  drawerAndLowerBarWrapper: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  lowerAppBar: {
    zIndex: theme.zIndex.drawer - 1,
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none', //TODO: Add boxShadow when scoll
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    border: 'none',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  lowerAppBarShift: {
    width: '100%',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  lowerBarAndContentWrapper: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
  },
  formContainer: {
    visibility: 'hidden',
    width: '100%',
    position: 'fixed',
    zIndex: 1500,
    bottom: 0,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`
  },
  logo: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit
  },
  lowerBarButton: {
    marginRight: theme.spacing.unit
  }
});

class Layout extends Component {
  formContainer = null;

  state = {
    openDrawer: false
  };

  handleClick = () => {
    if (!this.props.showForm) {
      this.props.showRestaurantForm();
    }
  };

  handleFormClose = () => {
    this.props.hideRestaurantForm();
  };

  handleDrawerOpen = () => {
    this.setState(state => ({ openDrawer: !state.openDrawer }));
  };

  handleDrawerClose = () => {
    this.setState({ openDrawer: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classes.appBar}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <img
              className={classes.logo}
              src={menu3Logo}
              alt="Menu3 Logo"
            />
            <Typography
              variant="title"
              color="inherit"
              className={classes.appBarTitle}
              noWrap
            >
              Menu3 Admin
            </Typography>
          </Toolbar>
          <Divider />
        </AppBar>
        <div className={classes.drawerAndLowerBarWrapper}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.openDrawer && classes.drawerPaperClose
              ),
            }}
            open={this.state.openDrawer}
          >
            <List>
              <SideDrawerList />
            </List>
          </Drawer>
          <div className={classes.lowerBarAndContentWrapper}>
            <AppBar
              position="static"
              color="default"
              className={
                classNames(classes.lowerAppBar,
                  this.state.openDrawer && classes.lowerAppBarShift
                )}
            >
              <Toolbar variant='dense'>
                <CustomButton
                  btnType="primary"
                  className={classes.lowerBarButton}
                  clicked={this.handleClick}
                >
                  Create Restaurant
                </CustomButton>
              </Toolbar>
              <Divider />
            </AppBar>
            <main className={classes.content}>
              <div>
                {this.props.showForm ? (
                  <Portal container={this.formContainer}>
                    <RestaurantForm onCloseRestaurantForm={this.handleFormClose} />
                  </Portal>
                ) : null}
              </div>
              {this.props.children}
            </main>
          </div>
        </div>
        <div
          className={classes.formContainer}
          ref={ref => {
            this.formContainer = ref;
          }} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showForm: state.restaurants.showRestaurantForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showRestaurantForm: () => dispatch(showRestaurantForm()),
    hideRestaurantForm: () => dispatch(hideRestaurantForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));