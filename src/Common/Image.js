import styled from '@emotion/styled';

export const Image = styled.img`
  ${props => props.size
    ? `height: ${props.size}px;
       width: auto;`
    : `height: 72px;
       width: auto;`}
  border: 1px solid rgb(242, 244, 247);
  border-radius: 4px;
`;