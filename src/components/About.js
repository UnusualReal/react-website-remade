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
            <h1>Здравейте, Аз съм <span className="highlight">Георги </span>Минчев</h1>
            <h3>Креативен разработчик и Видео обработващ</h3>
            <p>
            Създавам реалистични анимации с коли и игри, уебсайтове и креативно дигитално съдържание.
            Това портфолио е моят дигитален гараж — мястото, където страстта ми среща дизайна.
            </p>
            <a href="/Commissions" className="about-btn">Виж моята работа</a>
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
