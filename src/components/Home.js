import React from 'react';
import styled from 'styled-components';
import ModelS from '../assets/images/model-s.jpg';
import ModelY from '../assets/images/model-y.jpg';
import Model3 from '../assets/images/model-3.jpg';
import ModelX from '../assets/images/model-x.jpg';
import SolarPanel from '../assets/images/solar-panel.jpg';
import SolarRoof from '../assets/images/solar-roof.jpg';
import Accessories from '../assets/images/accessories.jpg';


import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelS}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelY}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={Model3}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelX}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg={SolarPanel}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Coasts Less Than a New Roof Plus Solar Panels"
        backgroundImg={SolarRoof}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={Accessories}
        leftBtnText="Order now"
        rightBtnText=""
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
