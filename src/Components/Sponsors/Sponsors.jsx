import React from 'react';
import '../../Styles/Sponsors.css';
import SponsorImage from '../../require_images/sponsor-image.png';
import SponsorCard from './SponsorCard';

const Sponsors = () => {
  return (
    <>
      <section className="sponsors" id="partners">
        <h1 className="heading stylish-title">Partners</h1>
        <p className="heading heading-sm">
          We will be revealing our Partners soon.
        </p>

        {/* sponsors card grid */}
        <div className="sponsors-cards-grid">
          <SponsorCard
            image={require('../../require_images/taskade-circle-icon.png')}
            name="Taskcade"
          />

          {/* <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} /> */}
        </div>
      </section>
    </>
  );
};

export default Sponsors;
