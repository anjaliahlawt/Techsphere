import PropTypes from 'prop-types';
import Eventcard from './eventCard';

const PastEvents = ({ pastEvents }) => {
 
  const filteredPastEvents = pastEvents.filter(event => new Date(event.start) < new Date());

  return (
    <div>
      {filteredPastEvents.length > 0 ? (
        <Eventcard eventdata={filteredPastEvents} />
      ) : (
        <p>No past events found.</p>
      )}
    </div>
  );
};

PastEvents.propTypes = {
  pastEvents: PropTypes.array.isRequired,
};

export default PastEvents;
