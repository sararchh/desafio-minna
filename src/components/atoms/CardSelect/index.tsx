import React from 'react';

import { Container, LabelStyled } from './styles';

type CardSelectProps = {
  text: string,
  htmlFor: string,
}

const CardSelect: React.FC<CardSelectProps> = ({ text, htmlFor }) => {
  return (
    <Container>
      <input type="radio" id={htmlFor} name="fav_language" />
      <LabelStyled htmlFor={htmlFor}>{text}</LabelStyled>
    </Container>
  )
}

export default CardSelect;