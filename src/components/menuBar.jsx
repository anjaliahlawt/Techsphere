import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./menuBar.module.css"; // Import CSS
const MenuBar = ({ setActiveTab }) => {  // ✅ Accept setActiveTab as prop
  const [activeItem, setActiveItem] = useState("registered");

  const menuItems = [
    { id: "registered", name: "Registered Events", icon: "/Icons Library.png" },
    { id: "saved", name: "Saved Events", icon: "/Icons Library (1).png" },
    { id: "past", name: "Past Events", icon: "/Vector.png" },
  ];

  return (
    <div className={styles.menuBar}>
      <img className={styles.logo} src="/src/assets/logo.svg" alt="Logo" />

      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.menuItem} ${
              activeItem === item.id ? styles.active : ""
            }`}
            onClick={() => {
              setActiveItem(item.id);
              setActiveTab(item.id);  // ✅ Use setActiveTab to change tab
            }}
          >
            <img src={item.icon} alt={item.name} />
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>

      <button className={styles.logoutBtn}>
        <img src="/Vector (1).png" alt="Logout Icon" />
        Log Out
      </button>
    </div>
  );
};
MenuBar.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default MenuBar;

