import React from 'react';
import '../../Styles/JudgesSection.css';
import JudgeCard from '../JudgesSection/JudgeCard';

const MentorsSection = () => {
  return (
    <>
      <section className="judges" id="judges">
        <h2 className="judges__title">Mentors</h2>
        <div className="judges-grid">
          <JudgeCard
            name="Shabnam"
            work="Associate Project Manager"
            company="MICROSOFT"
            image={require('../../require_images/judges/Shabnam.png')}
          />
        </div>
      </section>
    </>
  );
};

export default MentorsSection;
