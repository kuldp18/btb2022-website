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
            name="Shabnam Sandhi"
            work="Associate Project Manager"
            company="MICROSOFT"
            image={require('../../require_images/judges/Shabnam.png')}
          />
          <JudgeCard
            name="Saborni Das"
            work="Cloud Consultant"
            company="GOOGLE"
            image={require('../../require_images/judges/SaborniDas.png')}
          />
          <JudgeCard
            name="Muskan Jain"
            work="Software Engineer"
            company="MICROSOFT"
            image={require('../../require_images/judges/muskan.png')}
          />
        </div>
      </section>
    </>
  );
};

export default MentorsSection;
