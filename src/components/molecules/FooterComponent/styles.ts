import styled from "styled-components";

export const Container = styled.footer`
  width: 1289px;
  height: 328px;
  margin-top: 50px;

  position: absolute;
  bottom: -530px;
  
  hr {
    width: 1289px;
    border: 0.6px solid #353535;
    margin-top: 60px ;
    margin-bottom: 10px;
  }

  svg {
    width: 28px;
    height: 28px;
    color: var(--orange);
  }

  section {
    display: flex;
    justify-content: space-between;
  }

  .svgAlign {
    margin-right: 20px;
  }

  .styledButton {
    height: 171px;
    display: flex;
    align-items: end;
  }

  .styledDiv {
    margin-top: 15px;
  }

  .divStyled05 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .colorText {
    color: var(  --green-100);
  }
`;

export const Content = styled.div`
  p { 
    font-size: 16px;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }

  h3 {
  font-size: 16px;
  font-weight: 800;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 10px;
  }
`;