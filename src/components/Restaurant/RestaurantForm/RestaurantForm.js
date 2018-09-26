import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Maximize, Minimize, Close, AddPhotoAlternate, Delete } from '@material-ui/icons';
import Dropzone from 'react-dropzone';

import { createRestaurant } from "../../../store/actions";
import CustomButton from "../../UI/CumtomButton/CustomButton";

//TODO: Change the state textfield to select
// import getStates from "./states";

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
  },
  textField: {
    padding: theme.spacing.unit
  },
  addPhotoIcon: {
    width: 100,
    height: 100,
    fill: theme.palette.grey[400]
  },
  dropZone: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: theme.palette.grey[400],
    borderStyle: 'dashed',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewImage: {
    width: 150,
    height: 150,
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative'
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center'
  }
});

class RestaurantForm extends Component {
  state = {
    minimize: false,
    restaurantFormData: {
      name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      payingPriority: 0,
      longitude: 0,
      latitude: 0
    },
    imageFiles: null
  }

  handleDropFile = imageFiles => {
    this.setState({
      imageFiles: imageFiles
    });
  }

  handleDeleteFile = () => {
    this.setState({
      imageFiles: null
    });
  }

  handleCreateRestaurant = () => {
    this.props.createRestaurant(this.state.restaurantFormData);
  };

  handleMinimize = e => {
    e.stopPropagation();

    this.setState(state => ({
      minimize: !state.minimize
    }));
  }

  handleFormChange = (e, identifier) => {
    const restaurantFormData = this.state.restaurantFormData;
    restaurantFormData[identifier] = e.target.value;

    this.setState(state => {
      return {
        ...state,
        restaurantFormData: restaurantFormData
      }
    });
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
            title="NEW RESTAURANT"
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
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Restaurant name"
                    autoComplete="off"
                    fullWidth
                    required
                    value={this.state.restaurantFormData.name}
                    onChange={(event) => this.handleFormChange(event, "name")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="off"
                    value={this.state.restaurantFormData.address1}
                    onChange={(event) => this.handleFormChange(event, "address1")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="off"
                    value={this.state.restaurantFormData.address2}
                    onChange={(event) => this.handleFormChange(event, "address2")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="off"
                    value={this.state.restaurantFormData.city}
                    onChange={(event) => this.handleFormChange(event, "city")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="off"
                    value={this.state.restaurantFormData.state}
                    onChange={(event) => this.handleFormChange(event, "state")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    type="number"
                    fullWidth
                    autoComplete="off"
                    value={this.state.restaurantFormData.zip}
                    onChange={(event) => this.handleFormChange(event, "zip")}
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
                    value={this.state.restaurantFormData.payingPriority}
                    onChange={(event) => this.handleFormChange(event, "payingPriority")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="longitude"
                    name="longitude"
                    label="Longitude"
                    type="number"
                    autoComplete="off"
                    fullWidth
                    value={this.state.restaurantFormData.longitude}
                    onChange={(event) => this.handleFormChange(event, "longitude")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="latitude"
                    name="latitude"
                    label="Latitude"
                    type="number"
                    autoComplete="off"
                    fullWidth
                    value={this.state.restaurantFormData.latitude}
                    onChange={(event) => this.handleFormChange(event, "latitude")}
                  />
                </Grid>

                {/* <Grid item container spacing={8} xs={12} sm={6}>
                  <Grid item xs={12} className={classes.imageWrapper}>
                    {this.state.imageFiles ? this.state.imageFiles.map((file) => {
                      return (
                        <Fragment key={file.name} >
                          <img className={classes.previewImage} src={file.preview} alt={file.name} />
                          <CustomButton
                            variant="fab"
                            mini
                            aria-label="Delete"
                            btnType="danger"
                            className={classes.deleteButton}
                            clicked={this.handleDeleteFile}
                          >
                            <Delete />
                          </CustomButton>
                        </Fragment>
                      )
                    }) :
                      <Dropzone multiple={false} accept=".jpeg, .png" className={classes.dropZone} onDrop={imageFiles => this.handleDropFile(imageFiles)}>
                        <AddPhotoAlternate className={classes.addPhotoIcon} />
                      </Dropzone>
                    }
                  </Grid>
                </Grid> */}
              </Grid>
              <div className={classes.buttons}>
                <CustomButton
                  variant="contained"
                  btnType="primary"
                  clicked={this.handleCreateRestaurant}
                  className={classes.createButton}
                >
                  CREATE
              </CustomButton>
                <CustomButton
                  variant="contained"
                  btnType="danger"
                  clicked={this.handleCreateRestaurant}
                  className={classes.createButton}
                >
                  RESET
              </CustomButton>
              </div>
            </CardContent>
          }
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRestaurant: newRestaurant => dispatch(createRestaurant(newRestaurant))
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(RestaurantForm));