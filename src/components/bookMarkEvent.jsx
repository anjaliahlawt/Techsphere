import PropTypes from 'prop-types';
import Eventcard from './eventCard';

const SavedEvents = ({ bookmarkedEvents }) => {
  return (
    <div>
      {bookmarkedEvents.length > 0 ? (
        <Eventcard eventdata={bookmarkedEvents} />
      ) : (
        <p>No saved events found</p>
      )}
    </div>
  );
};

SavedEvents.propTypes = {
  bookmarkedEvents: PropTypes.array.isRequired,
};

export default SavedEvents;
