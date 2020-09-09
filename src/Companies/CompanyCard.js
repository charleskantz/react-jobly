import React from "react";
import { Link } from "react-router-dom";
import { Card } from '../Common/Card';
import { Image } from '../Common/Image';
import { Heading, Body, LightMiceType } from '../Common/Type';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons';

export const DetailsDiv = styled.div`
  margin-left: 16px;
`;

const Container = styled.div`
  display: flex;
`;

const JobsCTA = styled.div`
  padding: 8px 8px 8px 16px;
  border: 1px solid rgb(228, 231, 240);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  &:hover {
    border: 1px solid #acbdd5;
  }
`;

const CompanyLink = styled(Link)`
  height: 48px;
  background-color: white;
  color: rgb(15, 111, 255);
  border: 1px solid rgb(15, 111, 255);
  border-radius: 4px;
  padding: 0 12px;
  text-align: center;
  font-size: 14px;
  letter-spacing: .2px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  line-height: 3.5;

  &:focus: {
    outline: 0;
    box-shadow: 0 0 0 4px rgba(0,102,255,.25);
  }

  &:hover {
    background-color: rgb(15, 111, 255);
    color: white;
  }

  &:disabled {
    border: 1px solid rgba(0,102,255,.25);
    color: rgba(0,102,255,.35);

    &:hover {
      background-color: white;
      border: 1px solid rgba(0,102,255,.25);
      cursor: not-allowed;
    }
  }
`;

/** CompanyCard - display component with company details
 *
 * @param {company} prop: company details
 */
function CompanyCard({ company }) {

  // separate details for easier reading
  const { handle, name, description, num_employees, logo_url, job_count } = company;

  return (
    <Card column>
      <Container>
        <Image
          src={logo_url}
          size={72}
          alt={`logo for ${name}`}
        >
        </Image>
        <DetailsDiv>
          <Heading>{name}</Heading>
          <Body>{description}</Body>
          <LightMiceType>
            <FontAwesomeIcon icon={faUsers} /> {num_employees} EMPLOYEES
          </LightMiceType>
        </DetailsDiv>
      </Container>
      <JobsCTA>
        <Body>
          <FontAwesomeIcon icon={faBriefcase} /> {job_count} Jobs Available
        </Body>
        <CompanyLink to={`/companies/${handle}`}>See Jobs</CompanyLink>
      </JobsCTA>
    </Card>
  )
}

export default CompanyCard;

//       <Link style={{textDecoration: "none", color:"black"}} className="Company" to={`/companies/${handle}`}>
