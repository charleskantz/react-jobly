import styled from '@emotion/styled';

export const Div = styled.div`
  ${props => props.margin
    ? `margin: ${props.margin};` : null}

  ${props => props.display
    ? `display: ${props.display};` : null}

  ${props => props.flex
    ? `flex-direction: ${props.flex};` : null}

  ${props => props.justify
    ? `justify-content: ${props.justify};` : null}

  ${props => props.align
    ? `align-items: ${props.align};` : null}
`;