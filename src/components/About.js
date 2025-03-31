import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-section">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Hello, I’m <span className="highlight">Georgi </span>Minchev</h1>
            <h3>Creative Developer & Video Editor</h3>
            <p>
              I build cinematic car and game animations, websites, and creative digital content.  
              This portfolio is my digital garage — where my passion meets design.
            </p>
            <a href="/Commissions" className="about-btn">Check My Work</a>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img src="/imgs/profile.png" alt="profile" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
