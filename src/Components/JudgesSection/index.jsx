import React from 'react';
import '../../Styles/JudgesSection.css';
import JudgeCard from './JudgeCard';
import Separator from '../Separator';
import Separator2 from '../Separator2';

const JudgesSection = () => {
  return (
    <>
      <Separator />
      <section className="judges" id="judges">
        <h2 className="judges__title">Meet the Judges</h2>
        <div className="judges-grid">
          <JudgeCard />
          <JudgeCard />
          <JudgeCard />
          <JudgeCard />
          <JudgeCard />
        </div>
      </section>
      <Separator2
        styles={{
          width: '100%',
          maxHeight: '200px',
          height: '100%',
          zIndex: '99',
        }}
      />
    </>
  );
};

export default JudgesSection;
