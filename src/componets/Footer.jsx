import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Explore Hackathons</a></li>
              <li><a href="#" className="footer-link">How it Works?</a></li>
              <li><a href="#" className="footer-link">Testimonials</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#" className="footer-link">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact Information</h3>
            <p>Email: support@techsphere.org</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Address: 123 Square Avenue, City, Country</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-branding">
            <span className="footer-logo">TechSphere</span>
            <p className="footer-tagline">Where tech minds gather!</p>
          </div>
          
          <div className="footer-social">
            <a href="#" className="footer-icon"><FaYoutube /></a>
            <a href="#" className="footer-icon"><FaInstagram /></a>
            <a href="#" className="footer-icon"><FaLinkedin /></a>
            <a href="#" className="footer-icon"><FaFacebook /></a>
          </div>
        </div>

        <p className="footer-copyright">
          &copy; 2025 InnoHack. Empowering Innovators Worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;