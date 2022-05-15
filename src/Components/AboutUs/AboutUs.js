import React from 'react';
import laptop from '../../require_images/Laptop.png';
import '../../Styles/AboutUS.css';
import Separator from '../Separator';

export const AboutUs = () => {
  return (
    <>
      <div
        id="about"
        className="100-vh 100-vw"
        style={{
          backgroundColor: '#28192B',
        }}
      >
        <div className="about-flex-container">
          <div className="about-left">
            <span className="heading">
              <span
                class="text-white font-weight-bold display-1"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                WE{' '}
              </span>
              <span
                style={{
                  color: '#FF5148',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
                class="font-weight-bold display-1"
              >
                CODE<span className="text-white display-1">,</span>
              </span>
              <span
                className="text-white font-weight-bold display-1"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                WE{' '}
              </span>{' '}
              <span
                style={{
                  color: '#FF5148',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
                className="font-weight-bold display-1"
              >
                DESIGN<span class="text-white display-1">, </span>
              </span>
              <br />
              <span
                className="text-white font-weight-bold col display-1"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                WE ARE{' '}
              </span>{' '}
              <span
                style={{
                  color: '#FF5148',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
                className="font-weight-bold col display-1"
              >
                BTB
                <span className="text-white font-weight-bold display-1">.</span>
              </span>
            </span>
            <div
              className="text-white description"
              style={{
                marginTop: '2rem',
              }}
            >
              <p>
                The mission of KSV University, LDRP-ITR, and Break The Barrier
                is to inspire developers to develop ingenious solutions. We
                aspire in the virtual world to illuminate the real world. It’s
                an innovative platform and accelerator. We aim to build a
                community where the pioneer coders and leading industry partners
                could meet and collaborate toward future innovations.
              </p>
              <p>
                Featured workshops and mentorship sessions backed by industry
                specialists, senior developers, and professionals. 14+ workshops
                are going to be hosted in June-July 2022. Be ready to dive deep
                into a huge pool of knowledge. [Go to the timeline and
                workshops…]
              </p>
              <span>
                <b>Why join the hackathon?</b>
              </span>
              <p>
                Challenges inspire developers uniquely well for several reasons:
              </p>
              <ul>
                <li>Deadlines create discipline</li>
                <li>The best learning comes from building and experience</li>
                <li>
                  Prizes are awarded without taking developers’ Intellectual
                  Property
                </li>
                <li>
                  Accomplishing a personal challenge brings satisfaction and
                  confidence.
                </li>
                <li>
                  Tackling real-world problems gives immense hands-on
                  experience.
                </li>
              </ul>
              <p>Be a part of Break The Barrier and let’s Bash The Barrier!</p>
            </div>
          </div>
          <div className="about-right">
            <img
              src={laptop}
              class="col-sm-4"
              alt="Laptop image"
              style={{ color: '#FF5148' }}
            />
          </div>
        </div>
        <div className="fancy-red-circles">
          <div className="circles-left">
            <div className="fancy-red-circle red-circle-1"></div>
            <div className="fancy-red-circle red-circle-2"></div>
          </div>
          <div className="circles-right">
            <div className="fancy-red-circle red-circle-3"></div>
            <div className="fancy-red-circle red-circle-4"></div>
          </div>
        </div>
      </div>

      <Separator />
    </>
  );
};
