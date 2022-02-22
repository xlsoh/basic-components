import React, { useState } from 'react';
import styled from 'styled-components';

function ClickToEdit() {
  const [info, SetInfo] = useState({ name: 'Anne', age: 15 });

  const onChangeInfo = (e) => {
    const target = e.target;
    if (target.type === 'text') {
      SetInfo({ name: target.value, age: info.age });
    } else if (target.type === 'number') {
      if (target.value < 1) {
        target.value = 1;
      } else {
        SetInfo({ name: info.name, age: target.value });
      }
    }
  };

  return (
    <Container>
      <ClickToEditInfo>
        <form>
          <div>
            <span>이름</span>
            <input
              type='text'
              placeholder='Please enter your name'
              onChange={(e) => {
                console.log(e.target.type);
                onChangeInfo(e);
              }}
            />
          </div>
          <div>
            <span>나이</span>
            <input
              type='number'
              placeholder='Please enter your age'
              onChange={(e) => {
                onChangeInfo(e);
              }}
            />
          </div>
        </form>
      </ClickToEditInfo>
      <ShowInfo>
        이름: {info.name} 나이: {info.age}
      </ShowInfo>
    </Container>
  );
}

export default ClickToEdit;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1em 0 1em 0;
`;

const ClickToEditInfo = styled.div`
  span {
    font-size: 1em;
  }
  input {
    margin-left: 0.5em;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
    border: 1px solid grey;
    background-color: inherit;
    color: rgba(0, 0, 0, 0.73);
    margin-bottom: 1em;
    padding: 1.5em 1em;
    height: 30px;
    width: 85%;
    min-width: 15em;
  }
`;

const ShowInfo = styled.div`
  font-weight: 500;
`;
