import React from 'react';
import '../../Styles/Prizes.css';
import PrizesImage from '../../require_images/prizes.png';

const PrizesSection = () => {
  return (
    <>
      <section className="prizes-section">
        <div className="top">
          <h1 className="stylish-title">Grand Prizes</h1>
          <p
            className="description"
            style={{
              textTransform: 'none',
            }}
          >
            We have a prize pool of worth more than{' '}
            <span
              className="stylish-title"
              style={{
                fontSize: '2.5rem',
              }}
            >
              200k INR
            </span>{' '}
            along with other captivating rewards in BTB 2022.
          </p>
        </div>
        <div className="hero-img">
          <img src={PrizesImage} alt="Prizes" />
        </div>
        <div className="more-text">
          <p
            style={{
              textAlign: 'center',
            }}
          >
            Winners of each track will be awarded with amazing prizes such as
            smart speakers, earphones, head phones, mechanical keyboards, smart
            watches, bluetooth neck bands and many more. As well as each winner
            will be awarded with a merit certificate and some premium softwares.
          </p>
          <br />
          <p
            style={{
              border: '2px solid #ff5148',
              borderRadius: '5px',
              padding: '1rem',
              backgroundColor: '#3a263e',
            }}
          >
            We also have special prizes for the best project by an all Women
            Team!!!
          </p>
        </div>
      </section>
    </>
  );
};

export default PrizesSection;
