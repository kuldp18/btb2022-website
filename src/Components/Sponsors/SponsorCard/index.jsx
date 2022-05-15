import React from 'react';
import '../../../Styles/Sponsors.css';

const SponsorCard = ({ image, name }) => {
  return (
    <div className="sponsor-card">
      <div className="sponsor-image">
        <img alt="sponsor-image" src={image} />
      </div>
      <span className="sponsor-name">{name}</span>
    </div>
  );
};

export default SponsorCard;
