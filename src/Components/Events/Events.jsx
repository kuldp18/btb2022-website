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
                <span>
                  Let’s advance to decrypt the Block and Chain your efforts to
                  enhance the existing one with your unique way, be a part to be
                  part...
                </span>
              </div>
            </div>
            <p className="event-name">BlockChain Based Hack</p>
          </div>
          <div className="event-info FinTech">
            <div className="img-wrapper">
              <img src={FinTech} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                <span>
                  Let's make our sluggish technology sleek and swift by
                  enrolling with FinTech.
                </span>
              </div>
            </div>
            <p className="event-name">FinTech Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img src={ML} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                <span>
                  Want to learn, how machines learn? Join to rest your desire.
                  This is your sign to build a project that solves it...
                </span>
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
                <span>
                  Looking for healthy and ecstatic life? No need to search now.
                  Be our guest and live a serene life.
                </span>
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
                <span>
                  #Out of space? And want important things to be the clasp.
                  Don't worry cloud is there The journey of a thousand apps
                  begins in the cloud…
                </span>
              </div>
            </div>
            <p className="event-name">Cloud Based Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img src={EdTech} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt quo fuga, suscipit facilis omnis iusto dolores sed
                  ipsam qui aut.
                </span>
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
                <span>
                  In love with machines, and can't control your hands when it
                  comes to hardware? Grab this chance to hack the hardware and
                  let your modifications outstrip.
                </span>
              </div>
            </div>
            <p className="event-name">Hardware Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img src={Creative} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                <span>
                  Do you see the world in your way? then let your idea lead the
                  world in the most creative way
                </span>
              </div>
            </div>
            <p className="event-name">Most Creative Hack</p>
          </div>

          <div className="event-info">
            <div className="img-wrapper">
              <img src={NLP} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                <span>
                  Let machines understand the natural language with your
                  preferred processes and unleash the ways technology can
                  ameliorate the world.
                </span>
              </div>
            </div>
            <p className="event-name">NLP Hack</p>
          </div>
          <div className="event-info">
            <div className="img-wrapper">
              <img src={ARVR} alt="blockChain" className="event-img blur" />
              <div className="content fade">
                <span>
                  Want to get submerged in your virtual world? Register for
                  AR/VR hack and get a spectacular experience of your simulated
                  3D world
                </span>
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
