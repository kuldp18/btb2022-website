import React from 'react';
import '../../Styles/JudgesSection.css';
import JudgeCard from './JudgeCard';
import Separator from '../Separator';
import Separator2 from '../Separator2';

const JudgesSection = () => {
  return (
    <>
      {/* <Separator /> */}
      <section className="judges" id="judges">
        <h2 className="judges__title">Meet the Judges</h2>
        <div className="judges-grid">
          <JudgeCard
            name="Anjali Sheel"
            work="Software Engineer II"
            company="MICROSOFT"
            image={require('../../require_images/judges/Anjali_Sheel.png')}
          />
          <JudgeCard
            name="Shabnam Sandhi"
            work="Associate Project Manager"
            company="MICROSOFT"
            image={require('../../require_images/judges/Shabnam.png')}
          />
          <JudgeCard
            name="Luis Ouriach"
            work="Design Advocate"
            company="FIGMA"
            image={require('../../require_images/judges/Luios.png')}
          />
          <JudgeCard
            name="Kunal Lagwankar"
            work="Director of Product Management"
            company="WARNER BROS. DISCOVERY"
            image={require('../../require_images/judges/Kunal.png')}
          />
          <JudgeCard
            name="Atul Khola"
            work="Product and Design"
            company="CRED"
            image={require('../../require_images/judges/Atul.png')}
          />

          <JudgeCard
            name="Deepanshu Jain"
            work="Software Engineer"
            company="ATLASSIAN"
            image={require('../../require_images/judges/Deepanshu.png')}
          />
          <JudgeCard
            name="Udit Agarwal"
            work="Software Development Manager III"
            company="AMAZON"
            image={require('../../require_images/judges/Udit.png')}
          />
          <JudgeCard
            name="Gourav Rusiya"
            work="Software Development Engineer II"
            company="AMAZON"
            image={require('../../require_images/judges/Gourav.png')}
          />
        </div>
      </section>
      {/* <Separator2
        styles={{
          width: '100%',
          maxHeight: '200px',
          height: '100%',
          zIndex: '99',
        }}
      /> */}
    </>
  );
};

export default JudgesSection;
