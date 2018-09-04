import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddressIcon from '@material-ui/icons/Room';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  card: {
    display: 'flex'
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
  const { classes, theme } = props;

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image="https://material-ui.com/static/images/cards/live-from-space.jpg"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="title">Maize Maxican Grill</Typography>

            <Typography variant="subheading" color="textSecondary">
              <AddressIcon /> 911 S Locust St, Champaign, IL 61820
          </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(restaurantCard);