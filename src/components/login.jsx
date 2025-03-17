import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const res = await fetch(import.meta.env.VITE_BACKEND_URL+`/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await res.json();

    if (data.status === "success") {
      alert("Login successful!");
 
      fetchProfile();
    } else {
      alert("Invalid credentials!");
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL+`/auth/profile`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",  
      });

      const data = await res.json();
      if (res.ok && data.userId) {
        console.log("User ID:", data.userId);
      }
      console.log("Profile Response:", data);
      
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  return (
    <div>
     
      <form onSubmit={handleLogin}> 
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button> 
      </form>
    </div>
  );
};


export default Login;
