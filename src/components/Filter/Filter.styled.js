import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  display: block;
  width: 200px;
  margin-top: 5px;
  outline: none;
  border: 1px solid #cccccc;
  :focus {
    border: 3px solid rgba(0,100,355,0.3);
    border-radius: 5px;
  }
`;