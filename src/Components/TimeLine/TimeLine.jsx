import React, { useEffect, useState } from 'react';
import './../../Styles/timeline.css';
import Doodle from './../../require_images/doodle.png';
import EventData from './../../JSON/timelineEvents.json';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Separator from '../Separator';
import Separator2 from '../Separator2';

function TimeLine(props) {
  useEffect(() => {
    Aos.init({
      duration: 1400,
      offset: 70,
    });
  });
  const [currentData, setcurrentData] = useState(EventData.slice(0, 3));

  const includeItem = () => {
    const increament = 2;
    setcurrentData(EventData.slice(0, currentData.length + increament));
  };

  return (
    <>
      <Separator2
        styles={{
          width: '100%',
          height: '150px',
        }}
      />
      {/* <svg
        id="wave"
        style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(52, 43, 63, 1)" offset="0%"></stop>
            <stop stopColor="rgba(52, 43, 63, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 0px)', opacity: '1' }}
          fill="#21192B"
          d="M0,30L288,80L576,60L864,40L1152,60L1440,20L1728,10L2016,20L2304,90L2592,50L2880,10L3168,30L3456,70L3744,0L4032,50L4320,70L4608,80L4896,0L5184,80L5472,0L5760,20L6048,40L6336,30L6624,40L6912,70L6912,100L6624,100L6336,100L6048,100L5760,100L5472,100L5184,100L4896,100L4608,100L4320,100L4032,100L3744,100L3456,100L3168,100L2880,100L2592,100L2304,100L2016,100L1728,100L1440,100L1152,100L864,100L576,100L288,100L0,100Z"
        ></path>
      </svg> */}
      <div className="timeline" id="timeline">
        {/* <div className="fancy-circle"></div>
        <div className="fancy-curve"></div> */}
        <h1
          className="timeline-title"
          style={{
            fontFamily: 'Metropolis',
          }}
        >
          TIMELINE
        </h1>
        <div className="timeline-container">
          {currentData.map((ev, index) => (
            <div className="timeline-event-info" key={index}>
              <p
                className="event-timing"
                style={{
                  fontFamily: 'Metropolis',
                }}
              >
                {ev.time}
              </p>
              <h2
                className="event"
                style={{
                  fontFamily: 'Metropolis',
                }}
              >
                {ev['event-name']}
              </h2>
              <p
                className="event-desc"
                style={{
                  fontFamily: 'Metropolis',
                }}
              >
                {ev['event-desc']}
              </p>
              <div className="circle"></div>
              <img src={Doodle} alt="doodle" className="doodle" />
            </div>
          ))}
          {currentData.length !== EventData.length && (
            <button className="view-more" onClick={includeItem}>
              View More <IoIosArrowDropdownCircle />{' '}
            </button>
          )}
        </div>
      </div>
      <Separator />
    </>
  );
}

export default TimeLine;
