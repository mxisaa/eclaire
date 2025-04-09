import React from 'react'; 
import './Footer.css';
import { Link } from 'react-router-dom'; 
import Copyright from '../assets/Copyright.png';


function Footer() {
  return (
    <footer className="footer-section"> 
      <img src={Copyright} alt="Copyright" className='copyright-image' /> 
      <p>2025 eclaire | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;