import React from 'react';
import './About.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icon
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img
          src="https://i.pinimg.com/564x/5b/28/91/5b289190272e887510f5a089298fe280.jpg" // Replace this URL with your image link
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="content-container">
        <h1> hello i am  <span>kajal </span><br/> a frontend developer </h1>
        <p className="description">
            Hello! I'm Kajal, a passionate frontend developer with experience in building responsive and engaging web applications. 
            I love working with modern web technologies such as HTML, CSS, JavaScript, and React to create user-friendly and interactive experiences. 
          </p>
           <FontAwesomeIcon  icon={faInstagram} className='social-icon' />
          <FontAwesomeIcon icon={faLinkedin} className='social-icon' />
          <FontAwesomeIcon icon={faFacebook} className='social-icon'/></div>
        <div>
          
        

       
      </div>
    </div>
  );
};

export default About;
