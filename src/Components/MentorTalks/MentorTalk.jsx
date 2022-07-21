import '../../Styles/MentorTalks.css';

const MentorTalk = ({ thumbnail, title, speaker, date }) => {
  return (
    <>
      <div className="mentor-image-container">
        <img
          src={require(`${thumbnail}`)}
          alt="mentor-image"
          className="mentor-image-yes"
        />
      </div>
      <p id="talk-title">{title}</p>
      <div className="talk-details">
        <p id="talk-speaker">
          <span className="talk-grey">Speaker: </span>
          {speaker}
        </p>
        <p id="talk-date">
          <span className="talk-grey">Date: </span>
          {date}
        </p>
      </div>
      <a className="talk-button" id="talk-register-now">
        Register Now
      </a>
      <a className="talk-button" id="talk-view-details">
        View Details
      </a>
    </>
  );
};

export default MentorTalk;
