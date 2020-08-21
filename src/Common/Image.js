import styled from '@emotion/styled';

export const Image = styled.img`
  ${props => props.size
    ? `height: ${props.size}px;
       width: ${props.size}px;`
    : `height: 72px;
       width: 72px;`}
  border: 1px solid rgb(242, 244, 247);
  border-radius: 4px;
`;