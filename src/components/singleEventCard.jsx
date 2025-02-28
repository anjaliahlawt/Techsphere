import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./eventCard.css";

const SingleEventCard = ({ event, imageBg }) => {
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);

  const handleViewDetails = () => {
    navigate("/detail-page");
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const formattedStartDate = formatDate(event.start);

  return (
    <div className="event-card" onClick={handleViewDetails}>
      <div className="image-container" style={{ backgroundColor: imageBg }}>
        <img className="img" src={event.imageUrl} alt="Event" />
      </div>
      <div className="event-header">
        <p className="event-location">{event.location}</p>
        <div className="bookmark-icon" onClick={() => setBookmarked(!bookmarked)}>
          {bookmarked ? (
            <img src="/bookmark (1).png" alt="Bookmarked" />
          ) : (
            <img src="/bookmark.png" alt="Bookmark" />
          )}
        </div>
      </div>
      <h4 className="event-name">{event.name}</h4>
      <p className="event-description">{event.description}</p>
      <p className="event-detail">
        Start: <span className="bold-text">{formattedStartDate}</span>
      </p>
      <p className="event-detail">
        Duration: <span className="bold-text">{event.duration}</span>
      </p>
      <p className="event-detail">
        Prize Pool: <span className="bold-text">{event.prize}</span>
      </p>
      <button onClick={handleViewDetails} className="viewButton">
        View details
      </button>
    </div>
  );
};

SingleEventCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    prize: PropTypes.string.isRequired,
    imageUrl: PropTypes.string, // ✅ Add imageUrl to display uploaded images
  }).isRequired,
  imageBg: PropTypes.string,
};

export default SingleEventCard;
