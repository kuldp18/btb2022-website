import React from 'react';
import './Team.css';
import ProfileCard from '../ProfileCard';

const Team = (props) => {
  return (
    <section className="team">
      <h3 className="team-title">Team {props.title} :</h3>
      <div className="team-grid">
        {props.teamData.map((person) => {
          return (
            <div className="team-profile-card" key={person.name}>
              <div className="profile-image-container">
                <img
                  src={person.image}
                  alt={person.name}
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">{person.name}</h1>
                <h4 className="profile-about-description">
                  {person.description}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
