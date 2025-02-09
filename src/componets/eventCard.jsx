import { useState } from "react";
import "./eventCard.css";
import PropTypes from "prop-types";

const Eventcard = (props) => {
  const { resData, imageBg } = props;
  const event = resData;


  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="event-card">
    <div className="image-container" style={{ backgroundColor: imageBg }}>
      <img className="img" src="/Illustration.png" alt="Illustration" />
    </div>
    <div className="event-header">
      <p className="event-location">{event.Location}</p>
      <div className="bookmark-icon" onClick={() => setBookmarked(!bookmarked)}>
        {bookmarked ? (
          <img src="bookmark (1).png" alt="Bookmarked" />
        ) : (
          <img src="bookmark.png" alt="Bookmark" />
        )}
      </div>
    </div>
  
    <h4 className="event-name">{event.Name}</h4>
    <p className="event-description">{event.Description}</p>
  
    <p className="event-detail">
      Start: <span className="bold-text">{event.Start}</span>
    </p>
    <p className="event-detail">
      Duration: <span className="bold-text">{event.Duration}</span>
    </p>
    <p className="event-detail">
      Prize Pool: <span className="bold-text">{event.Prize}</span>
    </p>
  
    <button>View details</button>
  </div>
  
  );
};

Eventcard.propTypes = {
  resData: PropTypes.shape({
    Image: PropTypes.string,
    Location: PropTypes.string,
    Name: PropTypes.string,
    Description: PropTypes.string,
    Start: PropTypes.string,
    Duration: PropTypes.string,
    Prize: PropTypes.string,
  }).isRequired,
  imageBg: PropTypes.string,
};

export default Eventcard;
