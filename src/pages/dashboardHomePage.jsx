import { useState } from "react";
import MenuBar from "../components/menuBar.jsx";
import RegisteredEvents from "../components/registredEvent.jsx";
import SavedEvents from "../components/bookMarkEvent.jsx";
import PastEvents from "../components/pastEvent.jsx";
import Dashboardevent from "../Hook/useDashboard.js"; 
import "./dashboardHomePage.css";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("registered");
  3
   const { bookmarkedEvents, pastEvents } = Dashboardevent();
  console.log("bookmarkedEvents in dashboardhomepage", bookmarkedEvents);

  return (
    <div className="dashboard-container">
      <MenuBar setActiveTab={setActiveTab} />

      <div className="dashboard-content">
        <div className="header">
          <h2 className="heading">
            {activeTab === "registered"
              ? "Registered Events"
              : activeTab === "saved"
              ? "Saved Events"
              : "Past Events"}
          </h2>
          <button className="explore-btn">Explore Events</button>
      
        </div>

        {/* Pass fetched data to respective components */}
        {activeTab === "registered" && <RegisteredEvents />}
        {activeTab === "saved" && <SavedEvents bookmarkedEvents={Array.from(bookmarkedEvents)} />}
        {activeTab === "past" && <PastEvents pastEvents={pastEvents} />}
      </div>
    </div>
  );
};


export default Dashboard;
