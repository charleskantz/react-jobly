import styled from '@emotion/styled';

export const Button = styled.button`
  ${props => props.width
    ? `width: ${props.width};` : null}
  height: 48px;
  background-color: white;
  color: rgb(15, 111, 255);
  border: 1px solid rgb(15, 111, 255);
  border-radius: 4px;
  padding: 8px 12px;
  text-align: center;
  font-size: 14px;
  letter-spacing: .2px;
  cursor: pointer;
  display: inline-block;
  margin: ${props => props.margin || 'none'};

  &:focus: {
    outline: 0;
    box-shadow: 0 0 0 4px rgba(0,102,255,.25);
  }

  &:hover {
    background-color: rgb(15, 111, 255);
    color: white;
  }

  &:disabled {
    border: 1px solid rgba(0,102,255,.25);
    color: rgba(0,102,255,.35);

    &:hover {
      background-color: white;
      border: 1px solid rgba(0,102,255,.25);
      cursor: not-allowed;
    }
  }
`;