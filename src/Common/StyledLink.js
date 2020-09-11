import { Link } from "react-router-dom";
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline;
  font-weight: 500;
  color: rgb(15, 111, 255);

  &:hover {
    color: rgb(25, 121, 255);
    cursor: pointer;
  }
`;

export const ButtonLink = styled.a`
  display: inline-block;
  height: 48px;
  background-color: ${props => props.solid
    ? 'rgb(15, 111, 255)' : 'white'};
  color: ${props => props.solid
    ? 'white' : 'rgb(15, 111, 255)'};
  border: 1px solid rgb(15, 111, 255);
  border-radius: 4px;
  padding: 0 12px;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  letter-spacing: .2px;
  cursor: pointer;
  text-decoration: none;
  line-height: 3.5;

  &:focus: {
    outline: 0;
    box-shadow: 0 0 0 4px rgba(0,102,255,.25);
  }

  &:hover {
    background-color: ${props => props.solid
      ? 'rgb(25, 121, 255)' : 'rgb(15, 111, 255)'};
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