import '../../Styles/Card.css';
import React from 'react';
import rectangle from '../../require_images/rectangle.jpg';
import { Link } from 'react-router-dom';

export default function Card({
  image,
  name,
  date,
  description,
  workshopName,
  completed,
  ytLink,
}) {
  return (
    <>
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
            fontFamily: 'Metropolis',
          }}
        >
          {description}
        </p>
        <p className="light-gray1">
          <span
            className="line-2-name1"
            style={{
              fontFamily: 'Metropolis',
            }}
          >
            <span
              style={{
                opacity: '0.4',
                fontFamily: 'Metropolis',
              }}
            >
              Speaker:
            </span>{' '}
            {name}
          </span>
        </p>
        <p
          className="light-gray1"
          id="date"
          style={{
            fontFamily: 'Metropolis',
          }}
        >
          Date: <span className="line-2-name1">{date}</span>
        </p>
        <button
          className="red-btn1"
          id="register-now"
          style={{
            marginTop: '1.5rem',
            padding: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '85%',
            fontFamily: 'Metropolis',
            borderRadius: '5px',
            fontWeight: '300',
            fontSize: '1.7rem',
          }}
        >
          <a
            href={completed ? ytLink : 'https://forms.gle/V8ceiVxjnk8x7RkC8'}
            target="_blank"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            {completed ? 'Watch Now' : 'Register Now'}
          </a>
        </button>
        <button
          className="red-btn1"
          id="view-more"
          style={{
            marginTop: '1.5rem',
            padding: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '85%',
            fontFamily: 'Metropolis',
            borderRadius: '5px',
            fontWeight: '300',
            background: 'none',
            border: '1px solid #de4139',
            fontSize: '1.7rem',
          }}
        >
          <Link
            to={workshopName}
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
          >
            View Details
          </Link>
        </button>
      </div>
    </>
  );
}
