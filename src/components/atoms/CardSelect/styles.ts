import styled from 'styled-components';

type ContainerProps = {
  margin: string,
  w?: string,
}

export const Container = styled.div<ContainerProps>`
  width: ${({ w }) => w};
  height: 42px;

  background: var(--white);
  box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.09);
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;

  margin: ${({ margin }) => margin};

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
