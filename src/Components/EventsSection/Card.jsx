import '../../Styles/Card.css';
import React from 'react';
import rectangle from '../../require_images/rectangle.jpg';
export default function Card({ image, name, date, description }) {
  return (
    <div className="Event-card1">
      <img className="rectangle1" src={image} alt="rectangle"></img>
      <p className="line-1">{description}</p>
      <p className="light-gray1">
        Speaker: <span className="line-2-name1">{name}</span>
      </p>
      <p className="light-gray1">
        Date: <span className="line-2-name1">{date}</span>
      </p>
      <button className="red-btn1">Register Now</button>
    </div>
  );
}
