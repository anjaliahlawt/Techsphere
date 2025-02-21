import  { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from '/src/components/LandingComponents/Navbar.jsx';
import EventCard from '/src/components/eventCard.jsx';
import Footer from '/src/components/LandingComponents/Footer';
import styles from './Homepage.module.css';
import Testimonials from '../components/LandingComponents/TestimonialCard';
import Milestones from '../components/LandingComponents/Milestones'; 
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Homepage = ({eventdata}) => {
  const [filter, setFilter] = useState('all'); 
  const navigate = useNavigate();

  return (
    <div className={styles.homepage}>
      <Navbar />
      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Your Gateway to Tech Events, Workshops & Hackathons</h1>
          <p>Explore, Apply, and Innovate with the best tech events around the world.</p>
          {/* <button className={styles.registerButton}><Link to="/nonlogin"> Start Exploring</Link></button> */}
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
      <div className={styles.logo}><img src = "/src/TestImages/hackathon.svg"></img></div><div className={styles.logotext}> Hackathon</div>
    </button>

    <button 
      onClick={() => setFilter('workshop')} 
      className={`${styles.webinar} ${filter === 'workshop' ? styles.active : ''}`}
    >
      <div className={styles.logo}><img src = "/src/TestImages/webinar.svg"></img></div><div className={styles.logotext}> Webinar</div>
    </button>

    <button 
      onClick={() => setFilter('concert')} 
      className={`${styles.workshop} ${filter === 'concert' ? styles.active : ''}`}
    >
      <div className={styles.logo}><img src = "/src/TestImages/workshop.svg"></img></div><div className={styles.logotext}> Workshop</div>
    </button>

    <button 
      onClick={() => setFilter('seminar')} 
      className={`${styles.conference} ${filter === 'seminar' ? styles.active : ''}`}
    >
      <div className={styles.logo}><img src = "/src/TestImages/conference.svg"></img></div><div className={styles.logotext}> Conference</div>
    </button>

        </div>
        <div className={styles.eventDisplay}>
          <EventCard eventdata={eventdata}/>
        </div>
        <div className={styles.viewAllButton}>
        {/* <button className={styles.viewAll}>View All</button> */}
        <button onClick={() => navigate("/nonlogin")} className={styles.viewAll}>
        View All
    </button>
        {/* <Link to="/nonlogin" className={styles.viewAll}> View All</Link> */}

        </div>
      </section>
      <section className={styles.howItWorks}>
        <h2>How It Works?</h2>
        <div className={styles.workboxes}>
          <div className={styles.workbox}>
            <div className = {styles.hImgContainer}>
              <img src = "/src/pages/images/Hworks.svg"></img>
            </div>
            <div className = {styles.hTextContainer}>
              Search For your Desired Event.
            </div>         
          </div>
          <div className={styles.workbox}>
            <div className = {styles.hImgContainer}>
              <img src = "/src/pages/images/Hworks2.svg"></img>
            </div>
            <div className = {styles.hTextContainer}>
              Explore Details and Check Requirements.
            </div>         
          </div>
          <div className={styles.workbox}>
            <div className = {styles.hImgContainer}>
              <img src = "/src/pages/images/Hworks3.svg"></img>
            </div>
            <div className = {styles.hTextContainer}>
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
  eventdata: PropTypes.array.isRequired};

export default Homepage;