import React from 'react';
import '../Styles/WorkshopPage.css';
import Navbar from './Navbar/Navbar';

function MentorTalkPage({
  talkTitle,
  talkDetails,
  talkDate,
  talkLink,
  imgPath,
  talkTime,
  completed,
  ytLink,
}) {
  return (
    <>
      <Navbar hideLinks={true} />
      <div className="WorkShop-page">
        <div className="iq_workshop-details-container">
          {/* Poster */}
          <img
            src={require(`${imgPath}`)}
            alt={talkTitle}
            className="whop-img"
          />
          <div className="iq_workshop-data">
            {/* Title and Register Now Button */}
            <div className="iq_workshop_title">
              <h1>{talkTitle}</h1>
              {/* <button>
                <a
                  href={
                    completed ? ytLink : 'https://forms.gle/V8ceiVxjnk8x7RkC8'
                  }
                  target="_blank"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  {completed ? 'Watch Now' : 'Register Now'}
                </a>
              </button> */}
            </div>

            {/* Workshop Details */}
            <p className="iq_details_title">Talk Details :</p>
            <p className="iq_workshop-details">{talkDetails}</p>
            <p className="iq_workshop_date">
              <span>Date :</span>
              {talkDate}
            </p>
            {completed ? (
              ''
            ) : (
              <>
                <p className="iq_workshop_date">
                  <span>Time :</span>
                  {talkTime}
                </p>

                <p className="iq_workshop_date">
                  <span>Talk Link :</span>
                  {talkLink}
                </p>

                {/* Interest */}
                {/* <p className="iq_interest">
                  Interested in attending this talk ?
                </p>
                <p className="iq_interest">Click on Register Now</p> */}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorTalkPage;
