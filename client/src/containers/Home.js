import React from 'react';
import Banner from '../components/Banner';
import { LIGHT_BEIGE } from '../components/shared/Constant';

const Home = () => {
  return (
    <div style={{ backgroundColor: LIGHT_BEIGE }}>
      <Banner />
    </div>
  )
};

export default Home;