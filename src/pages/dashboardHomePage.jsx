import MenuBar from "../componets/menuBar";
import "./dashboardHomePage.css";

const DashboardHomePage = () => {
    return (
        <div className="dashboard-container">
            <MenuBar />
            <div className="dashboard-content">
                <div className="header">
                    <h2 className="heading">Registered Events</h2>
                    <button className="explore-btn">Explore Events</button>
                </div>
             
            </div>
        </div>
    );
};

export default DashboardHomePage;
