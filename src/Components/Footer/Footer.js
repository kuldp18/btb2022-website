import React from 'react';
import './../../Styles/Footer.css';
import Logo from './../../require_images/final footer logo.png';

export const Footer = () => {
  return (
    <footer class="footer" id="footer">
      <div class="container">
        <div class="row">
          <div
            class="footer-col"
            style={{
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '20px',
            }}
          >
            <img src={Logo} width="60%" />
          </div>
          <div class="footer-col">
            <h4>EVENTS</h4>
            <ul>
              <li>
                <a href="#workshop">Workshops</a>
              </li>
              {/* <li><a href="#">Winners of Events</a></li>
  	 				<li><a href="#">Prizes</a></li> */}
              <li>
                <a href="#mentor-talks">Talks</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>HELP</h4>
            <ul>
              <li>
                <a href="#faq">FAQ Section</a>
              </li>
              <li>
                <a href="mailto:ldrphackathon2022@ldrp.ac.in">Support</a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1KmL3NKZ604dLvEraJ6TeQvNH3ZI5DwhU/edit?usp=sharing&ouid=114895267717905083044&rtpof=true&sd=true"
                  target="_blank"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#about">About BTB</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 id="cws-h4">CONNECT WITH US</h4>
            <div class="social-links">
              <a
                href="https://www.facebook.com/Break-The-Barrier-Hackathon-108922648435289/"
                target="_blank"
              >
                <i
                  class="fab fa-facebook fa-lg"
                  style={{
                    fontSize: '2.5rem',
                  }}
                ></i>
              </a>
              <a href="https://twitter.com/BTB0110" target="_blank">
                <i
                  class="fab fa-twitter fa-lg"
                  style={{
                    fontSize: '2.5rem',
                  }}
                ></i>
              </a>
              <a
                href="https://www.instagram.com/breakthebarrier22/"
                target="_blank"
              >
                <i
                  class="fab fa-instagram fa-lg"
                  style={{
                    fontSize: '2.5rem',
                  }}
                ></i>
              </a>
              <a href="#" target="_blank">
                <i
                  class="fab fa-github fa-lg"
                  style={{
                    fontSize: '2.5rem',
                  }}
                ></i>
              </a>
              <br />
              <a
                href="https://www.linkedin.com/company/breakthebarrieer/"
                target="_blank"
              >
                <i
                  class="fab fa-linkedin-in fa-lg"
                  style={{
                    fontSize: '2.5rem',
                  }}
                ></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCLzse4JnoUQOgEIQpmdXbug"
                target="_blank"
              >
                <i
                  class="fab fa-youtube fa-lg"
                  style={{
                    fontSize: '2.5rem',
                  }}
                ></i>
              </a>
              <a href="mailto:ldrphackathon2022@ldrp.ac.in">
                <i
                  class="fa fa-envelope fa-lg"
                  style={{
                    fontSize: '2.5rem',
                  }}
                ></i>
              </a>
              <a href=" https://discord.gg/uN3dhWBKKT" target="_blank">
                <i
                  class="fab fa-discord fa-lg"
                  style={{
                    fontSize: '2.5rem',
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text">
        <p
          style={{
            textTransform: 'none',
          }}
        >
          &#169; {new Date().getFullYear()} Break The Barrier. All rights
          reserved. &nbsp;
        </p>
      </div>
    </footer>
  );
};
