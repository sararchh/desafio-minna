import React from 'react';
import Button from '../../components/atoms/Button';
import InputComponent from '../../components/atoms/InputComponent';
import CardComponent from '../../components/molecules/CardComponent';
import Header from '../../components/molecules/Header';

import {
  Container,
  Content,
  ContentStartNow,
  ImgElement01,
  ImgElement02,
  Section02,
  Title01,
  CardUser01,
  LabelStyled,
  SelectStyled
} from './styles';

function Home() {
  return (
    <Container>
      <Content>

        <Header />

        <section className='section01'>
          <ImgElement01 src='/assets/u-orange.svg' alt='elemento01' />

          <ContentStartNow>
            <p>Planejamos <br /> tudo para você!</p>
            <Button text='Começar agora' />
          </ContentStartNow>
        </section>

        <Section02>
          <form>
            <CardComponent>
              <ImgElement02 src='/assets/kiwi-fruit1.svg' alt='ImgElement02' />
              <Title01>Olá! <br /> Precisamos conhecer <br /> um pouco sobre de você:</Title01>

              <CardUser01>
                <div className='cardCheck'>
                  <div>
                    <input type="radio" id="masculine" name="fav_language" value="sexo" />
                    <LabelStyled htmlFor="masculine">Homem</LabelStyled>
                  </div>

                  <div>
                    <input type="radio" id="female" name="fav_language" value="sexo" />
                    <LabelStyled htmlFor="female">Mulher</LabelStyled>
                  </div>
                </div>

                <div>
                  <InputComponent
                    htmlFor='name'
                    labelName='Nome'
                    type='text'
                    placeholder='Priscila'
                  />


                  <InputComponent
                    htmlFor='lastName'
                    labelName='Sobrenome'
                    type='text'
                    placeholder='Meireles'
                  />
                </div>

                <InputComponent
                  htmlFor='birthDate'
                  labelName='Data de Nascimento'
                  type='date'
                  w='346px'
                />

                <div>
                  <InputComponent
                    htmlFor='weight'
                    labelName='Peso'
                    type='text'
                    placeholder='55kg'
                  />

                  <InputComponent
                    htmlFor='height'
                    labelName='Altura'
                    type='text'
                    placeholder='1,67m'
                  />
                </div>

                <LabelStyled className='labelMargin'>
                  Nível de gordura corporal
                </LabelStyled>
                <SelectStyled>
                  <option value="bom">Bom (16 a 19%)</option>
                  <option value="moderate">Moderado (22 a 35%)</option>
                  <option value="high">Elevado (32 a 34%)</option>
                </SelectStyled>

              </CardUser01>


            </CardComponent>

          </form>
        </Section02>

      </Content>
    </Container>
  );
}

export default Home;
