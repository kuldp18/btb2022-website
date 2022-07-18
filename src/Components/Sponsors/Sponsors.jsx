import React from 'react';
import '../../Styles/Sponsors.css';
import SponsorImage from '../../require_images/sponsor-image.png';
import Marquee from 'react-fast-marquee';
// import SponsorCard from './SponsorCard';

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

        {/* <div className="sponsors-display"> */}
        <Marquee
          pauseOnHover={true}
          speed={35}
          gradient={false}
          className="sponsors-display"
        >
          <div className="sponsor-item">
            <a href="https://www.taskade.com" target="_blank">
              <img
                src={require('../../require_images/taskade-circle-icon.png')}
                alt="Taskade"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://digitalocean.com" target="_blank">
              <img
                src={require('../../require_images/DigitalOcean.png')}
                alt="Digital Ocean"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://github.com" target="_blank">
              <img
                src={require('../../require_images/Github Logo Full.png')}
                alt="Github"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://mongodb.com" target="_blank">
              <img
                src={require('../../require_images/MongoDB Full.png')}
                alt="Mongodb"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a
              href="https://developers.google.com/community/gdsc"
              target="_blank"
            >
              <img
                src={require('../../require_images/GDSC.png')}
                alt="GDSC"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://gen.xyz" target="_blank">
              <img
                src={require('../../require_images/xyz logo final.png')}
                alt=".XYZ"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://www.echo3d.co/" target="_blank">
              <img
                src={require('../../require_images/echo3d.png')}
                alt="Echo3D"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://www.aspireforher.org/" target="_blank">
              <img
                src={require('../../require_images/aspire4her.png')}
                alt="Aspire For Her"
                className="sponsor-item-image"
              />
            </a>
          </div>

          <div className="sponsor-item">
            <a href="https://www.interviewcake.com" target="_blank">
              <img
                src={require('../../require_images/Interview_Cake.png')}
                alt="Interview Cake"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://cybrancee.com/" target="_blank">
              <img
                src={require('../../require_images/Cybrancee.png')}
                alt="Cybrancee"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://www.bluelearn.in" target="_blank">
              <img
                src={require('../../require_images/blue_learn.png')}
                alt="BlueLearn"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://www.axure.com" target="_blank">
              <img
                src={require('../../require_images/axure logo.png')}
                alt="Axure"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="#">
              <img
                src={require('../../require_images/CE.png')}
                alt="Coders Evoke"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a
              href="https://developers.google.com/womentechmakers"
              target="_blank"
            >
              <img
                src={require('../../require_images/Women Techmakers.png')}
                alt="Women Techmakers"
                className="sponsor-item-image"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a href="https://geeksgod.com/" target="_blank">
              <img
                src={require('../../require_images/GeeksGod.png')}
                alt="GeeksGod"
                className="sponsor-item-image"
              />
            </a>
          </div>
        </Marquee>
        {/* </div> */}

        {/* sponsor revamp */}

        {/* sponsor old */}
        {/* sponsors card grid */}
        {/* <div className="sponsors-cards-grid">
          <SponsorCard
            image={require('../../require_images/taskade-circle-icon.png')}
            name="Taskcade"
            url="https://www.taskade.com/"
          />
          <SponsorCard
            image={require('../../require_images/DigitalOcean.png')}
            name="Digital Ocean"
            url="https://digitalocean.com"
          />
          <SponsorCard
            image={require('../../require_images/github-dark.png')}
            name="Github"
            url="https://github.com"
          />
          <SponsorCard
            image={require('../../require_images/mongodb.png')}
            name="MongoDB"
            url="https://mongodb.com"
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
        </div> */}
      </section>
    </>
  );
};

export default Sponsors;
