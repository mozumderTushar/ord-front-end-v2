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
          <h1 className='title_about' style={ { 'color': '#fff', 'marginBottom': '3%' } }>Board of Director's </h1>
        </div>
        <ul className="timeline">
          <li data-aos='fade-up'>
            <div className="timeline-image" ><img className="rounded-circle img-fluid" src={ img2 } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>Asma Akter</h1>
                <h3 className="subheading">Honorable Chairman</h3>
                <h4>BSS Honors MSS Political Science</h4>
              </div>
              <div className="timeline-body"><p className="text-muted">Former Lecturer of Hazi Sha Alam Degree
                College , <br /> Kosba - Dhaka
              </p>
                <br />
              </div>
            </div>
          </li>
          <li className="timeline-inverted" data-aos='fade-up'>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={ director } alt="..." /></div>
            <div className="timeline-panel">
              <h1>Mohammad Delowar Hossain</h1>
              <h3 className="subheading">Honorable Managing Director</h3>
              <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisci facere facilis! Error at similique tempora laborum ut sapiente doloribus?
              </p></div>
            </div>
          </li>
          <li data-aos='fade-up'>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={ vission } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>Md. Rabiu Sahidul Islam (Nishat )</h1>
                <h3 className="subheading">	Director & Head of Business Operation</h3>
                <h4>BBA in accounting NU,MBA in Marketing</h4>
              </div>
              <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisci facere facilis! Error at similique tempora laborum ut sapiente doloribus?
              </p></div>
            </div>
          </li>

          <li className="timeline-inverted" data-aos='fade-up'>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={ future } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>Eng Samsudduha Shoyeb</h1>
                <h3 className="subheading">Manager (Engineering & Service Sales)</h3>
              </div>
              <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisci facere facilis! Error at similique tempora laborum ut sapiente doloribus?</p></div>
            </div>
          </li>

          <li data-aos='fade-up'>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={ mission } alt="..." /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h1>Mr Rashedul Islam</h1>
                <h3 className="subheading">Manager, (Tender Business)</h3>
              </div>
              <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates adipisci facere facilis! Error at similique tempora laborum ut sapiente doloribus?
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