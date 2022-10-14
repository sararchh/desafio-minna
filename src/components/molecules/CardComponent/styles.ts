import styled from 'styled-components';

type Props = {
  h: string;
  w: string;
  br: string;
}

export const Container = styled.div<Props>`
  height: ${({ h }) => h};
  width: ${({ w }) => w};

  background: var(--white);
  box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.09);
  border-radius: ${({ br }) => br};

  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 15px 10px;

  .topBackground {
    position: absolute;
    width: 958px;
    height: 103px;
    top: 0;
    left: 0px;

    background: var(--orange);
    box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.09);
    border-radius: 50px 50px 0px 0px;
  }

`;
