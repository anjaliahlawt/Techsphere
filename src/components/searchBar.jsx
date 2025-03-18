import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const fetchFilteredEvents = async (query) => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + `/eventcard/search?search=${query}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
      const data = await response.json();
      onSearch(data); // Send filtered results to parent component
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    // Delay API call (debounce)
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
      fetchFilteredEvents(value);
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
};

export default SearchBar;
