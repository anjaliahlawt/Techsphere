import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useDashboard = () => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [userId, setUserId] = useState(null);

  // Fetch user profile to get userId
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/auth/profile`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const data = await res.json();
        if (res.ok && data.userId) {
          setUserId(data.userId);
        } else {
          toast.error("Please log in to access bookmarks.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Something went wrong while fetching user data.");
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    // 🔹 Don't fetch if userId is null
    if (!userId) return;

    const fetchDashboardData = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/auth/dashboard/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const data = await res.json();
        console.log("Dashboard API Response:", data); 
        console.log("📌 usedashboard bookmarkedEvents in hook:", bookmarkedEvents);
        console.log("📌 Type of bookmarkedEvents in hook:", typeof bookmarkedEvents);


        if (res.ok) {
          setBookmarkedEvents(new Set(data.bookmarks || []));
          setPastEvents(data.pastEvents || []);
        } else {
          toast.error("Please log in to access the dashboard.");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast.error("Something went wrong while fetching data.");
      }
    };

    fetchDashboardData();
  }, [userId]); 

  console.log("Current userId:", userId); // Debugging


  return { bookmarkedEvents, pastEvents, userId, setBookmarkedEvents };

};

export default useDashboard;