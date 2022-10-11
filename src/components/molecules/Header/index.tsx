import React from 'react';
import  Button  from '../../atoms/Button';

import { Container, ContentInfo, } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src='./assets/Logo.svg' alt='Logo' />

      <ContentInfo>
        <p>Como Fazemos</p>
        <p>Planos e Preços</p>
        <p>Receitas</p>
        <p>Sobre Nós</p>
      </ContentInfo>

      <div>

        <Button
        text='Inscreva-se'
        borderColor='#FFFFFF' 
        />

        <Button
        text='Login'
        />

      </div>
    </Container>
  )
}

export default Header;