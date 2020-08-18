import React from "react";
import { Link } from "react-router-dom";
import { Card } from '../Common/Card';
import { Image } from '../Common/Image';
import { Heading, Body, LightMiceType } from '../Common/Type';
import styled from '@emotion/styled';

const DetailsDiv = styled.div`
  margin-left: 16px;
`;

// TODO: move CSS to separate file, and clean up class names to match component

/** CompanyCard - display component with company details
 *
 * @param {company} prop: company details
 */
function CompanyCard({ company }) {

  // separate details for easier reading
  const { handle, name, description, num_employees, logo_url } = company;

  // TODO: make this an import
  const default_logo_url = "https://pbs.twimg.com/profile_images/1110319067280269312/iEqpsbUA_400x400.png"

  return (
    <Card>
      <Image
        src={logo_url || default_logo_url}
        alt={`logo for ${name}`}
      >
      </Image>
      <DetailsDiv>
        <Heading>{name}</Heading>
        <Body>{description}</Body>
        <LightMiceType>{num_employees} EMPLOYEES</LightMiceType>
      </DetailsDiv>
    </Card>
  )
}

export default CompanyCard;

//       <Link style={{textDecoration: "none", color:"black"}} className="Company" to={`/companies/${handle}`}>
