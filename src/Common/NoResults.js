import React from 'react';
import { Heading } from './Type';
import { Div } from './Div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'

function NoResults() {
  return (
    <Div text="center" margin="3rem 0 0">
      <Heading>
        <FontAwesomeIcon icon={faHeartBroken} color="tomato" size="1x" /> Sorry, no results found.
      </Heading>
    </Div>
  )
}

export default NoResults;