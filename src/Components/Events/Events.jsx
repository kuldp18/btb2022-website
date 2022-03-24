import React from 'react';
import './../../Styles/events.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlockChain from './../../require_images/Rectangle 2740 (1).png'
import FinTech from './../../require_images/Fintech.png'
import covidRelief from './../../require_images/covidRelief.png'
import ML from './../../require_images/ML.png'
import Cloud from './../../require_images/cloud-based.jpg'
import Learning from './../../require_images/learning.jpg'
import healthcare from './../../require_images/Health-care.jpg'
import Creative from './../../require_images/Creative.jpg'

function Events(props) {
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", padding: "7vw 1vw", color: "pink" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", padding: "7vw 1vw", color: "#FF5148" }}
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
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <h1 className="events-title">EVENTS &amp; STUFFS</h1>
            <p className="event-showcase-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>

            <div className="events-slider">
                <Slider {...settings}>
                    <div className="event-info">
                        <img src={BlockChain} alt="blockChain" className="event-img" />
                        <p className="event-name">BlockChain</p>
                    </div>
                    <div className="event-info FinTech">
                        <img src={FinTech} alt="blockChain" className="event-img" />
                        <p className="event-name">FinTech</p>
                    </div>
                    <div className="event-info covid">
                        <img src={covidRelief} alt="blockChain" className="event-img" />
                        <p className="event-name">Covid Relief</p>
                    </div>
                    <div className="event-info">
                        <img src={ML} alt="blockChain" className="event-img" />
                        <p className="event-name">Machine Learning</p>
                    </div>
                    <div className="event-info">
                        <img src={Cloud} alt="blockChain" className="event-img" />
                        <p className="event-name">Cloud Based</p>
                    </div>
                    <div className="event-info">
                        <img src={Learning} alt="blockChain" className="event-img" />
                        <p className="event-name">EduTech</p>
                    </div>
                    <div className="event-info">
                        <img src={healthcare} alt="blockChain" className="event-img" />
                        <p className="event-name">Health Care</p>
                    </div>
                    <div className="event-info">
                        <img src={Creative} alt="blockChain" className="event-img" />
                        <p className="event-name">Creative</p>
                    </div>
                    <div className="event-info">
                        <img src={BlockChain} alt="blockChain" className="event-img" />
                        <p className="event-name">FinTech</p>
                    </div>
                    <div className="event-info">
                        <img src={BlockChain} alt="blockChain" className="event-img" />
                        <p className="event-name">FinTech</p>
                    </div>
                    <div className="event-info">
                        <img src={BlockChain} alt="blockChain" className="event-img" />
                        <p className="event-name">FinTech</p>
                    </div>
                    <div className="event-info">
                        <img src={BlockChain} alt="blockChain" className="event-img" />
                        <p className="event-name">FinTech</p>
                    </div>
                    <div className="event-info">
                        <img src={BlockChain} alt="blockChain" className="event-img" />
                        <p className="event-name">FinTech</p>
                    </div>
                    <div className="event-info">
                        <img src={BlockChain} alt="blockChain" className="event-img" />
                        <p className="event-name">FinTech</p>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Events;