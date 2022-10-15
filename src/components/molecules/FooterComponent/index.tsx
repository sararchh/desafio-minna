import React from 'react';

import { SlSocialInstagram, } from "react-icons/sl";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import { Container, Content } from './styles';
import Button from '../../atoms/Button';

const FooterComponent: React.FC = () => {
  return (
    <Container>
      <hr style={{ marginBottom: ' 60px' }} />

      <section >
        <div>
          <img src='/assets/logo2.svg' alt='Logo' />
          <div className='styledDiv'>
            <SlSocialInstagram className='svgAlign' />
            <FaLinkedin className='svgAlign' />
            <FaFacebookSquare className='svgAlign' />
            <IoLogoYoutube />
          </div>
        </div>

        <Content>
          <h3> Institucional</h3>

          <p> Sobre nós</p>
          <p> Planos</p>
          <p>Receitas</p>
          <p>Fale conosco</p>
        </Content>

        <Content>
          <h3> Links Úteis</h3>

          <p>  Portal de privacidade</p>
          <p> Configurações de cookies</p>

        </Content>

        <Content>
          <h3>Contatos</h3>

          <p> (48) 99999.9999</p>
          <p> contato@contato.com</p>
          <p>  R. Loren Impsun, 999 - Criciúma</p>
          <p>  93000-00</p>


        </Content>

        <span className='styledButton'>
          <Button text='Inscreva-se' w='157px' />
        </span>

      </section>
      <hr />

      <div className='divStyled05' >
        <p>© Nutri Alimentar. Todos os Direitos Reservados. </p>
        <p >Desenvolvido por <span className='colorText'> Driftweb</span> </p>
      </div>

    </Container>
  )
}

export default FooterComponent;