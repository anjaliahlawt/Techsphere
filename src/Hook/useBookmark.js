import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useBookmarks = () => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set());
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

  // Fetch bookmarked events when userId is available
  useEffect(() => {
    if (!userId) return;

    const fetchBookmarks = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/bookmarks/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setBookmarkedEvents(new Set(data.bookmarks || []));
        } else {
          toast.error(data.message || "Failed to fetch bookmarks.");
        }
      } catch (error) {
        console.error("Error fetching bookmarked events:", error);
        toast.error("Something went wrong while fetching bookmarks.");
      }
    };

    fetchBookmarks();
  }, [userId]);

  // Function to toggle bookmark
  const toggleBookmark = async (eventId) => {
    if (!userId) {
      toast.error("Please log in to bookmark events.", { toastId: "login-error" });
      return;
    }
  
    const isBookmarked = bookmarkedEvents.has(eventId); // Check if already bookmarked
  
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + `/auth/bookmark/${userId}/${eventId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        setBookmarkedEvents((prev) => {
          const updatedBookmarks = new Set(prev); // Create a new Set to trigger state change
          if (isBookmarked) {
            updatedBookmarks.delete(eventId); // Remove if already bookmarked
            toast.success("Bookmark removed! ❌", { toastId: eventId });
          } else {
            updatedBookmarks.add(eventId); // Add if not bookmarked
            toast.success("Bookmarked successfully! ✅", { toastId: eventId });
          }
          return updatedBookmarks;
        });
      } else {
        toast.error(data.message || "Failed to update bookmark.", { toastId: "bookmark-error" });
      }
    } catch (error) {
      console.error("Error updating bookmark:", error);
      toast.error("Something went wrong!", { toastId: "bookmark-failure" });
    }
  };
  
  
  
  
  return { bookmarkedEvents, toggleBookmark, userId };
};

export default useBookmarks;
