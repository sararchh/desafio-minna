import React from 'react';
import CarSelect from '../../atoms/CardSelect';
import CardComponent from '../CardComponent';

import { Image, Container } from './styles';

type CardDietProps = {
  text: string,
  htmlFor: string
}

const CardDiet: React.FC<CardDietProps> = ({text, htmlFor }) => {
  return (
    <Container>
      <CardComponent w='135px' h='135px' br='30px' >
        <Image src="/assets/broccoli.svg" alt="brócolis" />
      </CardComponent>
      <CarSelect text={text} htmlFor={htmlFor}/>
    </Container>
  );
}

export default CardDiet;