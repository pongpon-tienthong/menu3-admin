import React from 'react';

import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

const CustomButton = props => {

  const { btnType, clicked, ...restProps } = props;

  let btnStyle = {
    color: restProps.theme.palette.common.white,
    ...restProps.styles
  };

  let btnColor;
  switch (btnType) {
    case 'primary':
      btnColor = blue
      break;
    case 'danger':
      btnColor = red
      break;
    case 'success':
      btnColor = green
      break;
    case 'info':
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
      onClick={clicked}
      color="inherit"
      {...restProps}
    >
      {restProps.children}
    </Button>
  )
}

export default withTheme()(CustomButton);
