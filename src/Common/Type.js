import styled from '@emotion/styled';

export const Heading = styled.h1`
  display: block;
  color: #050c26;
  line-height: 1.25;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 4px;
  text-rendering: optimizeLegibility;
  letter-spacing: .4px;
`;

export const HomeSubHeading = styled.h2`
  display: block;
  color: #050c26;
  line-height: 1.25;
  font-size: 24px;
  padding-bottom: 1.5rem;
  text-rendering: optimizeLegibility;
  letter-spacing: .2px;
`;

export const HomeHeading = styled.h1`
  display: block;
  color: #050c26;
  line-height: 1.05;
  font-weight: 700;
  font-size: 60px;
  padding-bottom: 1.5rem;
  text-rendering: optimizeLegibility;
  letter-spacing: .1px;

`;

export const Body = styled.p`
  display: block;
  color: #050c26;
  line-height: 1.25;
  font-size: 14px;
  padding-top: 3px;
  text-rendering: optimizeLegibility;
  letter-spacing: .3px;
`;

export const LightMiceType = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 13.75px;
  text-rendering: optimizeLegibility;
  letter-spacing: .3px;
  padding-top: 5px;
  color: ${props => props.color
    ? props.color : "rgb(123, 145, 177)"};
  display: ${props => props.display
    ? props.display : "block"};
  margin: ${props => props.margin
    ? props.margin : "none"};
`;

export const Link = styled.a`
  display: inline;
  font-weight: 500;
  color: rgb(15, 111, 255);

  &:hover {
    color: rgb(25, 121, 255);
    cursor: pointer;
  }
`;
