import React, { Component, Fragment } from 'react'
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
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import RestaurantForm from "../Restaurant/RestaurantForm/RestaurantForm";
import menu3Logo from "../../asset/images/menu3_logo.png";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
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
    boxShadow: 'none',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBar2: {
    zIndex: theme.zIndex.drawer - 1,
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none', //TODO: Add boxShadow when scoll
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
  },
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`
  },
  logo: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit
  }
});

class Layout extends Component {
  container = null;

  state = {
    open: false,
    show: false
  };

  handleClick = () => {
    if (!this.state.show) {
      this.setState({ show: true });
    }
  };

  // TODO: properly handle closing the Restaurant form
  handleClose = () => {
    this.setState({ show: false });
  };

  handleDrawerOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { show } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classes.appBar}
        >
          <Toolbar disableGutters={true} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton
              )}
            >
              <MenuIcon />
            </IconButton>
            <img className={classes.logo} src={menu3Logo} />
            <Typography variant="title" color="inherit" noWrap className={classes.title}>
              Menu3 Admin
            </Typography>
          </Toolbar>
          <Divider />
        </AppBar>
        <div style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <List>
              <SideDrawerList />
            </List>
          </Drawer>
          <div style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <AppBar
              position="static"
              color="default"
              className={classNames(classes.appBar2, this.state.open && classes.appBarShift)}
            >
              <Toolbar variant='dense'>
                <Button onClick={this.handleClick}>Create a Restaurant</Button>
              </Toolbar>
              <Divider />
            </AppBar>
            <main className={classes.content}>
              <div>
                {show ? (
                  <Portal container={this.container}>
                    <RestaurantForm onCloseRestaurantForm={this.handleClose} />
                  </Portal>
                ) : null}
              </div>
              {this.props.children}
            </main>
          </div>
        </div>
        <div style={{ visibility: 'hidden', width: '100%', position: 'fixed', zIndex: 1500, bottom: 0, display: 'flex', justifyContent: 'flex-end' }} ref={ref => {
          this.container = ref;
        }} />
      </div>
    );
  }
}

export default withStyles(styles)(Layout);