import styles from "./nonLoginPage.module.css";
import Navbar from "../components/LandingComponents/Navbar.jsx";
import Footer from "../components/LandingComponents/Footer.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
const NonLoginPage = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState("false");
  const [duration, setDuration] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          view,
          sortBy,
          price,
          isFree: isFree.toString(),
          duration,
          page,
          size: 10,
        });

        const response = await fetch(
          `https://backendtechsphere.onrender.com/eventcard/filter?${queryParams}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data.events || []); 
      } catch (error) {
        setError(error.message);
      }
    };
  

    fetchEvents();
  }, [view, sortBy, price, isFree, duration, page]);

  const navigate = useNavigate();
  const handleViewDetails = () => navigate("/detail-page");
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getUTCDate()).padStart(2, "0"); 
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getUTCFullYear(); 
    return `${month} ${day}, ${year}`;
  };

  return (
    <div className={styles.eventContainer}>
      <Navbar />
      <h2 className={styles.eventTitle}>Explore Events</h2>

      <div className={styles.sortContainer}>
        <select onChange={(e) => setView(e.target.value)} value={view}>
          <option value="all">View Hackathon</option>
          <option value="upcoming">Upcoming Events</option>
          <option value="past">Past Events</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="">Sort By</option>
          <option value="date">Sort By Date</option>
          <option value="location">Sort By Location</option>
          <option value="duration">Sort By Duration</option>
          <option value="prize">Sort By Prize</option>
        </select>

        <select onChange={(e) => setPrice(e.target.value)} value={price}>
          <option value="">Price Pool</option>
          <option value="$8,000">$8,000</option>
          <option value="$9,500">$9,500</option>
          <option value="$10,000">$10,000</option>
          <option value="$11,000">$11,000</option>
          <option value="$12,000">$12,000</option>
          <option value="$15,000">$15,000</option>
        </select>

        <select onChange={(e) => setIsFree(e.target.value)} value={isFree}>
          <option value="false">Paid</option>
          <option value="true">Free</option>
        </select>

        <select onChange={(e) => setDuration(e.target.value)} value={duration}>
          <option value="">Time</option>
          <option value="36 Hours">36 Hours</option>
          <option value="46 Hours">46 Hours</option>
          <option value="48 Hours">48 Hours</option>
          <option value="2 Days">2 Days</option>
          <option value="4 Days">4 Days</option>
          <option value="5 Days">5 Days</option>
        </select>
      </div>

      {error && <p className={styles.errorText}>Error: {error}</p>}

      <div className={styles.eventGrid}>
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className={styles.eventCard}>
              <p className={styles.eventLocation}>{event.location}</p>
              <h3 className={styles.eventName}>{event.name}</h3>
              <p className={styles.eventDescription}>{event.description}</p>
              <p className={styles.eventDetail}>
                Start:{" "}
                <span className={styles.boldText}>
                  {formatDate(event.start)}
                </span>
              </p>
              <p className={styles.eventDetail}>
                Duration:{" "}
                <span className={styles.boldText}>{event.duration}</span>
              </p>
              <p className={styles.eventDetail}>
                Prize Pool:{" "}
                <span className={styles.boldText}>{event.prize}</span>
              </p>
              <button onClick={handleViewDetails} className="viewButton">
                View details
              </button>
            </div>
          ))
        ) : (
          <p className={styles.noEventsText}>No events found.</p>
        )}
      </div>

      <div className={styles.paginationContainer}>
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => setPage(value)}
          variant="outlined"
          color="primary"
        />
      </div>
      <Footer />
    </div>
  );
};

export default NonLoginPage;
