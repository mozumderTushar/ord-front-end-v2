import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/NavBar/NavBar/NavBar';
import AboutGallery from '../AboutGallery/AboutGallery';
import Introduction from '../Introduction/Introduction';
import Services from '../Services/Services';


const AboutUs = () => {
  return (
    <div className="about">
      <Navbar />
      <Introduction />
      <Services />
      <AboutGallery />
      <Footer />
    </div>
  );
};

export default AboutUs;