import React, { useState, useEffect } from 'react';
import '../../Styles/Navbar.css';
import logo from '../../require_images/LOGOF.png';
import ldrplogo from '../../require_images/ldrp_logo.png';
import ksvlogo from '../../require_images/ksvlogo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';

const Navbar = ({ makeSticky, hideLinks }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector('.header');
    const anchorLinks = document.querySelectorAll('.nav ul li a');
    const scrollTop = window.scrollY;

    if (makeSticky && scrollTop >= 100) {
      header.classList.add('is-sticky');
      anchorLinks.forEach((link) => {
        link.classList.add('sticky-link');
      });
    } else {
      header.classList.remove('is-sticky');
      anchorLinks.forEach((link) => {
        link.classList.remove('sticky-link');
      });
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            class="btb-logo"
            src={logo}
            alt=""
            height="100px"
            width="100px"
          />
        </div>
        <nav className="nav">
          {hideLinks ? (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          ) : (
            <>
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
            </>
          )}
          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
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
      <style jsx>{`
        @media (max-width: 850px) {
          .header .nav ul {
            display: ${hamburgerOpen ? 'flex' : 'none'};
          }
        }
        .header {
          height: ${hamburgerOpen ? '100vh' : '100px'};
          flex-direction: ${hamburgerOpen ? 'column' : 'row'};
        }
        @media (max-width: 500px) {
          .header {
            height: ${hamburgerOpen ? '100vh' : '90px'};
            flex-direction: ${hamburgerOpen ? 'column' : 'row'};
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
