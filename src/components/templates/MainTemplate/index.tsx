import React, { ReactNode } from 'react';
import FooterComponent from '../../molecules/FooterComponent';
import Header from '../../molecules/Header';

import { Container, ImgElement01 } from './styles';

type MainTemplateProps = {
  children: ReactNode
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <ImgElement01 src='/assets/u-orange.svg' alt='elemento01' />
      {children}
      
      <FooterComponent />
    </Container>
  )
}

export default MainTemplate;