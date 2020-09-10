import React, { useContext } from 'react';
import AuthContext from '../AuthContext';
import { HomeHeading, HomeSubHeading } from '../Common/Type';
import { ButtonLink } from '../Common/StyledLink';
import { HomeDiv, Div } from '../Common/Div';
import heroImg from '../Common/home_hero_img.svg';
import { Image } from '../Common/Image';

// Homepage Component
function Home() {

  const { userInfo } = useContext(AuthContext);

  const buttonHref = userInfo ? '/companies' : '/login';

  return (
    <HomeDiv display="flex">
      <Image src={heroImg} size="280"/>
      <Div margin="1rem">
        {userInfo &&
          <HomeSubHeading>
            Welcome back, {userInfo.first_name}.
          </HomeSubHeading>
        }
        <HomeHeading>Apply to the best jobs with Jobly</HomeHeading>
        <HomeSubHeading>
          Find and apply privately with one-click applications.
          See salary and equity upfront.
        </HomeSubHeading>
        <ButtonLink solid href={buttonHref} >Find Jobs Now</ButtonLink>
      </Div>
    </HomeDiv>
  );
}

export default Home;