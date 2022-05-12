import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_reyln4j',
      'template_xulx1vo',
      form.current,
      'Euuxff-mjc7qwfwPT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="contacts" id="contact" data-aos='fade-up'>
      <div className="contacts_head">
        <h1>LET'S GET TO WORK.</h1>
        <p>Email us to discuss your project : info.orde@gmail.com</p>
      </div>

      <div className="contacts_form">
        <div className="contacts_body">
          <form
            action="https://formsubmit.co/info.orde@gmail.com"
            method="POST"
          >
            <input
              type="text"
              className="field"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="hidden"
              name="_next"
              value="https://www.ordinternational.com/"
            />

            <input
              type="email"
              className="field"
              name="email"
              placeholder="Your Email"
            />
            <input
              type="number"
              className="field"
              name="number"
              placeholder="Your Phone"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks For Showing Interest On Us. We will Contact to you soon"
            />
            <textarea
              className="field field_area"
              placeholder="Message"
              name="message"
            />
            <button className="field_btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;