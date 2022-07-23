import '../../Styles/MentorTalks.css';
import { Link } from 'react-router-dom';

const MentorTalk = ({ thumbnail, title, speaker, date, slug }) => {
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
      {/* <a className="talk-button" id="talk-register-now">
        Register Now
      </a> */}
      <Link className="talk-button" id="talk-view-details" to={slug}>
        View Details
      </Link>
    </>
  );
};

export default MentorTalk;
