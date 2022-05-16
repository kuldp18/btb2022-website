import '../../Styles/EventsSection.css';
import React from 'react';
import Card from './Card';
import prev_img from '../../require_images/prev.svg';
import next_img from '../../require_images/next.svg';
import hexagon from '../../require_images/hexagon.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
      <div className="event-title1 title1">EVENTS</div>
      <div className="title-1">UPCOMING WORKSHOPS</div>
      <div className="card-slider1">
        <Slider {...settings}>
          <Card
            image={require('../../require_images/Workshop-JOGANDEEP.png')}
            name="JOBAN SINGH"
            description="INTERACTION WORKSHOP"
            date="23/07/2022"
          />
          <Card
            image={require('../../require_images/Workshop-Ankit.jpg')}
            name="ANKIT BANSAL"
            description="SQL WORKSHOP"
            date="11/06/2022"
          />
          <Card
            image={require('../../require_images/Workshop-Shravan.png')}
            name="SHRAVAN TICKOO"
            description="DESIGN WORKSHOP"
            date="02/07/2022"
          />
          <Card
            image={require('../../require_images/Workshop-Rahul.png')}
            name="RAHUL JAIN"
            description="DATA ENGINEERING WORKSHOP"
            date="11/06/2022"
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
    </div>
  );
}
export default EventsSection;
