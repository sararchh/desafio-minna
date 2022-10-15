import React from 'react';

import { LabelStyled, Input, Container } from './styles';

type InputComponentProps = {
  htmlFor?: string,
  labelName?: string,
  type?: string,
  placeholder?: string,
  w?: string,
  mg?: string,
}

const InputComponent: React.FC<InputComponentProps> = (
  {
    htmlFor,
    labelName,
    type = 'text',
    placeholder,
    w = '167px',
    mg
  }
) => {
  return (
    <Container>
      <LabelStyled htmlFor={htmlFor} mg={mg}>{labelName}</LabelStyled>
      <Input type={type} id={htmlFor} name={htmlFor} placeholder={placeholder} w={w}/>
    </Container>
  );
}

export default InputComponent;