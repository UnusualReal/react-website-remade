import React from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import Signup from "./components/SignUp"; 
import ProtectedRoute from "./components/ProtectedRoute";  
import LogoWatermark from "./components/LogoWatermark";
import TrailerVideo from "./components/TrailerVideo";
import VideoBackground1 from "./components/VideoBackground1";
import CardSection from "./components/CardSection";
import Credits from "./components/Credits";
import VideoBackground from "./components/VideoBackground";
import Logout from "./components/LogOut";
import VideoSelectionTrailer from "./components/VideoSectionTrailer";
import LogoWatermarkBottom from "./components/LogoWatermarkBottom";
import LogInBackground from "./components/LogInBackground";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AppContent /> {/* ✅ Now inside BrowserRouter, useLocation() will work */}
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

const AppContent = () => {
  const location = useLocation(); // ✅ No more error, as it's inside BrowserRouter

  // Hide Navbar on login & signup pages
  const hideNavbarRoutes = ["/login", "/signup"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<LogInBackground><LogIn /></LogInBackground>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route 
          path="/home" 
          element={<ProtectedRoute><LogoWatermark /><CardSection /><Credits /><VideoBackground /></ProtectedRoute>} 
        />
        <Route 
          path="/trailer" 
          element={<ProtectedRoute><TrailerVideo /><VideoBackground1 /><VideoSelectionTrailer /><LogoWatermarkBottom /></ProtectedRoute>} 
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
