import React from 'react';
import video from '../../../images/videos/video.mp4'

const HeroSection = () => {
  return (
    <div className="hero_container">
      <div className="hero_bg">
        <div className="hero_video_bg">
          <video autoPlay loop muted  controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="hero_content">
        <h1>Virtual Banking Made Easy</h1>
        <p>
          Sign up for a new account today and receive $250 in credit towards your next payment.
        </p>
        {/* <div className="hero_btn">
          <Button to='signup'>
            Get Started {hover ? <ArrowForward/> : <ArrowRight />}
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;