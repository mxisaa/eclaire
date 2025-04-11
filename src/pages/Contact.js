import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      {/* Contact Form & Map */}
      <section className="contact-section">
        <div className="contact-wrapper">
         
          <div className="contact-form">
            <p className="script-heading">contact us</p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="Message" rows="6"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          
          <div className="contact-map">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="find-us-section">
        <hr className='find-us-divider'></hr>
        <div className="find-us">
          <p className="script-heading-2">find us</p>
          <div className='find-us-content'>
          <p>123 Rue de Lumière,<br />Paris, France<br />75001</p>
          </div>
        </div>
        <hr className='find-us-divider'></hr>
      </section>
    </>
  );
}

export default Contact;