import React from 'react';
import '../Team/Team.css';

const ProfileCard = (props) => {
  return (
    <div className="team-profile-card">
      <div className="profile-image-container">
        <img src={props.image} alt={props.name} className="profile-image" />
      </div>
      <div className="profile-about-container">
        <h1 className="profile-about-name">{props.name}</h1>
        <h4 className="profile-about-description">{props.description}</h4>
      </div>
    </div>
  );
};

export default ProfileCard;
