import React, { useState } from 'react';
import styled from 'styled-components';

function Toggle(params) {
  const [value, SetValue] = useState(false);
  console.log(value);
  return (
    <Wrapper>
      <Container
        onClick={() => {
          SetValue(!value);
        }}
        value={value}
      >
        <Circle value={value} />
      </Container>
      <div>Toggle Switch {(value && <>ON</>) || <>OFF</>}</div>
    </Wrapper>
  );
}

export default Toggle;

const Wrapper = styled.div`
  box-sizing: border-box;
  // margin: 0 5px;
  width: 70%; //너비
  height: 25%; //높이
  border: 1px solid #e1e5d9;
  border-radius: 12px;
  display: flex; //가운데 배열
  flex-direction: column; // 줄줄이 배열
  justify-content: center; //세로 중앙
  align-items: center; // 가로 중앙
  background-color: white;
  font-weight: 350;
  font-size: 1.1em;
`;

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 5px;
  width: 80px;
  height: 35px;
  border: 2px solid #e1e5d9;
  border-radius: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ value }) => (value ? 'white' : 'black')};
`;

const Circle = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #c3ff00;
  margin: 0 5px;
  transform: ${({ value }) => (value ? 'translateX(43px)' : 'translate(0px)')};
  transition: all 0.2s ease-in-out;
`;
