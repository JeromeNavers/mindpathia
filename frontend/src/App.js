import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './components/Footer.css';  // Importer le CSS spécifique au footer
import './App.css';      // Importer les styles généraux de l'app
import HamburgerMenu from './components/HamburgerMenu'; // Import du menu hamburger
import HomePage from './pages/HomePage';
import ProfileCreate from './pages/ProfileCreate';
import ProfileLogin from './pages/ProfileLogin';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import PersonalJournal from './pages/PersonalJournal'; // Importer la page Journal Personnel
import CreativeWriting from './pages/CreativeWriting'; // Importer la page Créations Écrites

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Menu hamburger en haut à droite */}
        <HamburgerMenu isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-account" element={<ProfileCreate />} />
          <Route path="/login" element={<ProfileLogin onLogin={handleLogin} />} />
          <Route path="/user-profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
          <Route path="/personal-journal" element={isAuthenticated ? <PersonalJournal /> : <Navigate to="/login" />} />
          <Route path="/creative-writing" element={isAuthenticated ? <CreativeWriting /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Pied de page */}
        <footer className="footer">
        <ul className="footer-links">
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/legal">Mentions légales</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
};

export default App;