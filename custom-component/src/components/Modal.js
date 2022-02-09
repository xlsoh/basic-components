import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export default function Modal(params) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  console.log(modal);

  return (
    <Wrapper>
      {!modal ? (
        <OpenButton onClick={handleModal}>Open Modal</OpenButton>
      ) : (
        <ModalBackground>
          <ModalContainer>
            Hello Modal!
            <CloseButton onClick={handleModal}>Close</CloseButton>
          </ModalContainer>
        </ModalBackground>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 25%;
  border: 1px solid #e1e5d9;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OpenButton = styled.div`
  box-sizing: border-box;
  margin: 0 5px;
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
  padding: 5px;
  width: 300px;
  height: 150px;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  box-sizing: border-box;
  margin: 2px;
  width: 80px;
  height: 35px;
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