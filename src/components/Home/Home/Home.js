import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import LogoSlider from '../../Shared/LogoSlider/LogoSlider';
import Navbar from '../../Shared/NavBar/NavBar/NavBar';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import Services from '../Services/Services';
import SisterOrg from '../SisterOrg/SisterOrg';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      {/* <HeroSection /> */}
      {/* <SisterOrg /> */}
      <Gallery />
      {/* <Services /> */}
      <InfoSection />
      {/* <LogoSlider /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;