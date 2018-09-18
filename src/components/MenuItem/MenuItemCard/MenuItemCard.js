import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  card: {
    display: 'flex',
    minHeight: 170
  },
  checkbox: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  details: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 170,
    minHeight: 170,
  },
  dropZone: {
    width: 170,
    height: 170,
    borderWidth: 3,
    borderColor: theme.palette.grey[400],
    borderStyle: 'dashed',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignment: 'center'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

class MenuItemCard extends Component {
  state = {
    openArDropZone: false,
  };

  handleOpenArDropZone = () => {
    this.setState({ openArDropZone: true });
  };

  handleCloseArDropZone = () => {
    this.setState({ openArDropZone: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            {this.props.menuItem.imgSrc ?
              <CardMedia
                className={classes.cover}
                image={this.props.menuItem.imgSrc}
              /> :
              <Dropzone
                multiple={false}
                accept=".jpeg, .jpg, .png"
                className={classes.dropZone}
                onDrop={imageFiles => this.props.dropped(this.props.menuItem.id, imageFiles[0])}>
                Drop or Select Photo
                (.jpeg, .jpg, .png)
              </Dropzone>
            }
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="title">{this.props.menuItem.name}</Typography>
                {this.props.menuItem.description ?
                  <Typography variant="subheading" color="textSecondary">
                    {`Description: ${this.props.menuItem.description}`}
                  </Typography>
                  : null}
                {this.props.menuItem.category ?
                  <Typography variant="subheading" color="textSecondary">
                    {`Category: ${this.props.menuItem.category}`}
                  </Typography>
                  : null}
                {this.props.menuItem.price ?
                  <Typography variant="subheading" color="textSecondary">
                    {`Price: ${this.props.menuItem.price}`}
                  </Typography>
                  : null}
                {this.props.menuItem.priority ?
                  <Typography variant="subheading" color="textSecondary">
                    {`Priority: ${this.props.menuItem.priority}`}
                  </Typography>
                  : null}
              </CardContent>
              <div className={classes.controls}>
                <Chip
                  avatar={this.props.menuItem.arSrcForAndroid && <Avatar><DoneIcon /></Avatar>}
                  label="Android AR"
                  onClick={this.handleOpenArDropZone}
                  className={classes.chip}
                />
                <Chip
                  avatar={this.props.menuItem.arSrc && <Avatar><DoneIcon /></Avatar>}
                  label="iOS AR"
                  onClick={this.handleOpenArDropZone}
                  className={classes.chip}
                />
                <Button variant="contained" size="small" className={classes.button} onClick={() => this.props.deleted(this.props.menuItem.id)}>
                  Delete
                  <DeleteIcon className={classes.rightIcon} />
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
        <div>
          <Dialog
            open={this.state.openArDropZone}
            onClose={this.handleCloseArDropZone}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">AR Model</DialogTitle>
            <DialogContent>
              <Dropzone
                multiple={false}
                // accept=".android"
                className={classes.dropZone}
                onDrop={arFiles => this.props.droppedArModel(this.props.menuItem.id, 'android', arFiles[0])}>
                Drop or Select Android AR Model
                (.android)
              </Dropzone>
              <Dropzone
                multiple={false}
                // accept=".ios"
                className={classes.dropZone}
                onDrop={arFiles => this.props.droppedArModel(this.props.menuItem.id, 'ios', arFiles[0])}>
                Drop or Select Photo iOS AR Model
                (.ios)
              </Dropzone>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseArDropZone} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Fragment>
    );
  }

};

export default withStyles(styles, { withTheme: true })(MenuItemCard);