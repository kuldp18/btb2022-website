import React from 'react';
import './../../Styles/Footer.css';
import Logo from './../../require_images/LOGOF.png';

export const Footer = () => {
  return (
    <footer class="footer" id="footer">
      <div class="container">
        <div class="row">
          <div
            class="footer-col"
            style={{
              backgroundColor: '#21192B',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '20px',
            }}
          >
            <img src={Logo} width="70%" />
          </div>
          <div class="footer-col">
            <h4>EVENTS</h4>
            <ul>
              <li>
                <a href="#">Upcoming Hackathons</a>
              </li>
              {/* <li><a href="#">Winners of Events</a></li>
  	 				<li><a href="#">Prizes</a></li> */}
              <li>
                <a href="#">Schedules</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>HELP</h4>
            <ul>
              <li>
                <a href="#">FAQ Section</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">About BTB</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>CONNECT WITH US</h4>
            <div class="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100079542344570"
                target="_blank"
              >
                <i class="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com/BTB0110" target="_blank">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/breakthebarrier22/"
                target="_blank"
              >
                <i class="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://github.com/BreakTheBarrier-LDRP-ITR"
                target="_blank"
              >
                <i class="fab fa-github fa-lg"></i>
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/break-the-barrier-btb-479548235/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in fa-lg"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube fa-lg"></i>
              </a>
              <a href="#">
                <i class="fa fa-envelope fa-lg"></i>
              </a>
              <a href="#">
                {' '}
                <i class="fab fa-discord fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text">
        <p>
          &#169; BTB Hackathon & its Contributors {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
