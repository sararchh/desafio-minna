import React from 'react';
import Button from '../../components/atoms/Button';
import InputComponent from '../../components/atoms/InputComponent';
import CardComponent from '../../components/molecules/CardComponent';
import CardDiet from '../../components/molecules/CardDiet';
import Header from '../../components/molecules/Header';


import {
  Container,
  Content,
  ContentStartNow,
  ImgElement01,
  ImgElement02,
  ImgElement03,
  ImgElement04,
  ImgElement05,
  Section02,
  Title01,
  Title02,
  CardUser01,
  LabelStyled,
  SelectStyled,
  ContainerDiet
} from './styles';

const array = [
  {
    text: 'Equilibrada',
    htmlFor: 'balanced'
  },
  {
    text: 'Paleolítico',
    htmlFor: 'paleolithic'
  },
  {
    text: 'Cetogênica',
    htmlFor: 'ketogenic'
  },
  {
    text: 'Vegetariana',
    htmlFor: 'vegetarian'
  },
  {
    text: 'Jejum',
    htmlFor: 'fast'
  },
  {
    text: 'Sem Lactose',
    htmlFor: 'lactoseFree'
  },
  {
    text: 'Vegana',
    htmlFor: 'vegan'
  },
  {
    text: 'Low Carb',
    htmlFor: 'lowCarb'
  },
  {
    text: 'Sem Lactose',
    htmlFor: 'lactoseFree2'
  }
]

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

            <CardComponent h='186px'>
              <Title02>Qual é o seu <br /> objetivo principal?</Title02>

              <SelectStyled>
                <option value="loseWeight">Emagrecer</option>
                <option value="keepWeight">Manter Peso</option>
                <option value="gainHealth">Ganhar saúde</option>
                <option value="gainMass">Ganhar massa muscular</option>
              </SelectStyled>
            </CardComponent>

            <CardComponent h='672px' topBackground={true} >
              <ImgElement03 src='/assets/gluten-free1.png' alt='imagem gluten' />
              <ImgElement04 src='/assets/v.svg' alt='imagem' />

              <Title02>Qual tipo de dieta <br /> você gostaria?</Title02>

              <ContainerDiet>
                {array.map((item, index) => (
                  <CardDiet key={index} text={item.text} htmlFor={item.htmlFor} />
                ))}
              </ContainerDiet>

              <ImgElement05 src='/assets/Adorno02.svg' alt='Comidas' />
            </CardComponent>

          </form>
        </Section02>

      </Content>
    </Container>
  );
}

export default Home;
