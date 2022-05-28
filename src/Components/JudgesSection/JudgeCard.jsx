import React from 'react';
import '../../Styles/JudgesSection.css';

const JudgeCard = ({ name, work, company }) => {
  return (
    <div className="judges__card">
      <div className="judges__card__top">
        <div className="judge__image"></div>
      </div>
      <div className="judges__card__bottom">
        <h2 className="judge__name">Atul Khola</h2>
        <p className="judge__position">Product and Design</p>
        <p className="judge__company">
          at <span className="judge__span">CRED</span>
        </p>
      </div>
    </div>
  );
};

export default JudgeCard;
