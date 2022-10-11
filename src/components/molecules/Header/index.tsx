import React from 'react';

import { Container, ContentInfo, ButtonRegister, ButtonLogin } from './styles';

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
        <ButtonRegister>Inscreva-se</ButtonRegister>
        <ButtonLogin>Login</ButtonLogin>
      </div>
    </Container>
  )
}

export default Header;