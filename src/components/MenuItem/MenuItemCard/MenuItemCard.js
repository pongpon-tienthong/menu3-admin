import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dropzone from 'react-dropzone';

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
  }
});

class MenuItemCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
          {this.props.menuItem.imgSrc ?
            <CardMedia
              className={classes.cover}
              image={this.props.menuItem.imgSrc}
            /> :
            <Dropzone multiple={false} accept=".jpeg, .png" className={classes.dropZone}>
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
          </div>
        </Card>
      </Grid>
    );
  }

};

export default withStyles(styles, { withTheme: true })(MenuItemCard);