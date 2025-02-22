import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  if (!email) {
    alert("Email is missing. Please sign up again.");
    navigate("/signup");
    return null;
  }

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP!");
      return;
    }
  
    try {
      const res = await fetch("https://backendtechsphere.onrender.com/otp/verify", {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
  
      const data = await res.json(); 
      console.log("🔍 Backend Response:", data); 
  
      if (data.status === "success") {
        alert("✅ OTP Verified Successfully!");
        navigate("/login"); 
      } else {
        alert("❌ Invalid OTP. Try again.");
      }
    } catch (error) {
      console.error("🚨 Error verifying OTP:", error);
      alert("⚠️ Error connecting to the server. Try again.");
    }
  };
  
  return (
    <div>
      <h2>Verify OTP</h2>
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
};

export default VerifyOtp;
