import { useState } from "react";
import styles from "./menuBar.module.css";  // Import styles from the module

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { id: 1, name: "Registered Events", icon: "/Icons Library.png" },
    { id: 2, name: "Saved Events", icon: "/Icons Library (1).png" },
    { id: 3, name: "Past Events", icon: "/Vector.png" },
  ];

  return (
    <div className={styles.menuBar}>
      <img className={styles.logo} src="/src/assets/logo.svg" alt="Logo" />

      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.menuItem} ${activeItem === item.id ? styles.active : ""}`}
            onClick={() => setActiveItem(item.id)}
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

export default MenuBar;
