import React from 'react';
import Lottie from "react-lottie";
import introductionImg from '../../../images/lottie/about/78555-marketing-introduction-animation.json';
import vision from '../../../images/lottie/about/5301-goal-achieved.json';
import mission from '../../../images/lottie/about/56120-medical-shield.json';

const Introduction = () => {
  const IntroductionOptions = {
    loop: true,
    autoplay: true,
    animationData: introductionImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const visionOptions = {
    loop: true,
    autoplay: true,
    animationData: vision,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const missionOptions = {
    loop: true,
    autoplay: true,
    animationData: mission,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="introduction">
      <div>
        <div>
          <h1>Introduction of ORD International </h1>
          <p>
            ORD International was founded on 1st January 2015. It starts its journey with importing 6 elevator and  315kva 3sets substation  Head office at Mirpur Dhaka Bangladesh . And Branch Office at Cumilla, , Chittagong & Dhaka. Now Head Office is 84/7Shewrapara, Mirpur, Dhaka-1216.
          </p>
          <br />
          <p>
            It is import and service base company of Lift, Generator and Substation. We have an energetic marketing team all over in Bangladesh. Now ORD International is reputed company . Everything we do is focused on achieving the highest quality in meeting the needs of our valuable customer we import Elevator from Difference country also highly certified company, we never Compromise with Product quality & that’s why we have achieved our goodwill in the market.
          </p>

        </div>
        <div className="lottie__file">
          <Lottie
            options={ IntroductionOptions }
          />
        </div>
      </div>

      <div>
        <div className="lottie__file">
          <Lottie
            options={ visionOptions }
          />
        </div>
        <div>
          <h1>Our Vision</h1>
          <p>
          <strong>To Design, Source & Deliver The Most Innovative & Trustworthy Products & Solutions</strong> The vision of ORD International is to become a  diversified,  leading  supplier  in the engineering industry countrywide, by designing & delivering the most innovative specialty products in the engineering field that it is active in.
          </p>
          <br />
          <p>
          At ORD International we wish to develop our organization into a synonym of quality engineering and become the optimum supplier of innovative specialty products and services in every market segment we are involved in, at country level. We wish to meet countrywide expectations for access to fast, innovative and cost effective engineering. Additionally, through our activities we are keen to offering as many career opportunities as possible and become an employer of choice. Finally, we understand that engineering is “all about giving” and throughout our social activities, we are committed “to give back to the local community”.
          </p>
        </div>
      </div>

      <div>
        <div>
          <h1>Our Mission</h1>
          <p>
            <strong>To Improve the Lives of Millions</strong>
          </p>
          <br />
          <p>
          Following closely our philosophy that is based on the key principles of Innovation, Quality and Service, our mission is to offer to Engineering  professionals, as well as the wider public across the country, innovative solutions for their daily  needs.
          </p>
          <br />
          <p>
            <strong>ORD International</strong> is present in a wide array of Engineering industry business segments and therefore aims to apply continuous development , to design , source and offer optimum solutions ,whether it is a specialty product or a service, in engineering fields.
          </p>
        </div>
        <div className="lottie__file">
          <Lottie
            options={ missionOptions }
          />
        </div>
      </div>

    </div>
  );
};

export default Introduction;