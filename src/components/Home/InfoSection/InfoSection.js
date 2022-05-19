import React from 'react';
import img1 from '../../../images/img/about/1.jpg'
import director from '../../../images/img/about/director.jpg'
import future from '../../../images/img/about/future.jpg'
import mission from '../../../images/img/about/mission.jpg'
import vission from '../../../images/img/about/vission (3).jpg'
import img2 from '../../../images/img/about/2.png'

const InfoSection = () => {
  return (
    <section className="page-section" id="about" data-aos='fade-up'>
      <div className="container">
        <div className="text-center">
          <h1 className='title_about' style={ { 'color': '#fff', 'marginBottom': '3%' } }>ABOUT US</h1>
        </div>
        <ul className="timeline">
          <li data-aos='fade-up'> 
            <div className="timeline-image" ><img className="rounded-circle img-fluid" src={ director } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>January 2015</h1>
                <h3 className="subheading">Our Humble Beginnings</h3>
              </div>
              <div className="timeline-body"><p className="text-muted">ORD International was founded on 1st January 2015. It starts its journey with importing 6 elevator and  315kva 3sets substation  Head office at Mirpur Dhaka Bangladesh . And Branch Office at Cumilla, , Chittagong & Dhaka. Now Head Office is 84/7Shewrapara, Mirpur, Dhaka-1216</p>
              <br />
              <h4>Honorable Managing Director:  Mohammad Delowar Hossain.</h4>

              </div>
            </div>
          </li>
          <li className="timeline-inverted" data-aos='fade-up'>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={ img2 } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>Agency Born</h1>
                <h3 className="subheading">Services We Provide</h3>
              </div>
              <div className="timeline-body"><p className="text-muted"> It is import and service base company of Lift, Generator and Substation. We have an energetic marketing team all over in Bangladesh. Now ORD International is reputed company . Everything we do is focused on achieving the highest quality in meeting the needs of our valuable customer we import Elevator from Difference country also highly certified company, we never Compromise with Product quality & that’s why we have achieved our goodwill in the market.</p></div>
            </div>
          </li>
          <li data-aos='fade-up'>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={ vission } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>Our Vision</h1>
                <h3 className="subheading">To Design, Source & Deliver The Most Innovative & Trustworthy Products & Solutions </h3>
              </div>
              <div className="timeline-body"><p className="text-muted">The vision of ORD International.  is to become a  diversified,  leading  supplier  in the healthcare industry countrywide, by designing & delivering the most innovative specialty products in the healthcare field that it is active in.</p></div>
            </div>
          </li>

          <li className="timeline-inverted" data-aos='fade-up'>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={ future } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>Future Goal</h1>
                <h3 className="subheading">develop our organization into a synonym of quality healthcare</h3>
              </div>
              <div className="timeline-body"><p className="text-muted">At ORD International we wish to develop our organization into a synonym of quality healthcare and become the optimum supplier of innovative specialty products and services in every market segment we are involved in, at country level. We wish to meet countrywide expectations for access to fast, innovative and cost effective healthcare. Additionally, through our activities we are keen to offering as many career opportunities as possible and become an employer of choice. Finally, we understand that healthcare is “all about giving” and throughout our social activities, we are committed “to give back to the local community”.</p></div>
            </div>
          </li>

         

          <li data-aos='fade-up'>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={ mission } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>Our Mission</h1>
                <h3 className="subheading">To Improve the Lives of Millions</h3>
              </div>
              <div className="timeline-body"><p className="text-muted">Following closely our philosophy that is based on the key principles of Innovation, Quality and Service, our mission is  to  offer  to  healthcare  professionals,  as  well as the wider public across the country, innovative solutions for their daily healthcare needs. ORD International is present in a wide array of healthcare industry   business   segments    and    therefore    aims    to  apply   c o nt i nu ou s d e v e l o p me nt , to design , sou r ce and offer optimum solutions ,whether it is  a specialty product or a service, in healthcare fields.
              </p></div>
            </div>
          </li>

          <li className="timeline-inverted" data-aos='fade-up'>
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InfoSection;