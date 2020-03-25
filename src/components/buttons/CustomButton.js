import React from 'react';
import {Button} from 'reactstrap';

const CustomButton = ({name, color, size, type}) => {

  return (
    <Button 
      type={type}
      color={color} 
      size={size}
      >
        {name}
      </Button>
  )
}

export default CustomButton;