import React from 'react';
import cotton from '../../../images/img/services/cotton.jpg';
import bandage from '../../../images/img/services/roller-bandage.jpg';
import gauze from '../../../images/img/services/surgical-gauze .jpg';
import binder from '../../../images/img/services/abdominal_binder.jpg';
import napkin from '../../../images/img/services/napkin.jpg';
import water from '../../../images/img/services/water .jpg';

const Services = () => {

  return (
    <div className="services">
      <div className="s-heading">
        <h1>SERVICES</h1>
        <p>We Provide The Best In Class Services For Our Customers</p>
      </div>

      <div className="s-box-container">
        <div className="s-box">
          <div className="bar"></div>
          <img src={ cotton } alt="" />
          <h1>Cotton</h1>
          <p>400g, Normal 400g, 250g, & 200g etc.</p>
          <div className="s-btn">More</div>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img src={ bandage } alt="" />
          <h1>Roller bandage </h1>
          <p>4” & 6” Roller bandage</p>
          <div className="s-btn">More</div>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img src={ gauze } alt="" />
          <h1>Surgical gauze </h1>
          <p>12,14, & 16 yds.</p>
          <div className="s-btn">More</div>
        </div>
      </div>

      <div className="s-box-container">
        <div className="s-box">
          <div className="bar"></div>
          <img src={ napkin } alt="" />
          <h1>Sanitary napkin </h1>
          <p>Normal & Special</p>
          <div className="s-btn">More</div>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img src={ binder } alt="" />
          <h1>Abdominal binder</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, iure!</p>
          <div className="s-btn">More</div>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img src={ water } alt="" />
          <h1>Distil Water etc.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, iure!</p>
          <div className="s-btn">More</div>
        </div>
      </div>
    </div>
  );
};

export default Services;