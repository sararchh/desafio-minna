import React from 'react';
import CardComponent from '../../components/molecules/CardComponent';
import MainTemplate from '../../components/templates/MainTemplate';
import InputComponent from '../../components/atoms/InputComponent';
import Button from '../../components/atoms/Button';

import { Content, Title01, CardInfo, ButtonStyled, Title02, Text, ImageElement } from './styles';

import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";

const SignUp: React.FC = () => {
  return (
    <MainTemplate>
      <Content>
        <ImageElement src='/assets/pizza2.png' alt='pizza'  top='365px' left='-30px' zIndex='9'/>
        <ImageElement src='/assets/v.svg' alt='elemento' top='296px' left='-287px' />
        <ImageElement src='/assets/cogumelos.svg' alt='elemento' top='518px' right='-21px' />
        <ImageElement src='/assets/tomato2.svg' alt='elemento' top='691px' right='-30px' zIndex='9'/>
        

        <CardComponent w='958px' h='1109px'>

          <CardInfo w='40%' >
            <Title01>
              Falta muito pouco.<br />
              <br />
              Faça um<br />
              cadastro gratuito
            </Title01>
          </CardInfo>

          <CardInfo>
            <section>
              <div>
                <ButtonStyled>
                  <FcGoogle />
                  Continuar com o Google
                </ButtonStyled>

                <ButtonStyled>
                  <RiFacebookCircleFill />
                  Continuar com o Facebook
                </ButtonStyled>
              </div>

              <div>
                <Title02>
                  Ou, preencha os dados:
                </Title02>

                <Text>Todos os Campos devem ser Preenchidos</Text>
              </div>
            </section>

            <section>
              <InputComponent labelName='Nome' htmlFor='name' w='416px' mg='15px 0 5px 0' />
              <InputComponent labelName='Sobrenome' htmlFor='lastname' w='416px' mg='15px 0 5px 0' />
              <InputComponent labelName='Email' htmlFor='email' w='416px' mg='15px 0 5px 0' />
              <InputComponent type='password' labelName='Senha' htmlFor='password' w='416px' mg='15px 0 5px 0' />
              <InputComponent type='password' labelName='Confirmar Senha' htmlFor='password02' w='416px' mg='15px 0 5px 0' />


              <Text className='margin'>
                Ao clicar em CONFIRMAR você afirma ter lido e concordado <br /> com nossos Termos de Uso e Política de Privacidade
              </Text>

              <Button text='Confirmar cadastro e ver dieta' w='316px' />
            </section>
          </CardInfo>

        </CardComponent>

      </Content>
    </MainTemplate>
  )
}

export default SignUp;