
import "./eventCard.css";
import eventdata from "../constants/eventData";
import SingleEventCard from "./singleEventCard";

const Eventcard = () => {
  return (
    <div className="event-grid">
      {eventdata.map((event, index) => (
        <SingleEventCard key={index} event={event} imageBg={event.imageBg} />
      ))}
    </div>
  );
};

export default Eventcard;


