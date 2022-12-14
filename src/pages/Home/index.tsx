import React, { useEffect, useState } from 'react';
import Button from '../../components/atoms/Button';
import CardSelect from '../../components/atoms/CardSelect';
import InputComponent from '../../components/atoms/InputComponent';
import CardComponent from '../../components/molecules/CardComponent';
import CardDiet from '../../components/molecules/CardDiet';
import FooterComponent from '../../components/molecules/FooterComponent';
import Header from '../../components/molecules/Header';
import ModalPWA from '../../components/molecules/ModalPWA';
import MainTemplate from '../../components/templates/MainTemplate';
import { array } from '../../utils/arrayDiet';
import { arrayPlans } from '../../utils/arrayPlans';
import { arrayRestrictionDiet } from '../../utils/arrayRestrictionDiet';


import {
  Container,
  Content,
  ContentStartNow,
  ImgElement01,
  ImgElement,
  Title01,
  Title02,
  CardUser01,
  LabelStyled,
  SelectStyled,
  ContainerDiet,
  TextPlans,
  SectionCard,
  ContentFooter,
  CardContents,
} from './styles';



function Home() {
  const [openModalPWA, setOpenModalPWA] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenModalPWA(true);
    }, 2000)
  }, [])

  return (
    <MainTemplate>
      <Content>

        {openModalPWA && (
          <ModalPWA onClose={() => setOpenModalPWA(false)} />
        )}

        <section className='section01'>

          <ContentStartNow>
            <p>Planejamos <br /> tudo para você!</p>
            <Button text='Enviar' />
          </ContentStartNow>
        </section>

        <SectionCard>
          <form>
            <CardComponent>
              <ImgElement src='/assets/kiwi-fruit1.png' alt='ImgElement' marginTop='-503px' right='-455px' />
              <div className='divStyled'>
                <Title01>Olá! <br /> Precisamos conhecer <br /> um pouco sobre de você:</Title01>
              </div>

              <div className='divStyled'>
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
                  <SelectStyled marginTop='3px'>
                    <option value="bom">Bom (16 a 19%)</option>
                    <option value="moderate">Moderado (22 a 35%)</option>
                    <option value="high">Elevado (32 a 34%)</option>
                  </SelectStyled>

                </CardUser01>
              </div>

            </CardComponent>

            <CardComponent h='186px'>
              <div className='divStyled'>
                <Title02>Qual é o seu <br /> objetivo principal?</Title02>
              </div>

              <div className='divStyled'>
                <SelectStyled>
                  <option value="loseWeight">Emagrecer</option>
                  <option value="keepWeight">Manter Peso</option>
                  <option value="gainHealth">Ganhar saúde</option>
                  <option value="gainMass">Ganhar massa muscular</option>
                </SelectStyled>
              </div>
            </CardComponent>

            <CardComponent h='672px' topBackground={true} >
              <ImgElement src='/assets/gluten-free1.png' alt='imagem gluten' top='-127px' left='-150px' />
              <ImgElement src='/assets/v.svg' alt='imagem' zIndex='-1' top='-134px' left='-457px' />

              <Title02>Qual tipo de dieta <br /> você gostaria?</Title02>

              <ContainerDiet>
                {array.map((item, index) => (
                  <CardDiet key={index} text={item.text} htmlFor={item.htmlFor} />
                ))}
              </ContainerDiet>

              <ImgElement src='/assets/diet01.png' alt='Comidas' top='158px' right='-460px' />
            </CardComponent>

            <CardComponent h='201px'>
              <ImgElement src='/assets/cogumelos.png' alt='imagem cogumelo' top='86px' left='-361px' zIndex='0' />
              <div className='divStyled'>
                <Title02>Quantas refeições <br /> você faz ao dia?</Title02>
              </div>

              <div className='divStyled'>
                <SelectStyled color='var(--black)'>
                  <option value="Meals01">01 Refeições</option>
                  <option value="Meals02">02 Refeições</option>
                  <option value="Meals03">03 Refeições</option>
                </SelectStyled>
              </div>
            </CardComponent>

            <CardComponent h='460px'>
              <ImgElement src='/assets/tomato.png' alt='imagem tomate' zIndex='0' top='29px' left='-457px' />
              <ImgElement src='/assets/ingredients.png' alt='imagem ingredientes' zIndex='-1' top='271px' right='-458px' />

              <div className='divStyled'>
                <Title02>Você tem alguma <br /> restrição alimentar?</Title02>
              </div>

              <div style={{ width: '50%' }}>
                <ContainerDiet>
                  {arrayRestrictionDiet.map((item) => (
                    <CardSelect text={item.text} htmlFor={item.htmlFor} margin='10px' />
                  ))}
                </ContainerDiet>

                <InputComponent htmlFor='inputRestrictionDiet' labelName='Adicione sua próprias restrições' placeholder='Digite aqui...' w='429px' />
                <span className='positionButton'>
                  <Button text='Enviar' w='102px' />
                </span>
              </div>
            </CardComponent>

            <CardComponent h='258px'>
              <div className='divStyled'>
                <Title02>Nível de dificuldade <br /> da dieta:</Title02>
              </div>

              <div className='divStyled divZIndex'>
                <CardSelect w='284px' text='Sem nenhum preparo' htmlFor='preparation0' margin='10px 100px 0 0' />
                <CardSelect w='284px' text='Com preparos rápidos' htmlFor='preparation1' margin='10px 100px 0 0' />
                <CardSelect w='284px' text='Gosto de cozinhar' htmlFor='preparation2' margin='10px 100px 0 0' />
              </div>

              <ImgElement src='/assets/elemento1.svg' alt='imagem elemento 01' top='74px' right='29px' zIndex='0' />
            </CardComponent>

            <CardComponent h='258px'>
              <ImgElement src='/assets/pizza2.png' alt='imagem elemento 01' top='74px' left='-500px' zIndex='0' />
              <ImgElement src='/assets/m.svg' alt='imagem elemento 01' zIndex='-1' top='74px' right='-456px' />


              <div className='divStyled'>
                <Title02>Investimento <br /> na dieta:</Title02>
              </div>

              <div className='divStyled divZIndex'>
                <CardSelect w='284px' text='Econômica' htmlFor='economic01' margin='10px 100px 0 0' />
                <CardSelect w='284px' text='Moderadamente econômica' htmlFor='economic02' margin='10px 100px 0 0' />
                <CardSelect w='284px' text='O que for melhor pra mim' htmlFor='economic03' margin='10px 100px 0 0' />
              </div>

              <ImgElement src='/assets/element2.png' alt='imagem elemento 01' top='74px' right='29px' zIndex='0' />
            </CardComponent>

            <CardComponent h='258px'>
              <div className='divStyled'>
                <Title02>Gostaria de utilizar <br /> suplementos esportivos?</Title02>
              </div>

              <div className='divStyled divZIndex'>
                <CardSelect w='284px' text='Sim' htmlFor='yes01' margin='10px 100px 0 0' />
                <CardSelect w='284px' text='Não' htmlFor='no01' margin='10px 100px 0 0' />
              </div>

              <ImgElement src='/assets/element03.svg' alt='imagem elemento 03' top='74px' right='29px' zIndex='0' />
            </CardComponent>

            <CardComponent h='272px'>
              <div className='divStyled'>
                <Title02>Você pratica <br /> exercícios físicos?</Title02>
              </div>

              <div className='divStyled divZIndex'>
                <CardSelect w='284px' text='Sim' htmlFor='yes02' margin='10px 100px 0 0' />
                <CardSelect w='284px' text='Não' htmlFor='no03' margin='10px 100px 0 0' />
                <SelectStyled w='284px'>
                  <option value="Meals01">BMX; mountain-bike  8,5</option>
                </SelectStyled>

                <span>
                  <InputComponent placeholder='Horário : do : treino' htmlFor='trainingTime' labelName='' w='284px' />
                </span>
              </div>

              <ImgElement src='/assets/element04.svg' alt='imagem elemento 03' top='74px' right='29px' zIndex='0' />
            </CardComponent>

            <CardComponent h='244px'>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                <Title02 style={{ marginBottom: '20px', marginRight: '22px' }} size='35px'>Comece agora!</Title02>
                <Button w='313px' text='Clique aqui para ver sua dieta' />
              </div>

            </CardComponent>

          </form>
        </SectionCard>

        <SectionCard>
          <form>
            <div className='divStyled02' >
              <ImgElement src='/assets/ellipse.svg' zIndex='-1' style={{ width: '100vw' }} top='-100px' left='0' />
              <ImgElement style={{ width: '100vw' }} src='/assets/fruits.png' zIndex='-1' top='460px' left='0' />

              <Title02 className='TitleStyled' color='var(--white)'>Conheça nossos planos </Title02>

              <div className='divStyled01'>

                {arrayPlans.map((item) => (
                  <CardComponent w='297px' h='574px' topBackground={true} hTop='152px' >

                    <div className='divStyled02'>
                      <div className='divStyled02 divStyled03'>
                        <Title02 color='var(--white)' size='30px' className='divZIndex' >{item.title}</Title02>
                        <Title02 color='var(--white)' size='22px' className='divZIndex' margin='-5px 0 10px 0' >{item.people}</Title02>
                      </div>

                      <Title02 className='TitleStyled02' size='30px'>R$</Title02>
                      <Title02 size='70px'>{item.value}</Title02>
                      <br />
                      <TextPlans>{item.text}</TextPlans>

                      <Button text='Começar agora' />
                    </div>
                  </CardComponent>
                ))}

              </div>

            </div>
          </form>
        </SectionCard>

        <SectionCard>
          <ContentFooter>

            <CardContents>
              <Title02 size='25px' color='var(--white)'>Receba conteúdos exclusívos!</Title02>
              <InputComponent w='451px' />

              <span>
                <Button w='107px' text='Enviar' />
              </span>
            </CardContents>

          </ContentFooter>
        </SectionCard>
      </Content>

    </MainTemplate>
  );
}

export default Home;
