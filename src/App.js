import React from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
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
import YouTubeLibrary from "./components/VideoSectionCommissions";
import VideoSelectionTrailer from "./components/VideoSectionTrailer";
import LogoWatermarkBottom from "./components/LogoWatermarkBottom";
import LogInBackground from "./components/LogInBackground";
import ImageBackground from "./components/ImageBackground";
import About from "./components/About";
import "./components/About.css";
import "./App.css";
import VideoSectionCommissions from "./components/VideoSectionCommissions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
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
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <About />
              <LogoWatermark />
              <CardSection />
              <Credits />
              <VideoBackground />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trailer"
          element={
            <ProtectedRoute>
              <div className="trailer-top">
                <TrailerVideo />
              </div>

              <div className="trailer-bottom">
                <VideoSelectionTrailer />
                <LogoWatermarkBottom />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/commissions"
          element={
            <ProtectedRoute>
              <div className="commissions-wrapper">
                <ImageBackground />
                <div className="video-section-overlay">
                  <VideoSectionCommissions />
                </div>
                <LogoWatermarkBottom />
              </div>{" "}
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
