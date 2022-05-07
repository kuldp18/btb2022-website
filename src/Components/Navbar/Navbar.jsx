import React from 'react';
import '../../Styles/Navbar.css';
import logo from '../../require_images/LOGOF.png';
import ldrplogo from '../../require_images/ldrp_logo.png';
import ksvlogo from '../../require_images/ksvlogo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img class="btb-logo" src={logo} alt="" height="100px" width="100px" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#workshop">Workshop</a>
          </li>
          <li>
            <a href="mailto:hackathon@ldrp.ac.in">Contact Us</a>
          </li>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#partners">Partners</a>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
        </ul>
      </nav>
      <div className="college-images">
        <img
          className="ldrp-logo"
          alt="LDRP"
          src={ldrplogo}
          height="70px"
          width="70px"
        />
        <img
          className="ksv-logo"
          alt="ksv"
          src={ksvlogo}
          height="70px"
          width="70px"
        />
      </div>
    </header>
  );
};

export default Navbar;
