
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signUp.module.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = async (e) => {
    e.preventDefault(); 
  
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }
  
    try {
   
      const signupRes = await fetch("https://backendtechsphere.onrender.com//auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const signupData = await signupRes.json();
    
  
      if (!signupRes.ok || signupData.status !== "success") {
        alert(signupData.message || "Signup failed. Try again.");
        return;
      }
  
  
      const otpRes = await fetch("http://localhost:3002/otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
  
      const otpData = await otpRes.json();
      
  
      if (otpRes.ok && otpData.status === "success") {
        alert("✅ OTP sent to your email!");
        navigate("/verify-otp", { state: { email: formData.email } });
      } else {
        alert(otpData.message || "Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Network error. Try again.");
    }
  };
  
  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.title}>Signup</h2>
      <form className={styles.form} onSubmit={handleContinue}>
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} className={styles.input} required />
        <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} className={styles.input} required />
        <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} className={styles.input} required />
        <button type="submit" className={styles.button}>Continue</button>
      </form>
    </div>
  );
};

export default Signup;
