import styled from '@emotion/styled';

/** Card - styled flex container
 *  prop: column (<Card column>) - changes flex direction to column
 */

export const Card = styled.div`
  background-color: white;
  border: 1px solid rgb(228, 231, 240);
  border-radius: 4px;
  width: 400px;
  margin: 1rem auto;
  padding: 16px;
  display: flex;
  flex-direction: ${props =>
    props.column && 'column'}
`;