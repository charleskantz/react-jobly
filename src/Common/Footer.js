import React from 'react';
import { LightMiceType } from './Type';
import styled from '@emotion/styled';

const FooterDiv = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: center;

  @media (min-width: 768px) {
    width: 600px;
  }
`;

function Footer() {
  return (
    <FooterDiv>
    <LightMiceType>
      Jobly is a demo site, not a real job site (hopefully I fooled you).
    </LightMiceType>
    <LightMiceType>
      Coded using React and Express with @emotion/styled. Jobly is responsive and designed mobile-first.
    </LightMiceType>
    </FooterDiv>
  )
}

export default Footer;