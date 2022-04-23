import React from 'react';
import './../../Styles/events.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlockChain from './../../require_images/blockchain-final.png';
import FinTech from './../../require_images/Fintech.png';
import ML from './../../require_images/ML.png';
import healthcare from './../../require_images/healthcare-final.png';
import Creative from './../../require_images/creative-final.png';
import CloudBased from '../../require_images/cloud-based-final.png';
import EdTech from '../../require_images/edutech-final.png';
import HardwareBased from '../../require_images/hardware-final.png';
import NLP from '../../require_images/nlp final.png';
import ARVR from '../../require_images/ar vr-final.png';

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
            <div className="img-wrapper">
              <img
                src={BlockChain}
                alt="blockChain"
                className="event-img blur"
              />
              <div className="content fade">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                illum a neque fugiat dolores eveniet! Quam ducimus, labore, enim
                sapiente accusantium fugit incidunt quia corrupti cum delectus
                beatae nihil et.
              </div>
            </div>
            <p className="event-name">BlockChain Based Hack</p>
          </div>
          <div className="event-info FinTech">
            <div className="img-wrapper">
              <img src={FinTech} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">FinTech Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img src={ML} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">Machine Learning Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img
                src={healthcare}
                alt="blockChain"
                className="event-img blur"
              />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">Healthcare Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img
                src={CloudBased}
                alt="blockChain"
                className="event-img blur"
              />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">Cloud Based Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img src={EdTech} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">Education Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img
                src={HardwareBased}
                alt="blockChain"
                className="event-img blur"
              />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">Hardware Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img src={Creative} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">Most Creative Hack</p>
          </div>

          <div className="event-info">
            <div className="img-wrapper">
              <img src={NLP} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">NLP Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img src={ARVR} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, asperiores quisquam a delectus accusantium error ipsum
                voluptatem magnam animi natus.
              </div>
            </div>
            <p className="event-name">AR/VR Hack</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Events;
