import React, { useState } from 'react';
import styled from 'styled-components';

function Toggle(params) {
  const [value, SetValue] = useState(false);
  console.log(value);

  return (
    <Container>
      <ToggleContainer
        onClick={() => {
          SetValue(!value);
        }}
        value={value}
      >
        <Circle value={value} />
      </ToggleContainer>
      <div>Toggle Switch {(value && <>ON</>) || <>OFF</>}</div>
    </Container>
  );
}

export default Toggle;

const Container = styled.div`
  padding: 1em;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ToggleContainer = styled.div`
  box-sizing: border-box;
  margin: 1% 0;
  width: 80px;
  height: 35px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ value }) =>
    value ? '#0808bd' : 'rgba(0, 0, 0, 0.5);'};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 0 5px;
  transform: ${({ value }) => (value ? 'translateX(43px)' : 'translate(0px)')};
  transition: all 0.2s ease-in-out;
`;
