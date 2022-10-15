import React from 'react';
import Button from '../../atoms/Button';

import { Container, CardModal, ImgModal, ImgModal02 } from './styles';

import { IoMdClose } from "react-icons/io";

type ModalPWAProps = {
  onClose: () => void;
}

const ModalPWA: React.FC<ModalPWAProps> = ({ onClose }) => {
  return (
    <Container>
      <CardModal>

        <div>
          <ImgModal src="/assets/elementModal.svg" alt="icone modal" />
          <ImgModal02 src="/assets/elementModal2.svg" alt="icone modal" />
        </div>

        <div className='infoPWA'>
          <p>Ative o recurso <br />
            <span>PWA</span> no seu <br />
            mobile!</p>

          <Button text='Veja como' w='157px' />
        </div>

        <button onClick={onClose} className='buttonStyled'>
          <IoMdClose/>
        </button>
      </CardModal>
    </Container>
  )
}

export default ModalPWA;