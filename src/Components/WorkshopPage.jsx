import React from 'react';
import '../Styles/WorkshopPage.css';

function WorkshopPage({
  workShopTitle,
  workShopDetails,
  workShopDate,
  workShopLink,
  imgPath,
}) {
  return (
    <div className="WorkShop-page">
      <div className="iq_workshop-details-container">
        {/* Poster */}
        <img src={imgPath} alt="Workshop from Shravan" className="whop-img" />
        <div className="iq_workshop-data">
          {/* Title and Register Now Button */}
          <div className="iq_workshop_title">
            <h1>{workShopTitle}</h1>
            <button>
              <a
                href="https://forms.gle/V8ceiVxjnk8x7RkC8"
                target="_blank"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Register Now
              </a>
            </button>
          </div>

          {/* Workshop Details */}
          <p className="iq_details_title">Workshop Details :</p>
          <p className="iq_workshop-details">{workShopDetails}</p>
          <p className="iq_workshop_date">
            <span>Date :</span>
            {workShopDate}
          </p>
          <p className="iq_workshop_date">
            <span>Workshop Link :</span>
            {workShopLink}
          </p>

          {/* Interest */}
          <p className="iq_interest">Interested in attending workshop ?</p>
          <p className="iq_interest">Click on Register Now</p>
        </div>
      </div>
    </div>
  );
}

export default WorkshopPage;
