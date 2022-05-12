import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import LogoSlider from '../../Shared/LogoSlider/LogoSlider';
import Navbar from '../../Shared/NavBar/NavBar/NavBar';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import Services from '../Services/Services';
import SisterOrg from '../SisterOrg/SisterOrg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SisterOrg />
      <Gallery />
      {/* <Services /> */}
      <InfoSection />
      <LogoSlider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;