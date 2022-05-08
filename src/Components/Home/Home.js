import React from 'react';
import '../../Styles/mainpage.css';
import waveDesktop from '../../require_images/wave-desktop.png';
import arrow from '../../require_images/down.gif';
import '../../Styles/home.css';
import Navbar from '../Navbar/Navbar';
import Events from '../Events/Events';
import TimeLine from '../TimeLine/TimeLine';
import { AboutUs } from '../AboutUs/AboutUs';
import { Footer } from '../Footer/Footer';
import { Faq } from '../Faq/Faq';
import Workshop from '../Workshop';
import MentorTalks from '../MentorTalks';
import Sponsors from '../Sponsors/Sponsors';

export const Home = () => {
  return (
    <div>
      <Navbar makeSticky={true} />

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
          <a href="https://forms.gle/X7tBvE2X6dCQkLBB8" target="_blank">
            <button>Register As Mentor</button>
          </a>
          <a href="https://forms.gle/aXUWJTzfT1HyajJ59" target="_blank">
            <button>Register As Participant</button>
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
      <AboutUs />
      <Events />
      <TimeLine />
      <Sponsors />
      <Workshop />
      <MentorTalks />

      <Faq />
      <Footer />
    </div>
  );
};
