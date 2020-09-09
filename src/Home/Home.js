import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../AuthContext';
import { HomeHeading, HomeSubHeading } from '../Common/Type';
import { Button } from '../Common/Button';
import { HomeDiv, Div } from '../Common/Div';
import heroImg from '../Common/home_hero_img.svg';
import { Image } from '../Common/Image';

// Homepage Component
function Home() {

  const { userInfo } = useContext(AuthContext);
  const history = useHistory();

  const handleHomeClick = () => {
    if (!userInfo) {
      history.push('/login');
    } else {
      history.push('/companies')
    }
  }

  return (
    <HomeDiv display="flex">
      <Image src={heroImg} size="280"/>
      <Div margin="1rem">
        <HomeHeading>Apply to the best jobs with Jobly</HomeHeading>
        <HomeSubHeading>
          Find and apply privately with one-click applications.
          See salary and equity upfront.
        </HomeSubHeading>
        <Button solid onClick={handleHomeClick} >Find Jobs Now</Button>
      </Div>
    </HomeDiv>
  );
}

export default Home;