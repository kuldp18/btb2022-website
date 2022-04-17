import React from 'react';
import './../../Styles/events.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlockChain from './../../require_images/BlockChain.jpg';
import FinTech from './../../require_images/fintech.jpg';
import ML from './../../require_images/ML.png';
import Learning from './../../require_images/learning.jpg';
import healthcare from './../../require_images/healthcare.jpg';
import Creative from './../../require_images/Creative.jpg';
import CloudBased from '../../require_images/cloudbased.jpg';
import EdTech from '../../require_images/edutech.jpg';
import HardwareBased from '../../require_images/hardware.jpg';
import NLP from '../../require_images/nlp.jpg';
import ARVR from '../../require_images/arvr.jpg';

function Events(props) {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          padding: '7vw 1vw',
          color: 'pink',
        }}
        onClick={onClick}
      />
    );
  };
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          padding: '7vw 1vw',
          color: '#FF5148',
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="events-stuffs" id="tracks">
      <h1 className="events-title">Tracks</h1>
      {/* <p className="event-showcase-text">enter description here (if any)</p> */}

      <div className="events-slider">
        <Slider {...settings}>
          <div className="event-info">
            <img src={BlockChain} alt="blockChain" className="event-img" />
            <p className="event-name">BlockChain Based Hack</p>
          </div>
          <div className="event-info FinTech">
            <img src={FinTech} alt="blockChain" className="event-img" />
            <p className="event-name">FinTech Hack</p>
          </div>
          <div className="event-info">
            <img src={ML} alt="blockChain" className="event-img" />
            <p className="event-name">Machine Learning Hack</p>
          </div>
          <div className="event-info">
            <img src={healthcare} alt="blockChain" className="event-img" />
            <p className="event-name">Healthcare Hack</p>
          </div>
          <div className="event-info">
            <img src={CloudBased} alt="blockChain" className="event-img" />
            <p className="event-name">Cloud Based Hack</p>
          </div>
          <div className="event-info">
            <img src={EdTech} alt="blockChain" className="event-img" />
            <p className="event-name">Education Hack</p>
          </div>
          <div className="event-info">
            <img src={HardwareBased} alt="blockChain" className="event-img" />
            <p className="event-name">Hardware Hack</p>
          </div>
          <div className="event-info">
            <img src={Creative} alt="blockChain" className="event-img" />
            <p className="event-name">Most Creative Hack</p>
          </div>

          <div className="event-info">
            <img src={NLP} alt="blockChain" className="event-img" />
            <p className="event-name">NLP Hack</p>
          </div>
          <div className="event-info">
            <img src={ARVR} alt="blockChain" className="event-img" />
            <p className="event-name">AR/VR Hack</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Events;
