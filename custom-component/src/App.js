import React from 'react';
import styled from 'styled-components';
import Toggle from './components/Toggle';
import Modal from './components/Modal';
import './components/Tab';
import './components/Tag';
import './components/AutoComplete';
import './components/ClickToEdit';

function App() {
  return (
    <AppContainer>
      <Title> Toggle</Title>
      <Toggle />
      <br />
      <br />
      <Title>Modal</Title>
      <Modal />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: absolute; //top0위해서
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex; //고른 배열
  flex-direction: column;
  justify-content: center; // 콘텐츠 열 중앙
  align-items: center; //콘텐츠 행 중앙
  line-height: 2;
  background: linear-gradient(aliceblue, #8dc7e9);
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 1.6em;
  text-align: left;
`;
