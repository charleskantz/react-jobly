import React from 'react';
import { Button } from '../Common/Button';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

/** Pagination - nav component to display cards in digestible chunks
 *
 * @param {number} cardsPerPage how many we want per page
 * @param {number} totalCards total number of cards
 * @param {number} currentPage what page user is currently on
 * @param {function} paginate: handles page switching
 */
function Pagination({ cardsPerPage, totalCards, paginate, currentPage }) {

  const pageNumbers = [];

  // auto-generate page numbers
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <ul>
        <li style={{display: "inline"}}>
          <Button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            width="48px"
          >
            {"<"}
          </Button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} style={{display: "inline"}}>
            <Button
              onClick={() => paginate(number)}
              width="48px"
            >
              {number === currentPage? `${number}*` : number}
            </Button>
          </li>
        ))}
        <li style={{display: "inline"}}>
          <Button
            disabled={currentPage === pageNumbers.length}
            onClick={() => paginate(currentPage + 1)}
            width="48px"
          >
            {">"}
          </Button>
        </li>
      </ul>
    </Nav>
  )
}

export default Pagination;