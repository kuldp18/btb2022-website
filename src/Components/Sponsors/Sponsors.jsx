import React from 'react';
import '../../Styles/Sponsors.css';
import SponsorImage from '../../require_images/sponsor-image.png';

const Sponsors = () => {
  return (
    <>
      <section className="sponsors" id="sponsors">
        <h1 className="title">Our Sponsors</h1>

        {/* selectable sponsor levels */}

        <div className="sponsor-levels">
          <input
            type="radio"
            name="sponsorLevel"
            id="sponsorLevel1"
            value="Gold"
            className="sponsor-levels__input"
          />
          <label htmlFor="sponsorLevel1" className="sponsor-levels__label">
            Gold
          </label>
          <input
            type="radio"
            name="sponsorLevel"
            id="sponsorLevel2"
            value="Premium"
            className="sponsor-levels__input"
            checked
          />
          <label htmlFor="sponsorLevel2" className="sponsor-levels__label">
            Premium
          </label>
          <input
            type="radio"
            name="sponsorLevel"
            id="sponsorLevel3"
            value="Platinum"
            className="sponsor-levels__input"
          />
          <label htmlFor="sponsorLevel3" className="sponsor-levels__label">
            Platinum
          </label>
        </div>

        {/* sponsors card grid */}
        <div className="sponsors-cards-grid">
          <div className="sponsor-card">
            <div className="sponsor-image">
              <img alt="sponsor-image" src={SponsorImage} />
            </div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-image">
              <img alt="sponsor-image" src={SponsorImage} />
            </div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-image">
              <img alt="sponsor-image" src={SponsorImage} />
            </div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-image">
              <img alt="sponsor-image" src={SponsorImage} />
            </div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-image">
              <img alt="sponsor-image" src={SponsorImage} />
            </div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-image">
              <img alt="sponsor-image" src={SponsorImage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
