import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: var(--background02);
    z-index: 99;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardModal = styled.div`
  height: 490px;
  width: 957px;

  background-color: var(--white);
  border-radius: 50px;
  
  position: relative;

  display: flex;
  align-items: center;
  justify-content: right;

  span {
    color: var(--orange);
  }

  p {
    font-family: 'Gilroy-Bold', sans-serif;
    font-size: 45px;
    font-weight: 800;
    line-height: 55px;
    text-align: left;

    margin-bottom: 20px;
  }

  .infoPWA {
    width: 50%;
  }

  svg {
    height: 18px;
    width: 18px;
    color: var(--gray);
  }

  .buttonStyled {
    position: absolute;
    top: 33px;
    right: 28px;
  }
`;

export const ImgModal = styled.img`
  position: absolute;
  top: 7px;
  left: 3px;
`;

export const ImgModal02 = styled.img`
  position: absolute;
  top: 194px;
  left: 173px;
`;