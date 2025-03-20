import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from './context/authContext';
import Navbar from './components/Navbar';
import Login from './components/LogIn';
import Signup from './components/SignUp';
import LogoWatermark from './components/LogoWatermark';
import TrailerVideo from './components/TrailerVideo';
import VideoBackground1 from './components/VideoBackground1';
import CardSection from './components/CardSection';
import Credits from './components/Credits';
import VideoBackground from './components/VideoBackground';
import Logout from './components/LogOut';
import ProtectedRoute from './components/ProtectedRoute';
import VideoSelectionTrailer from './components/VideoSectionTrailer';
import LogoWatermarkBottom from './components/LogoWatermarkBottom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Default Route - If the user is not logged in, redirect them to login */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* Protected Routes (only accessible if logged in) */}
            <Route 
              path="/home" 
              element={<ProtectedRoute><LogoWatermark /><CardSection /><Credits /><VideoBackground /></ProtectedRoute>} 
            />
            <Route 
              path="/trailer" 
              element={<ProtectedRoute><TrailerVideo /><VideoBackground1 /><VideoSelectionTrailer /><LogoWatermarkBottom /></ProtectedRoute>} 
            />

            {/* Other Routes */}
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
