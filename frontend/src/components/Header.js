import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/icons/logo.png'; // Chemin relatif de l'image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu clicked!');
  };

  return (
    <header className="header">
      {/* Logo */}
      <img 
        src={logo} // Utilise la variable importée pour l'image
        alt="Logo" 
        className="logo" 
      />

      <nav>
        {/* Bouton de retour */}
        <button 
          className="back-button" 
          onClick={() => window.history.back()}
        >
          ← Retour
        </button>

        {/* Menu hamburger */}
        <div className="menu-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Affichage du menu déroulant si ouvert */}
        {isMenuOpen && (
          <div className="menu-dropdown">
            <a href="/">Accueil</a>
            <a href="/profile">Profil</a>
            <a href="/help">Aide</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;