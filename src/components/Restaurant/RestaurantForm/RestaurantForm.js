import React, { Component, Fragment } from 'react'

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Minimize, Close } from '@material-ui/icons';

import blue from '@material-ui/core/colors/blue' //TODO: Create a button component

const styles = theme => ({
  cardHeader: {
    position: 'relative',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[800],
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    cursor: 'pointer'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 500
    },
  },
  paper: {
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
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
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
    backgroundColor: blue[500],
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: blue[800]
    }
  },
  cardHeaderAction: {
    marginTop: 0
  }
});

class RestaurantForm extends Component {
  state = {
    minimize: false,
    restaurantFormWidth: '500px'
  }

  handleNext = () => {
    console.log('handleNext');
  };

  handleMinimize = e => {
    e.stopPropagation();

    this.setState(state => ({
      minimize: !state.minimize,
      restaurantFormWidth: state.minimize ? '500px' : '300px'
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{ visibility: 'visible', width: this.state.restaurantFormWidth, backgroundColor: 'transparent' }}
        className={classes.layout}
      >
        <Card style={{ borderRadius: '4px 4px 0 0' }}>
          <CardHeader
            className={classes.cardHeader}
            title="New Restaurant"
            classes={{ action: classes.cardHeaderAction }}
            action={
              <Fragment>
                <Button style={{ padding: '8px', minWidth: '40px', fontSize: '20px' }} color="inherit" onClick={this.handleMinimize}>
                  <Minimize fontSize='inherit' />
                </Button>
                <Button style={{ padding: '8px', minWidth: '40px', fontSize: '20px' }} color="inherit" onClick={this.props.onCloseRestaurantForm}>
                  <Close fontSize='inherit' />
                </Button>
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
                <Button
                  variant="contained"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  Create
              </Button>
              </div>
            </CardContent>
          }
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(RestaurantForm);