import React from 'react';
import '../../../Styles/Sponsors.css';

const SponsorCard = ({ image, name, url }) => {
  return (
    <a
      href={url}
      type="_blank"
      style={{
        textDecoration: 'none',
      }}
    >
      <div className="sponsor-card">
        <div className="sponsor-image">
          <img alt="sponsor-image" src={image} />
        </div>
        <span className="sponsor-name">{name}</span>
      </div>
    </a>
  );
};

export default SponsorCard;
