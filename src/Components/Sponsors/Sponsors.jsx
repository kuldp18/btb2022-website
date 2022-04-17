import React from 'react';
import '../../Styles/Sponsors.css';
import SponsorImage from '../../require_images/sponsor-image.png';
import SponsorCard from './SponsorCard';

const Sponsors = () => {
  return (
    <>
      <section className="sponsors" id="partners">
        <h1 className="heading">Our Partners</h1>
        <p className="heading heading-sm">Partners will be revealed soon.</p>

        {/* sponsors card grid */}
        <div className="sponsors-cards-grid">
          <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} />
          <SponsorCard image={SponsorImage} />
        </div>
      </section>
    </>
  );
};

export default Sponsors;
