import '../../Styles/Card.css';
import React from 'react';
import rectangle from '../../require_images/rectangle.jpg';
export default function Card() {
  return (
    <div className="Event-card1">
      <img className="rectangle1" src={rectangle} alt="rectangle"></img>
      <p className="line-1">Public Speaking Communic....</p>
      <p className="light-gray1">
        Speaker: <span className="line-2-name1">Vandan Gohil</span>
      </p>
      <p className="light-gray1">
        Date: <span className="line-2-name1">28/04/2022</span>
      </p>
      <button className="red-btn1">Register Now</button>
    </div>
  );
}
