// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
        <img className='navbar-logo' src='/assets/logo7.png' />
          <Link to="/">
            Employee Registration
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Create Employee</Link>
          <Link to="/list">View Employee</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
