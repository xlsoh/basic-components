import React, { useState } from 'react';
import styled from 'styled-components';

function Tag() {
  const [tags, setTags] = useState([]);
  console.log(tags);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <Container>
      <TagsInput>
        <Tags>
          {tags.map((tag, index) => (
            <TagItem key={index}>
              <TagTitle>{tag}</TagTitle>
              <CloseButton onClick={() => removeTags(index)}>✕</CloseButton>
            </TagItem>
          ))}
        </Tags>
        <input
          type='text'
          onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
          placeholder='Press enter to add tags'
        />
      </TagsInput>
    </Container>
  );
}
export default Tag;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagsInput = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 60%;
  margin: 10px 10px;
  padding: 0 8px;
  border: 1px solid #e1e5d9;
  border-radius: 6px;
  &:focus-within {
    border: 1px solid #0545da;
  }
  input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    background-color: inherit;
    padding: 4px 0 0 0;
    &:focus {
      outline: transparent;
    }
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

const TagItem = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  font-size: 0.9em;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #0808bd;
  color: #ffffff;
`;

const TagTitle = styled.span`
  margin-top: 3px;
`;

const CloseButton = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  border-radius: 50%;
  background: #ffffff;
  color: #0545da;
  cursor: pointer;
`;
