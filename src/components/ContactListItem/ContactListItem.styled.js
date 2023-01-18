import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ItemContact = styled.p`
  margin: 0;
  padding: 0;
`;

export const ItemDeleteBtn = styled.button`
  margin: 0;
  padding: 5px;
  width: fit-content;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  :hover {
    background-color: #cccccc;
  }
`;