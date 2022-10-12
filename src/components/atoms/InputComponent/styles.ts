import styled from "styled-components";

type InputProps = {
  w: string;
}

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 margin: 10px;
`;

export const LabelStyled = styled.label`
 font-family: 'Gilroy-Bold', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  margin: 0 0 5px 30px;
`;

export const Input = styled.input<InputProps>`
  width: ${({ w }) => w};
  height: 42px;
 
  padding: 0 10px;

  background: var(--white);
  box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.09);
  border-radius: 30px;
  border: none;
  outline: none;

  font-weight: 800;
  font-size: 16px;
  line-height: 20px;

  color: var(--gray); 

  ::placeholder{
    font-size: 16px;
  }
`;