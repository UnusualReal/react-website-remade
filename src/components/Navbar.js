import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import { useAuthContext } from '../context/authContext';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuthContext();

  const getCleanUsername = () => {
    if (!user) return '';
    if (typeof user.username === 'string') return user.username;
    if (typeof user.username === 'object') return user.username.username;
    return '';
  };

  const username = getCleanUsername();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <motion.ul
              key={location.pathname}
              className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.li className="nav-item" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                <Link className="nav-link" to="/home">Начало</Link>
              </motion.li>
              <motion.li className="nav-item" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <a className="nav-link" href="https://www.youtube.com/channel/UCeqa1_KroAIXJC9l13UtG8g" target="_blank" rel="noreferrer">YouTube</a>
              </motion.li>
              <motion.li className="nav-item dropdown" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">
                  Menu
                </Link>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/trailer">Трейлър</Link>
                  <Link className="dropdown-item" to="/commissions">Платени анимации</Link>
                </ul>
              </motion.li>

              <motion.li className="nav-item" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <Link className='nav-link' to="/contact">Свържи се с мен</Link>
              </motion.li>

              {user && (
                <motion.li className="nav-item" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                  <Link className='nav-link' to="/behind-the-scenes">Анимации</Link>
                </motion.li>
              )}

              {user ? (
                <>
                  <motion.li className="nav-item profile-container" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
                    <div className="nav-link profile-icon-wrapper">
                      <i className="bi bi-person-circle profile-icon"></i>
                      <div className="profile-info-box">
                        <strong>Потребителско име:</strong> {username}
                      </div>
                    </div>
                  </motion.li>
                  <motion.li className="nav-item" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.75 }}>
                    <Link className="nav-link" to="/logout">Изход</Link>
                  </motion.li>
                </>
              ) : (
                <>
                  <motion.li className="nav-item" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
                    <Link className="nav-link" to="/login">Вход</Link>
                  </motion.li>
                  <motion.li className="nav-item" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.75 }}>
                    <Link className="nav-link" to="/signup">Регистрация</Link>
                  </motion.li>
                </>
              )}
            </motion.ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
