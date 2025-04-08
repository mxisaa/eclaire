import react from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
      <div className='logo'><a href='/home'>eclaire</a></div>
      <div className='nav-right'>
      <ul className='nav-links'>
        <li><a href='/menu'>Menu</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <a href='#reserve' className='reserve-button'>Reservations</a>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;