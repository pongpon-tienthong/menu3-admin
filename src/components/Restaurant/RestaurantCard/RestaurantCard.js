import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dropzone from 'react-dropzone';

const styles = theme => ({
  card: {
    display: 'flex',
    height: 170
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 170,
    height: 170,
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
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  }
});

const restaurantCard = props => {
  const { classes } = props;

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        {props.restaurant.imgSrc ?
          <CardMedia
            className={classes.cover}
            image={props.restaurant.imgSrc}
          /> :
          <Dropzone
            multiple={false}
            accept=".jpg, .png"
            className={classes.dropZone}
            onDrop={imageFiles => props.dropped(props.restaurant.id, imageFiles[0])}
          >
            Drop or Select Photo
            (.jpg, .png)
              </Dropzone>
        }
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="title">{props.restaurant.name}</Typography>

            <Typography variant="subheading" color="textSecondary">
              {props.restaurant.address1} {props.restaurant.address2}, {props.restaurant.city}, {props.restaurant.state}, {props.restaurant.zip}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Link to={`/restaurant/${props.restaurant.id}/menu`}>
              <IconButton aria-label="Edit">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton aria-label="Delete" onClick={props.deleted}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default withRouter(withStyles(styles, { withTheme: true })(restaurantCard));