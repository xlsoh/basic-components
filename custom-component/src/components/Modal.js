import React, { useState } from 'react';
import styled from 'styled-components';

export default function Modal(params) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  console.log(modal);

  return (
    <Container>
      {!modal ? (
        <OpenButton onClick={handleModal}>Open Modal</OpenButton>
      ) : (
        <ModalBackground>
          <ModalContainer>
            <CloseModal>
              <CloseButton onClick={handleModal}>✕</CloseButton>
            </CloseModal>
            <ShowModal>
              <ModalContent>Modal Content</ModalContent>
            </ShowModal>
          </ModalContainer>
        </ModalBackground>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OpenButton = styled.div`
  box-sizing: border-box;
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #c3ff00;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  transition-duration: 0ms.3s;
  :active {
    margin: 2px;
    box-shadow: none;
  }
`;

const ModalBackground = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  box-sizing: border-box;
  padding: 0.5em;
  width: 80%;
  height: 70%;
  border-radius: 12px;
  background-color: #ffffff;
`;

const CloseModal = styled.div`
  margin-right: 0.5em;
  display: flex;
  align-items: end;
  flex-direction: column;
`;

const CloseButton = styled.div`
  margin: 0.5em;
  cursor: pointer;
  font-size: 1em;
  font-weight: 800;
`;

const ShowModal = styled.div`
  margin: 0.5em;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ModalContent = styled.div``;
