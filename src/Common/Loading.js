import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

function Loading () {
  return (
    <CenterDiv>
      <FontAwesomeIcon icon={faCircleNotch} color="rgb(15,111,255)" size="4x" spin />
    </CenterDiv>
  )
}

export default Loading;