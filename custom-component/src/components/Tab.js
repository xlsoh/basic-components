import React, { useState } from 'react';
import styled from 'styled-components';

function Tab(params) {
  const [toggleMenu, setToggleMenu] = useState(0);

  const ToggleTabs = (index) => {
    setToggleMenu(index);
    console.log(index);
  };

  return (
    <Container>
      <TabsMenu>
        {toggleMenu === 1 ? (
          <ActiveTab value={toggleMenu}>Title 1</ActiveTab>
        ) : (
          <Tabs
            onClick={() => {
              ToggleTabs(1);
            }}
          >
            Title 1
          </Tabs>
        )}
        {toggleMenu === 2 ? (
          <ActiveTab value={toggleMenu}>Title 2</ActiveTab>
        ) : (
          <Tabs
            onClick={() => {
              ToggleTabs(2);
            }}
          >
            Title 2
          </Tabs>
        )}
        {toggleMenu === 3 ? (
          <ActiveTab value={toggleMenu}>Title 3</ActiveTab>
        ) : (
          <Tabs
            onClick={() => {
              ToggleTabs(3);
            }}
          >
            Title 3
          </Tabs>
        )}
      </TabsMenu>
      <TabsContent>
        {toggleMenu === 1 ? <ActiveContent>Content 1</ActiveContent> : <></>}
        {toggleMenu === 2 ? <ActiveContent>Content 2</ActiveContent> : <></>}
        {toggleMenu === 3 ? <ActiveContent>Content3</ActiveContent> : <></>}
      </TabsContent>
    </Container>
  );
}

export default Tab;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TabsMenu = styled.div`
  background-color: #edffb3;
  width: 100%;
  display: flex;
  margin-bottom: 1em;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
`;

const ActiveTab = styled.span`
  font-weight: 800;
  background-color: #c3ff00;
  padding: 1em;
  flex: 1;
  border-top-left-radius: ${({ value }) => (value === 1 ? '12px' : '0')};
  border-top-right-radius: ${({ value }) => (value === 3 ? '12px' : '0')};
`;

const Tabs = styled.span`
  cursor: pointer;
  font-weight: 500;
  display: inline-block;
  padding: 1em;
  flex: 1;
`;

const TabsContent = styled.div`
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActiveContent = styled.div``;
