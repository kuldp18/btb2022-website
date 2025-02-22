import React from 'react';
import '../../Styles/Sponsors.css';
import SponsorImage from '../../require_images/sponsor-image.png';
import SponsorCard from './SponsorCard';

const Sponsors = () => {
  return (
    <>
      <section className="sponsors" id="partners">
        <h1
          className="heading stylish-title"
          style={{
            fontFamily: 'Metropolis',
          }}
        >
          Partners
        </h1>

        {/* sponsors card grid */}
        <div className="sponsors-cards-grid">
          <SponsorCard
            image={require('../../require_images/taskade-circle-icon.png')}
            name="Taskcade"
            url="https://www.taskade.com/"
          />
          <SponsorCard
            image={require('../../require_images/gsdc.png')}
            name="GDSC"
          />
          <SponsorCard
            image={require('../../require_images/xyz logo final.png')}
            name=".XYZ"
            url="https://gen.xyz/"
          />
          <SponsorCard
            image={require('../../require_images/echo3d.png')}
            name="echo3D"
            url="https://www.echo3d.co/"
          />
          <SponsorCard
            image={require('../../require_images/aspire4her.png')}
            name="Aspire For Her"
            url="https://www.aspireforher.org/"
          />
          <SponsorCard
            image={require('../../require_images/Interview_Cake.png')}
            name="Interview Cake"
            url="https://www.interviewcake.com/"
          />
          <SponsorCard
            image={require('../../require_images/Cybrancee.png')}
            name="Cybrancee"
            url="https://cybrancee.com/"
          />
          <SponsorCard
            image={require('../../require_images/blue_learn.png')}
            name="BlueLearn"
            url="https://www.bluelearn.in/"
          />
          <SponsorCard
            image={require('../../require_images/axure logo.png')}
            name="Axure"
            url="https://www.axure.com/"
          />
          <SponsorCard
            image={require('../../require_images/CE.png')}
            name="Coders Evoke"
          />
          <SponsorCard
            image={require('../../require_images/DigitalOcean.png')}
            name="Digital Ocean"
            url="https://digitalocean.com"
          />
        </div>
      </section>
    </>
  );
};

export default Sponsors;
