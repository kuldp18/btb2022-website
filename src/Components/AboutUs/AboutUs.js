import React from 'react';
import laptop from '../../require_images/Laptop.png';
import '../../Styles/AboutUS.css';

export const AboutUs = () => {
  return (
    <>
      <div
        id="about"
        className="100-vh 100-vw"
        style={{
          backgroundColor: '#21192B',
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
            <div className="text-white description">
            LDRP-ITR and Break The Barrier’s mission is to inspire developers to develop ingenious solutions. We aspire in virtual world to inspire the real world. It’s an innovative platform and accelerators in a unique manner. We aim to build a community where the pioneer coders and leading industry partners could meet and collaborate towards the future innovations. 
Challenges inspire developers uniquely well for several reasons:Deadlines create discipline
The best learning comes from building and experience
Prizes are awarded without taking developer IP
Accomplishing a personal challenge brings satisfaction and confidence.
Tackling real-world problems gives immense hands-on experience 
            </div>
            <button
              type="button"
              className="btn btn-outline-danger btn-lg col-sm-1  learn-more"
            >
              Learn More
            </button>
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
    </>
  );
};
