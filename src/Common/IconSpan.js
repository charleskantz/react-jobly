import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { Image } from './Image';

const IconSpanStyle = styled.span`
  display: flex;
  ${props => props.color === "blue"
    ? `color: rgb(15,111,255);`
    : `color: #999;`}

  font-weight: 500;
  text-rendering: optimizeLegibility;
  align-items: center;
  cursor: pointer;
  padding: ${props => props.padding
    ? props.padding : "none"};

  & > p {
    padding-left: 8px;
    display: inline-block;
    text-decoration: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

function IconSpan({ color, text, image, size, iconSize, padding }) {

  const userImage = typeof image === "string"
  ? <Image size={size} src={image} />
  : <FontAwesomeIcon icon={image} size={iconSize} />;

  return (
    <IconSpanStyle color={color} padding={padding}>
      {userImage}
      <p>{text}</p>
    </IconSpanStyle>
  )
}

export default IconSpan;