import React from 'react';
import styled from 'styled-components';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import './component/Tab';
import './component/Tag';
import './component/AutoComplete';
import './component/ClickToEdit';

function App() {
  return (
    <AppContainer>
      <Title> Toggle</Title>
      <Toggle />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: absolute; //top0위해서
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex; //고른 배열
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2;
  background-color: aliceblue;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 1.6em;
`;
