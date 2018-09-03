import React, { Component, Fragment } from 'react'
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Maximize, Minimize, Close } from '@material-ui/icons';

import CustomButton from "../../UI/CumtomButton/CustomButton";

const styles = theme => ({
  restaurantFormlayout: {
    width: 600,
    visibility: 'visible',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(theme.breakpoints.values.sm + theme.spacing.unit * 2 * 2)]: {
      width: theme.breakpoints.values.sm
    },
  },
  card: {
    borderRadius: '4px 4px 0 0'
  },
  cardHeader: {
    position: 'relative',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[800],
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    cursor: 'pointer'
  },
  cardHeaderIcon: {
    padding: 8,
    minWidth: 40,
    fontSize: 20
  },
  minimizeWidth: {
    width: 300
  },
  paper: {
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(theme.breakpoints.values.sm + theme.spacing.unit * 3 * 2)]: {
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  createButton: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  cardHeaderAction: {
    marginTop: 0
  }
});

class RestaurantForm extends Component {
  state = {
    minimize: false
  }

  handleCreateRestaurant = () => {
    console.log('handleCreateRestaurant');
  };

  handleMinimize = e => {
    e.stopPropagation();

    this.setState(state => ({
      minimize: !state.minimize
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        className={
          classNames(classes.restaurantFormlayout,
            this.state.minimize && classes.minimizeWidth
          )}
      >
        <Card className={classes.card}>
          <CardHeader
            title="New Restaurant"
            className={classes.cardHeader}
            classes={{ action: classes.cardHeaderAction }}
            action={
              <Fragment>
                <CustomButton
                  color="inherit"
                  className={classes.cardHeaderIcon}
                  clicked={this.handleMinimize}
                >
                  {this.state.minimize ? <Maximize fontSize='inherit' /> : <Minimize fontSize='inherit' />}
                </CustomButton>
                <CustomButton
                  color="inherit"
                  className={classes.cardHeaderIcon}
                  clicked={this.props.onCloseRestaurantForm}
                >
                  <Close fontSize='inherit' />
                </CustomButton>
              </Fragment>
            }
            titleTypographyProps={{
              variant: "body2",
              color: "inherit"
            }}
            onClick={this.handleMinimize}
          />
          {this.state.minimize ? null :
            <CardContent className={classes.paper}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Restaurant name"
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="billing address-line1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="addiress2"
                    name="addiress2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="billing address-line2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="billing address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="billing postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="payingPriority"
                    name="payingPriority"
                    label="Paying Priority"
                    type="number"
                    autoComplete="off"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <div className={classes.buttons}>
                <CustomButton
                  variant="contained"
                  btnType="primary"
                  clicked={this.handleCreateRestaurant}
                  className={classes.createButton}
                >
                  Create
              </CustomButton>
              </div>
            </CardContent>
          }
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(RestaurantForm);