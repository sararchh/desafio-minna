import React from 'react';

import { Container, LabelStyled } from './styles';

type CardSelectProps = {
  text: string,
  htmlFor: string,
  margin?: string,
  w?: string,
}

const CardSelect: React.FC<CardSelectProps> = ({ text, htmlFor, margin = 'none', w ='134px' }) => {
  return (
    <Container margin={margin} w={w}>
      <input type="radio" id={htmlFor} name="fav_language" />
      <LabelStyled htmlFor={htmlFor} >{text}</LabelStyled>
    </Container>
  )
}

export default CardSelect;