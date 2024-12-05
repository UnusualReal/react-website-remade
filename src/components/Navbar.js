import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/channel/UCeqa1_KroAIXJC9l13UtG8g">YouTube</a>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">Trailer</Link>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/test">Trailer</Link>
                  <Link className="dropdown-item" to="/">Commissions</Link>
                  <Link className="dropdown-item" to="/">About me</Link>
                  <Link className="dropdown-item" to="/">Tutorials</Link>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Contact me.html">Contact me</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Shopping cart <i className="bi bi-cart4"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
