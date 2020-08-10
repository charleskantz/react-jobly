import React from 'react';

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
    <nav>
      <ul>
        <li>
          <button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)} >
            {"<"}
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} style={{display: "inline"}}>
            <button onClick={() => paginate(number)} >
              {number === currentPage? `${number}*` : number}
            </button>
          </li>
        ))}
        <li>
          <button disabled={currentPage === pageNumbers.length} onClick={() => paginate(currentPage + 1)} >
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;