import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  border: 2px solid black;
  padding: 10px 10px;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  display: block;
  outline: none;
  width: 150px;
  margin-top: 5px;
  border: 1px solid #cccccc;
  :focus {
    border: 3px solid rgba(0,100,355,0.3);
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  width: fit-content;
  cursor: pointer;
  margin: 0;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  :active {
    background-color: rgba(0,100,355,0.3);
  }
`;