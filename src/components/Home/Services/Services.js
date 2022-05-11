import React from 'react';
import Lottie from "react-lottie";
import * as animationData from "../../../images/lottie/32054-services.json";

const Services = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="service">
      <div className="service_left">
        <div className="service_cards">
          <div className="service_card">
            <div className="card_top">
              <h1 className="card_title">Design</h1>
              <img src="" alt="" />
            </div>
            <p className="card_desc">Create digital products with unique ideas</p>
            <p className="card_link">20 projects</p>
          </div>
          <div className="service_card">
            <div className="card_top">
              <h1 className="card_title">Design</h1>
              <img src="" alt="" />
            </div>
            <p className="card_desc">Create digital products with unique ideas</p>
            <p className="card_link">20 projects</p>
          </div>
          <div className="service_card">
            <div className="card_top">
              <h1 className="card_title">Design</h1>
              <img src="" alt="" />
            </div>
            <p className="card_desc">Create digital products with unique ideas</p>
            <p className="card_link">20 projects</p>
          </div>
          <div className="service_card">
            <div className="card_top">
              <h1 className="card_title">Design</h1>
              <img src="" alt="" />
            </div>
            <p className="card_desc">Create digital products with unique ideas</p>
            <p className="card_link">20 projects</p>
          </div>
        </div>
      </div>
      <div className="service_right">
        <p className="service_subtitle">Introduction</p>
        <p className="service_title">Hello! I'm John Doe</p>
        <p className="service_info">Every great design begin with an even better story</p>
        <p className="service_desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni pariatur velit id magnam illo laudantium dolor impedit. Labore possimus repellendus laboriosam quis est minima, deleniti, expedita reprehenderit ipsa, excepturi omnis.
        </p>
        <div className="lottie__file">
          <Lottie
            options={ defaultOptions }

          />
        </div>
      </div>
    </div>
  );
};

export default Services;