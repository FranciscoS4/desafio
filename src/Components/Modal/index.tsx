import React from 'react';
import ReactDOM  from 'react-dom';

import {FiX} from 'react-icons/fi';

import { Wrapper, Header, StyledModal, HeaderText, CloseButton, Content, Backdrop } from './styles';

interface ModalProps {
  idPhoto?: string;
  isOpen: boolean;
  hide: () => void;
  thumbnail_url?: string;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, hide, thumbnail_url, title}) => {
  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{title}</HeaderText>
            <CloseButton onClick={hide}><FiX size={25}/></CloseButton>
          </Header>
          <Content>
            <img
              src={thumbnail_url}
              alt={title}
            />
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  );
    return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
