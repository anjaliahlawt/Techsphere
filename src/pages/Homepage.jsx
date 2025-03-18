import { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from '/src/components/LandingComponents/Navbar.jsx';
import EventCard from '/src/components/eventCard.jsx';
import Footer from '/src/components/LandingComponents/Footer';
import styles from './Homepage.module.css';
import Testimonials from '../components/LandingComponents/TestimonialCard';
import Milestones from '../components/LandingComponents/Milestones'; 
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Homepage = ({ eventdata }) => {
  const [filter, setFilter] = useState('all');
  const [searchText, setSearchText] = useState(""); // Search input state
  const navigate = useNavigate();

  // Filtering events based on search input and category filter
// Ensure searchText is always treated as a string
const filteredEvents = eventdata.filter((event) =>
  (searchText || "").toString().toLowerCase().trim() === "" ||
  event.name.toLowerCase().includes((searchText || "").toString().toLowerCase().trim())
);

  
console.log("filtredevents",filteredEvents);
console.log("Current searchText:", searchText);
  return (
    <div className={styles.homepage}>
      {/* Pass setSearchText to Navbar for real-time updates */}
      <Navbar onSearch={(value) => setSearchText(value || "")} />
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Your Gateway to Tech Events, Workshops & Hackathons</h1>
          <p>Explore, Apply, and Innovate with the best tech events around the world.</p>
          <Link to="/nonlogin" className={styles.registerButton}> Start Exploring</Link>
        </div>
        <div className={styles.bannerImage}>
          <img src="/src/pages/images/OBJECT.svg" alt="Banner" />
        </div>
      </section>

      <section className={styles.events}>
        <h2>List of Events</h2>
        <div className={styles.filters}>
          <button 
            onClick={() => setFilter('hackathon')} 
            className={`${styles.hackathon} ${filter === 'hackathon' ? styles.active : ''}`}
          >
            <div className={styles.logo}><img src="/src/TestImages/hackathon.svg" alt="hackathon" /></div>
            <div className={styles.logotext}> Hackathon</div>
          </button>

          <button 
            onClick={() => setFilter('workshop')} 
            className={`${styles.webinar} ${filter === 'workshop' ? styles.active : ''}`}
          >
            <div className={styles.logo}><img src="/src/TestImages/webinar.svg" alt="webinar" /></div>
            <div className={styles.logotext}> Webinar</div>
          </button>

          <button 
            onClick={() => setFilter('concert')} 
            className={`${styles.workshop} ${filter === 'concert' ? styles.active : ''}`}
          >
            <div className={styles.logo}><img src="/src/TestImages/workshop.svg" alt="workshop" /></div>
            <div className={styles.logotext}> Workshop</div>
          </button>

          <button 
            onClick={() => setFilter('seminar')} 
            className={`${styles.conference} ${filter === 'seminar' ? styles.active : ''}`}
          >
            <div className={styles.logo}><img src="/src/TestImages/conference.svg" alt="conference" /></div>
            <div className={styles.logotext}> Conference</div>
          </button>
        </div>

        {/* Display filtered events */}
        <div className={styles.eventDisplay}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => <EventCard key={index} eventdata={event} />)
          ) : (
            <p className={styles.noEventsText}>No events found.</p>
          )}
        </div>

        <div className={styles.viewAllButton}>
          <button onClick={() => navigate("/nonlogin")} className={styles.viewAll}>
            View All
          </button>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2>How It Works?</h2>
        <div className={styles.workboxes}>
          <div className={styles.workbox}>
            <div className={styles.hImgContainer}>
              <img src="/src/pages/images/Hworks.svg" alt="Search Event" />
            </div>
            <div className={styles.hTextContainer}>
              Search For your Desired Event.
            </div>         
          </div>
          <div className={styles.workbox}>
            <div className={styles.hImgContainer}>
              <img src="/src/pages/images/Hworks2.svg" alt="Check Details" />
            </div>
            <div className={styles.hTextContainer}>
              Explore Details and Check Requirements.
            </div>         
          </div>
          <div className={styles.workbox}>
            <div className={styles.hImgContainer}>
              <img src="/src/pages/images/Hworks3.svg" alt="Register" />
            </div>
            <div className={styles.hTextContainer}>
              Register with Ease.
            </div>         
          </div>            
        </div>
      </section>

      <Testimonials />
      <Milestones />
      <Footer />
    </div>
  );
};


Homepage.propTypes = {
  eventdata: PropTypes.array.isRequired
};

export default Homepage;
