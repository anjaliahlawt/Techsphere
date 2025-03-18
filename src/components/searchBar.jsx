import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSearch, filter }) => {
  const [searchValue, setSearchValue] = useState("");

  const fetchFilteredEvents = async (query, activeFilter) => {
    console.log("Sending request with search:", query, "and filter:", activeFilter);

    try {
      let url = `${import.meta.env.VITE_BACKEND_URL}/eventcard/search?search=${query}`;
      
      if (activeFilter) {
          url += `&filter=${activeFilter}`;
      }
      console.log("Final URL:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await response.json();
      
      if (Array.isArray(data)) {
        onSearch(query); // Only update search text, don't pass objects
      } else {
        console.error("Invalid response format from server:", data);
      }

    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.trim();
    setSearchValue(value);

    // Delay API call (debounce)
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
      fetchFilteredEvents(value, filter);
    }, 500);
  };

  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Search events..."
      value={searchValue}
      onChange={handleSearchChange}
    />
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default SearchBar;
