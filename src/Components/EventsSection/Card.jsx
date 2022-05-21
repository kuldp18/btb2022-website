import '../../Styles/Card.css';
import React from 'react';
import rectangle from '../../require_images/rectangle.jpg';
export default function Card({ image, name, date, description }) {
  return (
    <div
      className="Event-card1"
      style={{
        fontFamily: 'Metropolis',
      }}
    >
      <img className="rectangle1" src={image} alt="rectangle"></img>
      <p
        className="line-1"
        style={{
          fontSize: '1.6rem',
          fontWeight: 'bold',

          height: '40px',
        }}
      >
        {description}
      </p>
      <p className="light-gray1">
        <span className="line-2-name1">
          <span
            style={{
              opacity: '0.4',
            }}
          >
            Speaker:
          </span>{' '}
          {name}
        </span>
      </p>
      <p className="light-gray1" id="date">
        Date: <span className="line-2-name1">{date}</span>
      </p>
      <button
        className="red-btn1"
        style={{
          marginTop: '1.5rem',
          padding: '2.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '85%',
          fontFamily: 'Metropolis',
          borderRadius: '10px',
          fontWeight: '300',
        }}
      >
        <a
          href="https://forms.gle/V8ceiVxjnk8x7RkC8"
          target="_blank"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Register Now
        </a>
      </button>
    </div>
  );
}
