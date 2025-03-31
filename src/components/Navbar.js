import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); // 🔁 Detect route changes

  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <motion.ul
              key={location.pathname}
              className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.li
                className="nav-item"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Link className="nav-link" to="/home">Home</Link>
              </motion.li>

              <motion.li
                className="nav-item"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a className="nav-link" href="https://www.youtube.com/channel/UCeqa1_KroAIXJC9l13UtG8g" target="_blank" rel="noreferrer">YouTube</a>
              </motion.li>

              <motion.li
                className="nav-item dropdown"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/"
                >
                  Menu
                </Link>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/trailer">Trailer</Link>
                  <Link className="dropdown-item" to="/commissions">Commissions</Link>
                  <Link className="dropdown-item" to="/">Tutorials</Link>
                </ul>
              </motion.li>

              <motion.li
                className="nav-item"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a className="nav-link" href="Contact me.html">Contact me</a>
              </motion.li>

              <motion.li
                className="nav-item"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Link className="nav-link" to="/">
                  Shopping cart <i className="bi bi-cart4"></i>
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
