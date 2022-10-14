import React from 'react';

import { ButtonStyled } from './styles';

type ButtonTypes = {
  text: string,
  borderColor?: string,
  w?: string,
}

const Button: React.FC<ButtonTypes> = ({ text, borderColor, w = '157px' }) => {

  return (
    <ButtonStyled
      borderColor={borderColor}
      w={w}
    >
      {text}
    </ButtonStyled>
  );
}

export default Button;