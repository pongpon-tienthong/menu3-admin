import React, { Component, Fragment } from 'react'
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Minimize, Close } from '@material-ui/icons';

const styles = theme => ({
  cardHeader: {
    position: 'relative',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit 
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600
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
  },
});

class RestaurantForm extends Component {
  handleNext = () => {
    console.log('handleNext');
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{ visibility: 'visible', width: '500px', marginRight: '10%' }}
        className={classes.layout}
      >
        <Card>
          <CardHeader
            className={classes.cardHeader}
            title="New Restaurant"
            action={
              <Fragment>
                <Button classes={{ root: classes.tabRoot }} color="inherit">
                  <Minimize />
                </Button>
                <Button classes={{ root: classes.tabRoot }} color="inherit">
                  <Close />
                </Button>
              </Fragment>
            }
            titleTypographyProps={{
              variant: "title",
              // color: theme.palette.primary.contrastText
            }}
          />
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
                color="primary"
                onClick={this.handleNext}
                className={classes.button}
              >
                Create
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(RestaurantForm);