import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import classNames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Maximize, Minimize, Close, AddPhotoAlternate, Delete } from '@material-ui/icons';
import Dropzone from 'react-dropzone';

import { createRestaurant } from "../../../store/actions";
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
  },
  textField: {
    padding: theme.spacing.unit
  },
  addPhotoIcon: {
    width: 50,
    height: 50,
    fill: theme.palette.grey[400]
  },
  dropZone: {
    height: 100,
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

class MenuItemForm extends Component {
  state = {
    minimize: false,
    menuItemFormData: {
      name: '',
      description: '',
      category: '',
      price: null,
      priority: null,
    }
  }

  handleCreateMenuItem = () => {
    this.props.createRestaurant(this.state.menuItemFormData, this.state.imageFiles[0]);
  }

  handleResetForm = () => {
    this.setState({
      menuItemFormData: {
        name: '',
        description: '',
        category: '',
        price: null,
        priority: null,
      }
    });
  }

  handleMinimize = e => {
    e.stopPropagation();

    this.setState(state => ({
      minimize: !state.minimize
    }));
  }

  handleFormChange = (e, identifier) => {
    const menuItemFormData = this.state.menuItemFormData;
    menuItemFormData[identifier] = e.target.value;

    this.setState(state => {
      return {
        ...state,
        menuItemFormData: menuItemFormData
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
            title="NEW MENUITEM"
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
                    label="Name"
                    autoComplete="off"
                    fullWidth
                    required
                    value={this.state.menuItemFormData.name}
                    onChange={(event) => this.handleFormChange(event, "name")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    name="description"
                    label="Description"
                    fullWidth
                    autoComplete="off"
                    value={this.state.menuItemFormData.description}
                    onChange={(event) => this.handleFormChange(event, "description")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="category"
                    name="category"
                    label="Category"
                    fullWidth
                    autoComplete="off"
                    value={this.state.menuItemFormData.category}
                    onChange={(event) => this.handleFormChange(event, "category")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="price"
                    name="price"
                    label="Price"
                    type="number"
                    fullWidth
                    autoComplete="off"
                    value={this.state.menuItemFormData.price}
                    onChange={(event) => this.handleFormChange(event, "price")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="priority"
                    name="priority"
                    label="Priority"
                    type="number"
                    fullWidth
                    autoComplete="off"
                    value={this.state.menuItemFormData.priority}
                    onChange={(event) => this.handleFormChange(event, "priority")}
                  />
                </Grid>
              </Grid>
              <div className={classes.buttons}>
                <CustomButton
                  variant="contained"
                  btnType="primary"
                  clicked={this.handleCreateMenuItem}
                  className={classes.createButton}
                >
                  CREATE
                </CustomButton>
                <CustomButton
                  variant="contained"
                  btnType="danger"
                  clicked={this.handleResetForm}
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
    createRestaurant: (newRestaurant, imageFile) => dispatch(createRestaurant(newRestaurant, imageFile)),
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(MenuItemForm));