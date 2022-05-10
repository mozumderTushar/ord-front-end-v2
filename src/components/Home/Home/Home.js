import React from 'react';
import Navbar from '../../Shared/NavBar/NavBar/NavBar';
import Gallery from '../Gallery/Gallery';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Gallery />
    </div>
  );
};

export default Home;