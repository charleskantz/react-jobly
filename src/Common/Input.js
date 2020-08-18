import styled from '@emotion/styled';

export const Input = styled.input`
  border: 1px solid rgb(228, 231, 240);
  border-radius: 4px;
  background-color: rgb(242, 244, 247);
  height: 48px;
  font-size: 16px;
  padding: 6px 8px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  display: block;
  width: 100%;

  &::placeholder {
    color: #7b91b1;
  }

  &:focus {
    border-color: #0f6fff;
    background-color: #f2f8ff;
    outline: 0;
    box-shadow: 0 0 0 4px rgba(0,102,255,.25);
  }

  &:disabled {
    color: #7b91b1;
    background-color: white;
  }
`;