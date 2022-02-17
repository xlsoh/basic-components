import React, { useState } from 'react';
import styled from 'styled-components';

function AutoComplete() {
  const [Keywords, SetKeywords] = useState([
    'a',
    'b',
    'c',
    'd',
    'apple',
    'banana',
    'carrot',
    'durian',
    'acorn',
    'blueberry',
  ]);
  const [suggestionLists, SetSuggestionLists] = useState([]);

  const resetInput = () => {
    const obj = document.getElementsByClassName('input_obj');
    for (const i = 0; i < obj.length; i++) {
      obj[i].value = '';
    }
  };

  const resetSuggestionLists = () => {
    SetSuggestionLists([]);
  };

  const matchKeywords = (e) => {
    const value = e.target.value;
    console.log(value);

    const suggestion = [];

    if (value.length === 0) {
      resetSuggestionLists();
    } else if (value.length > 0) {
      Keywords.map((e) => {
        const lowerValue = value.toLowerCase();
        const keyLen = value.length;
        const matchWords = e.toLowerCase().substring(0, keyLen);
        if (lowerValue === matchWords) {
          suggestion.push(e);
        }
        SetSuggestionLists(suggestion);
      });
    }
  };

  const renderSuggestions = () => {
    if (suggestionLists.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestionLists.map((suggestionKeywords) => (
          <SuggestionItem key={suggestionKeywords}>
            {suggestionKeywords}
          </SuggestionItem>
        ))}
      </ul>
    );
  };

  return (
    <Container>
      <AutoCompleteInput>
        <input
          type='text'
          onChange={(e) => {
            matchKeywords(e);
          }}
          placeholder='Apple,Banana,Carrot,Durian. Choose One!'
          class='input_obj'
        />
        <ResetButton
          onClick={() => {
            resetSuggestionLists();
            resetInput();
          }}
        >
          ✕
        </ResetButton>
      </AutoCompleteInput>
      <div>{renderSuggestions()}</div>
    </Container>
  );
}
export default AutoComplete;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AutoCompleteInput = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 80%;
  margin: 10px 10px;
  padding: 0 8px;
  border: 1px solid #e1e5d9;
  border-radius: 6px;
  &:focus-within {
    border: 1px solid #0545da;
  }
  input {
    border: none;
    width: 80%;
    height: 46px;
    font-size: 14px;
    background-color: inherit;
    padding: 4px 0 0 0;
    &:focus {
      outline: transparent;
    }
  }
`;
const ResetButton = styled.div`
  display: flex;
  align-items: center;
`;

const SuggestionItem = styled.li`
  list-style: none;
`;
