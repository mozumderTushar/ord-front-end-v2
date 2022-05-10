import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/NavBar/NavBar/NavBar';
import Gallery from '../Gallery/Gallery';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;