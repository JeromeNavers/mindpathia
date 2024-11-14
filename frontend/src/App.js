import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './components/Footer.css';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import HomePage from './pages/HomePage';
import ProfileCreate from './pages/ProfileCreate';
import ProfileLogin from './pages/ProfileLogin';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import PersonalJournal from './pages/PersonalJournal';
import CreativeWriting from './pages/CreativeWriting';
import ForgotPassword from './pages/ForgotPassword';
import { NayaProvider } from './contexts/NayaContext';  // Import du contexte
import { UserProvider } from './contexts/UserContext'; // Importer le contexte utilisateur

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <NayaProvider> {/* Enveloppez l'application avec NayaProvider */}
     <UserProvider> {/* Enveloppez aussi avec UserProvider */}
      <Router>
        <div className="App">
          <HamburgerMenu isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-account" element={<ProfileCreate />} />
            <Route path="/login" element={<ProfileLogin onLogin={handleLogin} />} />
            <Route path="/user-profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/personal-journal" element={isAuthenticated ? <PersonalJournal /> : <Navigate to="/login" />} />
            <Route path="/creative-writing" element={isAuthenticated ? <CreativeWriting /> : <Navigate to="/login" />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <footer className="footer">
            <ul className="footer-links">
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/legal">Mentions légales</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </footer>
        </div>
      </Router>
      </UserProvider>
    </NayaProvider>
  );
};

export default App;
