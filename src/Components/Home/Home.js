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
import Sponsors from '../Sponsors/Sponsors';
import PrizesSection from '../PrizesSection';
import EventsSection from '../EventsSection';
import JudgesSection from '../JudgesSection';
import MentorsSection from '../MentorsSection';
import MentorTalks from '../MentorTalks';

export const Home = () => {
  return (
    <div>
      <Navbar makeSticky={false} />

      <section id="home" class="home2">
        <div class="header-content2">
          <p
            className="LDRP-header"
            style={{
              color: 'white',
              fontSize: '2.3rem',
              fontFamily: 'Metropolis',
              color: 'rgba(223, 61, 53, 1)',
              fontWeight: '500',
            }}
          >
            LDRP INSTITUTE OF TECHNOLOGY AND RESEARCH PRESENTS
          </p>
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
          <p
            class="content-3"
            style={{
              fontFamily: 'Metropolis',
            }}
          >
            Code recursively and let your idea change the world.
          </p>

          <a href="https://breakthebarrier.devpost.com/" target="_blank">
            <button
              style={{
                maxWidth: '250px',
                width: '100%',
                fontFamily: 'Metropolis',
              }}
            >
              Register as Participant
            </button>
          </a>
          <a href="https://discord.gg/uN3dhWBKKT" target="_blank">
            <button
              style={{
                maxWidth: '250px',
                width: '100%',
                background: 'none',
                border: '2px solid rgba(223, 61, 53, 1)',
                color: 'rgba(223, 61, 53, 1)',
                fontFamily: 'Metropolis',
              }}
            >
              Join on Discord
            </button>
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
      <EventsSection />
      <MentorTalks />
      <JudgesSection />
      <MentorsSection />
      <PrizesSection />
      <Faq />
      <Footer />
    </div>
  );
};
