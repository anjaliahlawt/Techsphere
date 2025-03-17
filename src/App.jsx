import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import './app.css';
import Homepage from './pages/Homepage';
import Registration from './components/registrationPopUp.jsx';
import Nonloginpage from './pages/nonLoginPage.jsx';
import Dashboard from './pages/dashboardHomePage.jsx';
import DetailPage from "./pages/detailpage";
import Signup from './components/signUp.jsx';
import Login from './components/login.jsx';


const App = () => {
    const [eventdata, setEventdata] = useState([]);
    
    

    const getEventdata = async () => {
        try {
            console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);

            const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/eventcard", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            
                credentials: "include" 
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const resObj = await res.json();
            setEventdata(resObj.data);
            console.log(resObj.data);
        } catch (error) {
            console.error("Error fetching eventdata:", error);
        }
    };

    useEffect(() => {
        getEventdata();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage eventdata={eventdata} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/detail-page" element={<DetailPage />} />
                <Route path="/nonlogin" element={<Nonloginpage/>} />
                <Route path="/register" element={<Registration />} />
                <Route path="/dashboard" element={<Dashboard />} />
               
            </Routes>
        </BrowserRouter>
    );
};

export default App;
