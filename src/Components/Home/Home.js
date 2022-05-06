import React from 'react';
import '../../Styles/mainpage.css';
import waveDesktop from '../../require_images/wave-desktop.png';
import arrow from '../../require_images/down.gif';
import logo from '../../require_images/LOGOF.png';
import ldrplogo from '../../require_images/ldrp_logo.png';
import '../../Styles/home.css';
import Navbar from '../Navbar/Navbar';

export const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <header class="header2">
        <img class="logo2" src={logo} alt="" height="100px" width="100px" />

        <div class="fas fa-bars"></div>

        <nav class="navbar2">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#tracks">Tracks</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#workshop">Workshops</a>
            </li>
            <li>
              <a href="#mentor-talks">Talks</a>
            </li>
            <li>
              <a href="#team-section">Our Team</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="mailto:hackathon@ldrp.ac.in">Contact Us</a>
            </li>
            <li>
              <img
                className="ldrp-logo"
                alt="LDRP"
                src={ldrplogo}
                height="70px"
                width="70px"
              />
            </li>
          </ul>
        </nav>
      </header> */}

      <section id="home" class="home2">
        <div class="header-content2">
          <p class="content-1">BREAK THE</p>
          <p
            class="content-2"
            style={{
              fontFamily: 'Aqua Grotesque',
              stroke: 'orange',
              color: '#FF5148',
            }}
          >
            BARRIER
          </p>
          <p class="content-3">
            Code recursively and let your idea change the world.
          </p>
          <a href="#">
            <button>Register As Mentor</button>
          </a>
          <a href="#">
            <button>Register As Student</button>
          </a>
          <div class="arrow2">
            <a href="#about">
              <img src={arrow} alt="arrow icon" width="100" />
            </a>
          </div>
        </div>

        <div class="wave1">
          <img src={waveDesktop} alt="wave" />
        </div>
      </section>
    </div>
  );
};
