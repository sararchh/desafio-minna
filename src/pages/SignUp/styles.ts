import styled from "styled-components";

type CardInfoProps = {
  w?: string;
}

type Props = {
  top?: string;
  left?: string;
  right?: string;
  zIndex?: string;
}

export const Content = styled.div`
    max-width: 1292px;
    width: 1292px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    position: relative;

    margin-top: 80px;
`;

export const Title01 = styled.h1`
  font-size: 25px;
  font-weight: 700;

  padding-left: 60px;
`;

export const Title02 = styled.p`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  text-align: left;

  padding: 40px 0;
`;

export const Text = styled.p`
  font-family: 'Gilroy-Light', sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: var(--gray);

  margin-bottom: 40px ;
`;

export const CardInfo = styled.div<CardInfoProps>`
  width: ${({ w }) => w ? w : '50%'};
  height: 1109px;

  padding-top: 90px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

 .margin {
  margin-top: 50px ;
 }
`;

export const ButtonStyled = styled.button`
  height: 56px;
  min-width: 416px;;
  width: 416px;

  border-radius: 24px;
  padding: 12px 24px 12px 24px;

  font-family: 'Gilroy-Light', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 18px;

  box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.09);
  border-radius: 24px;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }
`;

export const ImageElement = styled.img<Props>`
  position: absolute;

  z-index: ${({zIndex})=> zIndex};
  top: ${({top})=> top};
  left: ${({left})=> left};
  right: ${({right})=> right};
`;