import { useState } from "react";
import "./menuBar.css";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { id: 1, name: "Registered Events", icon: "/Icons Library.png" },
    { id: 2, name: "Saved Events", icon: "/Icons Library (1).png" },
    { id: 3, name: "Past Events", icon: "/Vector.png" },
  ];

  return (
    <div className="menu-bar">
      <img className="logo" src="/src/assets/Frame 21340.png" alt="Logo" />

      {/* Menu items list */}
      <div className="menu-list">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${activeItem === item.id ? "active" : ""}`}
            onClick={() => setActiveItem(item.id)}
          >
            <img src={item.icon} alt={item.name} />
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>

      <button className="logout-btn">
        <img src="/Vector (1).png" alt="Logout Icon" />
        Log Out
      </button>
    </div>
  );
};

export default MenuBar;
