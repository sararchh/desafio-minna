import styled from "styled-components";

type Props = {
  w?: string
}

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImgElement01 = styled.img`
  height: 1041px;
  width: 782px;

  z-index: -1;
  position: absolute;
  top: -200px;
  right: -271px;
`;

export const Content = styled.div`
    max-width: 1292px;
    width: 1292px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: relative;
    
    .section01 {
      max-width: 100vw;
      width: 100vw;
      height: 370px;
    }

    .positionButton {
      position: absolute;
      top: 340px;
      right: 0;
  }
    
  `;

export const ContentStartNow = styled.div`
  width: 384px;

  position: absolute;
  left: 50px;
  top: 140px;
  
  p {
    font-size: 50px;
    font-weight: 700;
    line-height: 59px;
    margin-bottom: 30px;
}
`;

export const Section02 = styled.div`
  max-width: 100vw;
  width: 100vw;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

type PropsImg = {
  zIndex?: string,
  marginTop?: string;
  right?: string;
  top?: string;
  left?: string;
}

export const ImgElement = styled.img<PropsImg>`
  z-index: ${({ zIndex }) => zIndex ? zIndex : '1'};

  position: absolute;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : ''};
  right: ${({ right }) => right ? right : ''};
  top: ${({ top }) => top ? top : ''};
  left: ${({ left }) => left ? left : ''};
`;

export const Title01 = styled.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
`;

export const Title02 = styled.h1`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size:'25px';
  margin: 10px;
  font-weight: 800;
  line-height: 30px;
`;

export const CardUser01 = styled.div`
  height: auto;
  width: 346px;
  z-index: 9;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  .labelMargin {
    margin: 0 0 5px 30px;
  }

  .cardCheck {
    justify-content: space-between;
    margin: 0 40px;
  }

   input[type="radio"]:checked{
    accent-color: var(--orange2);
  }
    
`;

export const LabelStyled = styled.label`
 font-family: 'Gilroy-Bold', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  margin: 5px;
`;

export const SelectStyled = styled.select<Props>`
  width: ${({ w }) => w ? w : '346px'};
  height: 42px;

  box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.09);
  border-radius: 30px;
  border: none;
  outline: none;

  color: ${({ color }) => color ? color : 'var(--gray)'};
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  padding: 0 10px;

  margin: 10px 0 0 0;

  option {
    color: var(--gray);
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

`;

export const ContainerDiet = styled.div`
  width: 466px;

  flex-wrap: wrap;
  flex-direction: row;
  display: flex;

`;