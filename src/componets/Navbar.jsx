
import styles from './navbar.module.css';
import Logo from '/src/assets/Frame 21340.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" className={styles.logoImage} />
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.searchBar} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.loginButton}>Log In</button>
        <button className={styles.signupButton}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;