import React from 'react';
import { motion } from 'framer-motion';
import './Credits.css';

const Credits = () => {
  return (
    <motion.div
      className="credits-section"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
    >

      <motion.h3
        className="credits-title"
        variants={{
          hidden: { opacity: 0, letterSpacing: "0.5em", scale: 1.2 },
          visible: {
            opacity: 1,
            letterSpacing: "normal",
            scale: 1,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
      >
        Built With:
      </motion.h3>

      <div className="credits-logos">
        {[
          { src: "imgs/credits_imgs/logo192.png", label: "React" },
          { src: "imgs/credits_imgs/bootstrap.png", label: "Bootstrap" },
          { src: "imgs/credits_imgs/nodejs.png", label: "Node.js" },
          { src: "imgs/credits_imgs/aftereffects.png", label: "After Effects" },
          { src: "imgs/credits_imgs/framer-motion.png", label: "Framer Motion" }
        ].map((tech, index) => (
          <motion.div
            key={index}
            className="credit-item"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.15 }}
          >
            <img src={tech.src} alt={tech.label} />
            <span>{tech.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Credits;
