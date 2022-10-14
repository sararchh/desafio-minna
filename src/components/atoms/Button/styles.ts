import styled from 'styled-components';

export type Props = {
  borderColor?: string,
  w?: string,
}

export const ButtonStyled = styled.button<Props>`
  height: 50px;
  width: ${({ w }) => w};

  border-radius: 50px;
  background:  var(--orange);
  border: 2px solid ${({ borderColor }) => borderColor ? borderColor : 'var(--orange)'};

  color: var(--white);
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  margin-right: 20px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

`;
