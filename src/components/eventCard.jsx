
import "./eventCard.css";
// import eventdata from "../constants/eventData";
import SingleEventCard from "./singleEventCard";
import PropTypes from "prop-types";

const Eventcard = ({eventdata}) => {
  console.log("1",eventdata);
  return (
    <>
      {eventdata.map((event, index) => (
        <SingleEventCard key={index} event={event} imageBg={event.imageBg} />
      ))}
    </>
  );
};

Eventcard.propTypes = {
  eventdata: PropTypes.array.isRequired};

export default Eventcard;