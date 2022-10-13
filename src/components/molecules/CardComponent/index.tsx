import React, { ReactNode } from 'react';

import { Container } from './styles';

type CardComponentProps = {
  children: ReactNode;
  h?: string;
  w?: string;
  br?: string;
  topBackground?: Boolean;
}

const CardComponent: React.FC<CardComponentProps> = (
  {
    children,
    h = '407px',
    w = '958px',
    topBackground = false,
    br = '50px',
  }) => {
  return (
    <Container h={h} w={w} br={br} >
      {topBackground && (
        <div className='topBackground' />
      )}
      {children}
    </Container>
  )
}

export default CardComponent;