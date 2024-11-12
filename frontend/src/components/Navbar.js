import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MindPath.IA</h1>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;