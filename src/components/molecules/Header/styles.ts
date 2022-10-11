import styled from "styled-components";

export const Container =  styled.header`
  width: 100vw;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;

export const ContentInfo = styled.div`
  width: 529px;
  display: flex;
  margin: 0 10px 0 100px;

  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
    margin: 0 10px;
  }
`;

export const ButtonRegister = styled.button`
  height: 50px;
  width: 157px;

  border-radius: 50px;
  background: var(--orange);
  border: 2px solid #FFFFFF;

  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  margin-right: 20px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ButtonLogin = styled.button`
  height: 50px;
  width: 157px;

  background: #F87D50;
  border: 1px solid #F87D50;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 50px;

  
  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;