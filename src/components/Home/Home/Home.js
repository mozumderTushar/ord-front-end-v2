import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/NavBar/NavBar/NavBar';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Gallery />
      {/* <Services /> */}
      <InfoSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;