import React from "react";
import "./App.css";
import VideoBackground from "./components/VideoBackground";
import Navbar from "./components/Navbar";
import LogoWatermark from "./components/LogoWatermark";
import WatermarkBasic from "./components/WatermarkBasic";
import CardSection from "./components/CardSection";
import TrailerVideo from './components/TrailerVideo';
import VideoBackground1 from "./components/VideoBackground1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoSectionTrailer from "./components/VideoSectionTrailer";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="Home" element={<> <LogoWatermark/> <CardSection/> <Credits/> <VideoBackground/></>}
          />
          <Route path="Trailer" element={<> <TrailerVideo/> <VideoSectionTrailer/> <WatermarkBasic/> <VideoBackground1/></>} />

          <Route path="Commissions" element={<> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
