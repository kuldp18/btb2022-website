import React from 'react';
import laptop from '../../require_images/Laptop.png';
import '../../Styles/AboutUS.css';

export const AboutUs = () => {
  return (
    <>
      <div
        id="about"
        className="100-vh 100-vw"
        style={{
          backgroundColor: '#21192B',
        }}
      >
        <div className="about-flex-container">
          <div className="about-left">
            <span className="heading">
              <span
                class="text-white font-weight-bold display-1"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                WE{' '}
              </span>
              <span
                style={{
                  color: '#FF5148',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
                class="font-weight-bold display-1"
              >
                CODE<span className="text-white display-1">,</span>
              </span>
              <span
                className="text-white font-weight-bold display-1"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                WE{' '}
              </span>{' '}
              <span
                style={{
                  color: '#FF5148',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
                className="font-weight-bold display-1"
              >
                DESIGN<span class="text-white display-1">, </span>
              </span>
              <br />
              <span
                className="text-white font-weight-bold col display-1"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                WE ARE{' '}
              </span>{' '}
              <span
                style={{
                  color: '#FF5148',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
                className="font-weight-bold col display-1"
              >
                BTB
                <span className="text-white font-weight-bold display-1">.</span>
              </span>
            </span>
            <div className="text-white description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aliquam eum, ut ipsam quasi ea quis repellendus blanditiis at
              neque incidunt laudantium dolorum sunt obcaecati dolore assumenda
              vitae perspiciatis, voluptatem, maiores in corrupti sit sequi
              perferendis. Eaque pariatur officia natus possimus voluptatibus
              officiis nulla. Dignissimos adipisci, architecto libero corrupti
              aliquid provident nostrum molestiae voluptas blanditiis.
              Laudantium fugit ex porro voluptate cumque, natus reprehenderit
              fuga dicta veniam aut voluptates sequi, tempore, vero harum vel
              numquam ducimus sint facere repudiandae aspernatur! Soluta ab
              recusandae nemo provident tempora magnam aperiam, magni nihil,
              fuga temporibus asperiores ipsam illum eius corporis excepturi
              ullam, sapiente quod?
            </div>
            <button
              type="button"
              className="btn btn-outline-danger btn-lg col-sm-1  learn-more"
            >
              Learn More
            </button>
          </div>
          <div className="about-right">
            <img
              src={laptop}
              class="col-sm-4"
              alt="Laptop image"
              style={{ color: '#FF5148' }}
            />
          </div>
        </div>
        <div className="fancy-red-circles">
          <div className="circles-left">
            <div className="fancy-red-circle red-circle-1"></div>
            <div className="fancy-red-circle red-circle-2"></div>
          </div>
          <div className="circles-right">
            <div className="fancy-red-circle red-circle-3"></div>
            <div className="fancy-red-circle red-circle-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};
