import React from 'react';
import img1 from '../../../images/img/about/1.jpg'

const InfoSection = () => {
  return (
    <section className="page-section" id="about">
    <div className="container">
        <div className="text-center">
            <h1 className='title_about' style={{'color':'#fff', 'marginBottom': '3%'}}>ABOUT US</h1>
        </div>
        <ul className="timeline">
            <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={img1} alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h1>2009-2011</h1>
                        <h2 className="subheading">Our Humble Beginnings</h2>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={img1}  alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h1>March 2011</h1>
                        <h2 className="subheading">An Agency is Born</h2>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={img1}  alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h1>December 2015</h1>
                        <h2 className="subheading">Transition to Full Service</h2>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={img1}  alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h1>July 2020</h1>
                        <h2 className="subheading">Phase Two Expansion</h2>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
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