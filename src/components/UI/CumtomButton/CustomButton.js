import React from 'react';

import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

const CustomButton = props => {

  let btnStyle = {
    color: props.theme.palette.common.white,
    ...props.styles
  };

  let btnColor;
  switch (props.btnType) {
    case 'blue':
      btnColor = blue
      break;
    case 'red':
      btnColor = red
      break;
    case 'green':
      btnColor = green
      break;
    case 'grey':
      btnColor = grey
      break;
    default:
      break;
  }

  if (btnColor) {
    btnStyle = {
      backgroundColor: btnColor[500],
      '&:hover': {
        backgroundColor: btnColor[800]
      },
      ...btnStyle
    };
  }

  return (
    <Button
      style={btnStyle}
      onClick={props.clicked}
      color="inherit"
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default withTheme()(CustomButton);
