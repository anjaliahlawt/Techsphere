import styles from "./nonLoginPage.module.css";
import Navbar from "../components/LandingComponents/Navbar.jsx";
import Footer from "../components/LandingComponents/Footer.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NonLoginPage = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState("false");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          view,
          sortBy,
          price,
          isFree,
          duration,
        });

        const response = await fetch(`http://localhost:3002/eventcard/filter?${queryParams}`);
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [view, sortBy, price, isFree, duration]);

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/detail-page");
  };

  return (
    <div className={styles.eventContainer}>
      <Navbar />
      <h2 className={styles.eventTitle}>Explore Events</h2>
      <div className={styles.sortContainer}>
        <select onChange={(e) => setView(e.target.value)} value={view} className={styles.dropdown}>
          <option value="all"> View Hackathon</option>
          <option value="upcoming">Upcoming Events</option>
          <option value="past">Past Events</option>
        </select>
        <div className={styles.verticalLine}></div>

        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy} className={styles.dropdown}>
          <option value="">Sort By</option>
          <option value="date">Sort By Date</option>
          <option value="location">Sort By Location</option>
          <option value="duration">Sort By Duration</option>
          <option value="prize">Sort By Prize</option>
        </select>

        <select onChange={(e) => setPrice(e.target.value)} value={price} className={styles.dropdown}>
          <option value="">Price Pool</option>
          <option value="$8000">$8,000</option>
          <option value="$10000">$10,000</option>
          <option value="$12000">$12,000</option>
          <option value="$15000">$15,000</option>
          <option value="$6000">$6,000</option>
          <option value="$7000">$7,000</option>
        </select>

        <select onChange={(e) => setIsFree(e.target.value)} value={isFree} className={styles.dropdown}>
          <option value="false">Paid</option>
          <option value="true">Free</option>
        </select>

        <select onChange={(e) => setDuration(e.target.value)} value={duration} className={styles.dropdown}>
          <option value="">Time</option>
          <option value="36 Hours">36 Hours</option>
          <option value="48 Hours">48 Hours</option>
          <option value="20 Hours">4 Days</option>
          <option value="22 Hours">22 Hours</option>
          <option value="40 Hours">40 Hours</option>
          <option value="46 Hours">2 Days</option>
        </select>
      </div>

      {loading && <p>Loading events...</p>}
      {error && <p className={styles.errorText}>Error: {error}</p>}

      <div className={styles.eventGrid}>
        {events.map((event) => (
          <div key={event._id} className={styles.eventCard}>
            <p className={styles.eventLocation}>{event.location}</p>
            <h3 className={styles.eventName}>{event.name}</h3>
            <p className={styles.eventDescription}>{event.description}</p>
            <p className={styles.eventDetail}>
              Start: <span className={styles.boldText}>{event.start ? new Date(event.start).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "N/A"}</span>
            </p>
            <p className={styles.eventDetail}>
              Duration: <span className={styles.boldText}>{event.duration}</span>
            </p>
            <p className={styles.eventDetail}>
              Prize Pool: <span className={styles.boldText}>{event.prize}</span>
            </p>
            <button onClick={handleViewDetails} className="viewButton">View details</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NonLoginPage;
