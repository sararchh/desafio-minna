import React from 'react';

import { ButtonStyled } from './styles';

type ButtonTypes = {
  text: string,
  borderColor?: string,
  w?: string,
  color?: string,
}

const Button: React.FC<ButtonTypes> = ({ text, borderColor, w = '157px', color }) => {

  return (
    <ButtonStyled
      borderColor={borderColor}
      w={w}
      color={color}
    >
      {text}
    </ButtonStyled>
  );
}

export default Button;