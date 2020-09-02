import styled from '@emotion/styled';

/** Card - styled flex container
 *  prop: column (<Card column>) - changes flex direction to column
 */

export const Card = styled.div`
  background-color: ${props =>
    props.transparent ? "transparent" : "white"};
  border: 1px solid rgb(228, 231, 240);
  border-radius: 4px;
  margin: .5rem;
  padding: 16px;
  display: flex;
  flex-direction: ${props =>
    props.column && 'column'};

    @media (min-width: 768px) {
      width: 700px;
      margin: 1rem auto;
    }
`;