import React, { ReactNode } from 'react';

import { Container } from './styles';

type CardComponentProps = {
  children: ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default CardComponent;