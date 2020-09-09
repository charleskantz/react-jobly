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

  ${props => props.text
    ? `text-align: ${props.text};` : null}
`;

export const HomeDiv = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    width: 700px;
    margin: 1rem auto;
  }
`;