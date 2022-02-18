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
    for (let i = 0; i < obj.length; i++) {
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
          <li key={suggestionKeywords}>{suggestionKeywords}</li>
        ))}
      </ul>
    );
  };

  return (
    <Container>
      <AutoCompleteText>
        <input
          type='text'
          onChange={(e) => {
            matchKeywords(e);
          }}
          placeholder='Apple,Banana,Carrot,Durian. Choose One!'
          class='input_obj'
        />
        <button
          onClick={() => {
            resetSuggestionLists();
            resetInput();
          }}
        >
          ✕
        </button>
        {renderSuggestions()}
      </AutoCompleteText>
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
`;

const AutoCompleteText = styled.div`
  width: 100%;
  border: 1px solid grey;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.73);
  input {
    background-color: inherit;
    width: 90%;
    height: 40px;
    border: none;
    color: rgba(0, 0, 0, 0.73);
    padding: 10px 5px;
    box-sizing: border-box;
    outline: none;
  }
  ul {
    text-align: left;
    margin: 0;
    padding: 0;
    border-top: 1px solid grey;
  }
  li {
    list-style: none;
    padding: 0 0.4em;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    font-size: 0.9em;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
  }
`;
