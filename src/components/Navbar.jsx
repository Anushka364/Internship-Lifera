import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Brand */}
        <div className="navbar-logo">
          <Link to="/">Lifera</Link>
        </div>

        {/* Menu Items */}
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/events">Events / Campus</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/donate">Donate Blood</Link>
          </li>
          <li>
            <Link to="/find">Find Blood</Link>
          </li>
          {/* <li>
            <Link to="/more">More ▼</Link>
          </li> */}
        </ul>

        {/* Login Button */}
        <div className="navbar-button">
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
