import React from 'react';
import elevator from '../../../images/img/services/elevator.jpg';
import agro from '../../../images/img/services/agro.jpg';
import substation from '../../../images/img/services/substation.jpg';
import fisherish from '../../../images/img/services/fisherish.jpg';
import genarator from '../../../images/img/services/genarator.jpg';
import medical from '../../../images/img/services/medical.jpg';

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
          <img src={ elevator } alt="" />
          <h1>Elevator</h1>
          {/* <p>400g, Normal 400g, 250g, & 200g etc.</p> */}
          <div className="s-btn">More</div>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img src={ substation } alt="" />
          <h1>Substation </h1>
          {/* <p>4” & 6” Roller bandage</p> */}
          <div className="s-btn">More</div>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img src={ genarator } alt="" />
          <h1>Generator</h1>
          {/* <p>12,14, & 16 yds.</p> */}
          <div className="s-btn">More</div>
        </div>
      </div>

      <div className="s-box-container">
        <div className="s-box">
          <div className="bar"></div>
          <img src={ medical } alt="" />
          <h1>Medical Equipment</h1>
          {/* <p>Normal & Special</p> */}
          <div className="s-btn">More</div>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img src={ fisherish } alt="" />
          <h1>Fisheries</h1>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, iure!</p> */}
          <div className="s-btn">More</div>
        </div>

        <div className="s-box">
          <div className="bar"></div>
          <img src={ agro } alt="" />
          <h1>Agro</h1>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, iure!</p> */}
          <div className="s-btn">More</div>
        </div>
      </div>
    </div>
  );
};

export default Services;