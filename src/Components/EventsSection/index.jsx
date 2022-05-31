import '../../Styles/EventsSection.css';
import React from 'react';
import Card from './Card';
import prev_img from '../../require_images/prev.svg';
import next_img from '../../require_images/next.svg';
import hexagon from '../../require_images/hexagon.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Separator2 from '../Separator2';
import workshops from '../../JSON/workshopNames.json';

function EventsSection(props) {
  const nextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'inline-block',
          padding: '7vw 1vw',
          color: 'pink',
        }}
        onClick={onClick}
      />
    );
  };
  function prevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'inline-block',
          padding: '7vw 1vw',
          color: '#FF5148',
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <img src={next_img} alt="next_card_button" />,
    prevArrow: <img src={prev_img} alt="prev_card_button" />,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1734,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1185,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 714,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="events-section1" id="workshop">
      <div className="hexagon1">
        <img src={hexagon} className="hexagon_img1" alt="Hexagon" />
      </div>
      <div
        className="event-title1 title1"
        id="section-title"
        style={{
          zIndex: '1000',
          fontFamily: 'Metropolis',
        }}
      >
        EVENTS
      </div>
      <div
        className="title-1"
        style={{
          fontFamily: 'Metropolis',
        }}
      >
        UPCOMING WORKSHOPS
      </div>
      <div className="card-slider1">
        <Slider {...settings}>
          <Card
            image={require('../../require_images/Workshop-Ankit-event.png')}
            name="ANKIT BANSAL"
            description="SQL WORKSHOP"
            date="11/06/2022"
            workshopName={workshops[1].slug}
          />
          <Card
            image={require('../../require_images/Workshop-Rahul-event.png')}
            name="RAHUL JAIN"
            description="DATA ENGINEERING WORKSHOP"
            date="11/06/2022 & 12/06/2022"
            workshopName={workshops[3].slug}
          />
          <Card
            image={require('../../require_images/Workshop-Atul-event.png')}
            name="Atul Khola"
            description="MOTION DESIGN WORKSHOP"
            date="12/06/2022"
            workshopName={workshops[4].slug}
          />
          <Card
            image={require('../../require_images/Workshop-Shravan-event.png')}
            name="SHRAVAN TICKOO"
            description="DESIGN WORKSHOP"
            date="02/07/2022"
            workshopName={workshops[2].slug}
          />
          <Card
            image={require('../../require_images/Workshop-tanay-event.png')}
            name="Tanay Gupta"
            description="BLOCKCHAIN WORKSHOP"
            date="16/07/2022"
            workshopName={workshops[5].slug}
          />
          <Card
            image={require('../../require_images/Workshop-Prince-event.png')}
            name="Prince Kumar"
            description="RESUME BUILDING WORKSHOP"
            date="17/07/2022"
            workshopName={workshops[6].slug}
          />
          <Card
            image={require('../../require_images/Workshop-JOGANDEEP-event.png')}
            name="JOBAN SINGH"
            description="INTERACTION WORKSHOP"
            date="23/07/2022"
            workshopName={workshops[0].slug}
          />

          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
        </Slider>
      </div>
      {/* <div className="title-1">MENTOR TALKS</div>
      <div className="card-slider1">
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div> */}
      <Separator2
        styles={{
          width: '100vw',
          maxHeight: '200px',
          position: 'absolute',
          top: '-25%',
          zIndex: '99',
        }}
      />
    </div>
  );
}
export default EventsSection;
