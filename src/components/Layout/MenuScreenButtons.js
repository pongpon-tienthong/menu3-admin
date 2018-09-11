import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';

import CustomButton from "../UI/CumtomButton/CustomButton";

const styles = theme => ({
  lowerBarButton: {
    marginRight: theme.spacing.unit,
    whiteSpace: 'nowrap'
  }
});

const menuScreenButtons = (props) => {
  const { classes } = props;

  return (
    <Fragment>
      <CustomButton
        btnType="primary"
        className={classes.lowerBarButton}
        clicked={props.clicked}
      >
        CREATE MENUITEM
      </CustomButton>
      {/* <CustomButton
        btnType="primary"
        className={classes.lowerBarButton}
        clicked={props.clicked}
      >
        EDIT RESTAURANT
      </CustomButton>
      <CustomButton
        btnType="danger"
        className={classes.lowerBarButton}
        clicked={props.clicked}
      >
        DELETE RESTAURANT
      </CustomButton> */}
    </Fragment>
  );
};

export default withStyles(styles)(menuScreenButtons);
