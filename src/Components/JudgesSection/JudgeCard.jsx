import React from 'react';
import '../../Styles/JudgesSection.css';

const JudgeCard = ({ name, work, company, image }) => {
  return (
    <div className="judges__card">
      <div className="judges__card__top">
        <div className="judge__image">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="judges__card__bottom">
        <h2 className="judge__name">{name}</h2>
        <p className="judge__position">{work}</p>
        <p className="judge__company">
          <span className="judge__span">{company}</span>
        </p>
      </div>
    </div>
  );
};

export default JudgeCard;
