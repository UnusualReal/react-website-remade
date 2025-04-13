import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import Signup from "./components/SignUp";
import LogoWatermark from "./components/LogoWatermark";
import TrailerVideo from "./components/TrailerVideo";
import CardSection from "./components/CardSection";
import Credits from "./components/Credits";
import VideoBackground from "./components/VideoBackground";
import Logout from "./components/LogOut";
import VideoSectionTrailer from "./components/VideoSectionTrailer";
import LogoWatermarkBottom from "./components/LogoWatermarkBottom";
import LogInBackground from "./components/LogInBackground";
import ImageBackground from "./components/ImageBackground";
import About from "./components/About";
import VideoSectionCommissions from "./components/VideoSectionCommissions";
import ContactMe from "./components/ContactMe";
import BehindTheScenes from './components/BehindTheScenes';
import ProtectedRoute from './components/ProtectedRoute';
import "./components/About.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </Router>
    </div>
  );
}

const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route
          path="/login"
          element={
            <LogInBackground>
              <LogIn />
            </LogInBackground>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <>
              <About />
              <LogoWatermark />
              <CardSection />
              <Credits />
              <VideoBackground />
            </>
          }
        />
        <Route
          path="/trailer"
          element={
            <>
              <div className="trailer-top">
                <TrailerVideo />
              </div>
              <div className="trailer-bottom">
                <VideoSectionTrailer />
                <LogoWatermarkBottom />
              </div>
            </>
          }
        />
        <Route
          path="/commissions"
          element={
            <div className="commissions-wrapper">
              <ImageBackground />
              <div className="video-section-overlay">
                <VideoSectionCommissions />
              </div>
              <LogoWatermarkBottom />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
