import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "../LandingComponents/Navbar.module.css";
import Logo from "/src/assets/logo.svg";
import Login from "../login.jsx"; 
import Signup from "../signUp.jsx"; 
import SearchBar from "../searchBar.jsx";

const Navbar = ({onSearch}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.searchContainer}>
        <SearchBar onSearch={onSearch} />
        </div>
        <div className={styles.buttons}>
          <button className={styles.loginButton} onClick={() => setShowLogin(true)}>Log In</button>
          <button className={styles.signupButton} onClick={() => setShowSignup(true)}>SignUp</button>
        </div>
      </nav>

      {/* 🔹 Login Popup */}
      {showLogin && (
        <div className={styles.popupOverlay} onClick={() => setShowLogin(false)}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowLogin(false)}>✖</button>
            <h2 className={styles.popupTitle}>Login</h2>
            <Login />
          </div>
        </div>
      )}

      {/* 🔹 Sign-Up Popup */}
      {showSignup && (
        <div className={styles.popupOverlay} onClick={() => setShowSignup(false)}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowSignup(false)}>✖</button>
            <h2 className={styles.popupTitle}>Sign Up</h2>
            <Signup closeSignup={() => setShowSignup(false)} />
          </div>
        </div>
      )}
    </>
  );
};
Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;

