import React from "react";
import "./App.css";
import VideoBackground from "./components/VideoBackground";
import Navbar from "./components/Navbar";
import LogoWatermark from "./components/LogoWatermark";
import CardSection from "./components/CardSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VideoBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<> <LogoWatermark /> <CardSection /></>}
          />
          <Route path="/test" element={<CardSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
