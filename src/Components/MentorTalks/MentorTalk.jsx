import '../../Styles/MentorTalks.css';

const MentorTalk = ({ thumbnail }) => {
  return (
    <>
      <div className="mentor-image-container">
        <img src={thumbnail} alt="mentor-image" className="mentor-image-yes" />
      </div>
      <p id="talk-title">Transform Technical Expertise Into Leadership</p>
      <div className="talk-details">
        <p id="talk-speaker">
          <span className="talk-grey">Speaker: </span>Nupur Bartwal
        </p>
        <p id="talk-date">
          <span className="talk-grey">Date: </span>28/04/2022
        </p>
      </div>
      <button className="talk-button" id="talk-register-now">
        Register Now
      </button>
      <button className="talk-button" id="talk-view-details">
        View Details
      </button>
    </>
  );
};

export default MentorTalk;
