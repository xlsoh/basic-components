import React, { useState } from 'react';
import styled from 'styled-components';

function ClickToEdit() {
  const [info, SetInfo] = useState({ name: 'Park so hyun', age: 0 });

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
    background-color: inherit;
    width: 90%;
    height: 40px;
    color: rgba(0, 0, 0, 0.73);
    padding: 10px 5px;
    box-sizing: border-box;
  }
`;

const ShowInfo = styled.div`
  margin-top: 1em;
  font-size: 1em;
  font-weight: 400;
`;
