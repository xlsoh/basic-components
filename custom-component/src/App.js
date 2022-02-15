import React from 'react';
import styled from 'styled-components';
import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Tab from './components/Tab';
import Tag from './components/Tag';
import './components/AutoComplete';
import './components/ClickToEdit';

function App() {
  return (
    <AppContainer>
      <Title> Toggle</Title>
      <Wrapper>
        <Toggle />
      </Wrapper>
      <br />
      <Title>Modal</Title>
      <Wrapper>
        <Modal />
      </Wrapper>
      <br />
      <Title>Tab</Title>
      <Wrapper>
        {' '}
        <Tab />
      </Wrapper>
      <br />
      {/* <Title>Tag</Title>
      <Wrapper>
        <Tag />
      </Wrapper> */}
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
  padding-top: 3em;
  padding-bottom: 5em;
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

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 25%;
  border: 1px solid #e1e5d9;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin: 1em;
`;
