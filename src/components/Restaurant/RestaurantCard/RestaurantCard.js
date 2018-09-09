import React from 'react';
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

const styles = theme => ({
  card: {
    display: 'flex',
    height: 150
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
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
        <CardMedia
          className={classes.cover}
          image={props.restaurant.imgSrc}
        />
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

export default withStyles(styles, { withTheme: true })(restaurantCard);