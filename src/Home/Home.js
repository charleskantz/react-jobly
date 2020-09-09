import React from 'react';
import { HomeHeading, HomeSubHeading } from '../Common/Type';
import { Button } from '../Common/Button';
import { HomeDiv, Div } from '../Common/Div';
import heroImg from '../Common/home_hero_img.svg';
import { Image } from '../Common/Image';

// Homepage Component
function Home() {
  return (
    <HomeDiv display="flex">
      <Image src={heroImg} size="280"/>
      <Div margin="1rem">
        <HomeHeading>Apply to the best jobs with Jobly</HomeHeading>
        <HomeSubHeading>
          Find and apply privately with one-click applications.
          See salary and equity upfront.
        </HomeSubHeading>
        <Button solid>Find Jobs Now</Button>
      </Div>
    </HomeDiv>
  );
}

export default Home;