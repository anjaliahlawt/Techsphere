import Navbar from "../componets/Navbar.jsx";
import Eventcard from "../componets/eventCard.jsx";
import Footer from "../componets/Footer.jsx";
import "./nonLoginPage.css";

const NonLoginPage = () => {
  return (
    <div className="event-container">
      <Navbar />
      <h2 className="event-title">Explore Events</h2>
      <div className="sort-container">
        <select>
          <option value="view">View Hackathon</option>
          <option value="view">All Hackathons</option>
          <option value="view">Upcoming Hackathons</option>
          <option value="view">Completed Hackathons</option>
        </select>
        <div className="vertical-line"></div>

        <select>
          <option value="sort">Sort By</option>
          <option value="sort">Date</option>
          <option value="sort">Location</option>
          <option value="sort">Duration</option>
          <option value="sort">Prize</option>
          <option value="sort">Name</option>
          <option value="sort">Start Date</option>
        </select>
        <select>
          <option value="price">Price Pool</option>
          <option value="price">$8,000</option>
          <option value="price">$10,000 </option>
          <option value="price">$12,000</option>
          <option value="price">$15,000</option>
          <option value="price">$20,000</option>
        </select>
        <select>
          <option value="free">Free</option>
        </select>
        <select>
          <option value="time">Time</option>
          <option value="time">36 hours</option>
          <option value="time">42 hours</option>
          <option value="time">37 hours</option>
          <option value="time">48 hours</option>
          <option value="time">2 days</option>
          <option value="time">4 days</option>
        </select>
      </div>
      <Eventcard />
      <Footer />
    </div>
  );
};

export default NonLoginPage;
