
import "./eventCard.css";
// import eventdata from "../constants/eventData";
import SingleEventCard from "./singleEventCard";
import PropTypes from "prop-types";

const Eventcard = ({eventdata}) => {
  const eventArray = Array.isArray(eventdata) ? eventdata : [eventdata];
  return (
    <>
      {
      eventArray.map((event, index) => (
        <SingleEventCard key={index} event={event} imageBg={event.imageBg} />
      ))}
    </>
  );
};

Eventcard.propTypes = {
  eventdata: PropTypes.array.isRequired};

export default Eventcard;