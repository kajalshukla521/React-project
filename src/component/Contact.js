import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left side: Image */}
      <div className="contact-image">
        <img
          src="https://i.pinimg.com/564x/5b/28/91/5b289190272e887510f5a089298fe280.jpg" // Replace with your image URL
          alt="Contact Us"
        />
      </div>

      {/* Right side: Form and Contact Details */}
      <div className="contact-details">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        
      </div>
      
    </div>
  );
};

export default Contact;
 