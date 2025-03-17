import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./signUp.module.css";

const Signup = ({ closeSignup }) => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !password) {
      setErrorMessage("⚠️ Please fill in all fields.");
      return;
    }
  
    setLoading(true);
    setErrorMessage("");
  
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await res.json();
      console.log("🔍 Signup Response:", data);
  
      if (data.status === "success") {
        await sendOtp(); // Send OTP when a new user signs up
      } else if (data.status === "info" && data.showOtpScreen) {
        alert("📧 OTP already sent. Check your email."); // Show alert
        setShowOtpInput(true); // Automatically show OTP input screen
      } else {
        setErrorMessage(data.message || "❌ Signup failed. Try again.");
      }
    } catch (error) {
      console.error("🚨 Error during signup:", error);
      setErrorMessage("⚠️ Error connecting to the server.");
    }
  
    setLoading(false);
  };
  

  const sendOtp = async () => {
    try {
      console.log("📤 Sending OTP request to:", import.meta.env.VITE_BACKEND_URL + `/otp`);
      
      const otpRes = await fetch(import.meta.env.VITE_BACKEND_URL + `/otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      // Parse response
      const otpData = await otpRes.json();
      console.log("🔍 OTP Response Data:", otpData);
  
      if (otpRes.ok && otpData.status === "success") {
        // Show OTP input screen
        setShowOtpInput(true);
        alert("✅ OTP Sent!");
      } else {
        // Backend responded with failure
        setErrorMessage(otpData.message || "❌ Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error("🚨 Error sending OTP:", error);
      setErrorMessage("⚠️ Error connecting to the server.");
    }
  };
  

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      setErrorMessage("⚠️ Please enter the OTP!");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/otp/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      console.log("🔍 OTP Verification Response:", data);

      if (data.status === "success") {
        alert("✅ OTP Verified! Signup successful.");
        closeSignup();
      } else {
        setErrorMessage("❌ Invalid OTP. Try again.");
      }
    } catch (error) {
      console.error("🚨 Error verifying OTP:", error);
      setErrorMessage("⚠️ Error connecting to the server.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.title}>{showOtpInput ? "Verify OTP" : "Create an Account"}</h2>

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      {!showOtpInput ? (
        <form onSubmit={handleSignup}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your full name" 
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Create a password" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className={styles.signupButton} 
            disabled={loading}
          >
            {loading ? "Processing..." : "Continue"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <p className={styles.otpMessage}>
            An OTP has been sent to <strong>{email}</strong>. Enter it below to verify your account.
          </p>

          <div className={styles.inputGroup}>
            <input 
              type="text" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              placeholder="Enter OTP" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className={styles.otpButton} 
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      )}
    </div>
  );
};

Signup.propTypes = {
  closeSignup: PropTypes.func.isRequired,
};

export default Signup;
