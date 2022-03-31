import React from 'react';
import '../../../Styles/Sponsors.css';

const SponsorCard = ({ image }) => {
  return (
    <div className="sponsor-card">
      <div className="sponsor-image">
        <img alt="sponsor-image" src={image} />
      </div>
    </div>
  );
};

export default SponsorCard;
