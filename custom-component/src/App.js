import React from 'react';
import styled from 'styled-components';
import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Tab from './components/Tab';
import Tag from './components/Tag';
import AutoComplete from './components/AutoComplete';
import ClickToEdit from './components/ClickToEdit';

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
        <Tab />
      </Wrapper>
      <br />
      <Title>Tag</Title>
      <Wrapper>
        <Tag />
      </Wrapper>
      <br />
      <Title>AutoComplete</Title>
      <Wrapper>
        <AutoComplete />
      </Wrapper>
      <br />
      <Title>ClickToEdit</Title>
      <Wrapper>
        <ClickToEdit />
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 5em;
  margin-bottom: 5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2em;
  font-family: 'Helvetica', 'Arial', sans-serif;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 1.6em;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  width: 70%;
  height: 25%;
  min-height: 10em;
  min-width: 18em;
  border-radius: 6px;
  background-color: rgba(242, 242, 242, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
`;
