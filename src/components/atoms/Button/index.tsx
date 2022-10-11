import React from 'react';

import { ButtonStyled } from './styles';

type ButtonTypes = {
  text: string,
  borderColor?: string 
}

const Button: React.FC<ButtonTypes> = ({ text, borderColor }) => {

  return (
    <ButtonStyled
      borderColor={borderColor}
      >
      {text}
    </ButtonStyled>
  );
}

export default Button;