import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sisterLogoItems } from '../../../constants/LogoSliderConstant';

const LogoSlider = () => {

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      setting: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      setting: {
        slidesToShow: 3
      }
    }]
  };

  return (
    <div className="customer-logos slider">
      <Slider  { ...settings }>
        {
          sisterLogoItems.map((item, index) => {
            return (

              <div key={ index }>
                <h2>{ item.text }</h2>
                <img className="img-fluid logo-img" src={ item.imgSrc } alt="logo" />
              </div>

            )
          })
        }
      </Slider>
      <hr />
    </div>
  );
};

export default LogoSlider;