import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import CustomButton from "../UI/CumtomButton/CustomButton";

const styles = theme => ({
  lowerBarButton: {
    marginRight: theme.spacing.unit
  }
});

const restanrantScreenButtons = (props) => {
  const { classes } = props;

  return (
    <CustomButton
      btnType="primary"
      className={classes.lowerBarButton}
      clicked={props.clicked}
    >
      CREATE RESTAURANT
    </CustomButton>
  );
};

export default withStyles(styles)(restanrantScreenButtons);
