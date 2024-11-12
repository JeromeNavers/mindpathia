import React, { useState } from "react";
import { Link } from "react-router-dom"; // Pour utiliser les liens de navigation
import './HamburgerMenu.css';  // Import du fichier CSS

const HamburgerMenu = ({ isAuthenticated, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false); // Etat pour afficher ou masquer le menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        &#9776;
      </button>
      {isOpen && (
        <div className="menu">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            {!isAuthenticated && (
              <>
                <li><Link to="/create-account">Créer un compte</Link></li>
                <li><Link to="/login">Se connecter</Link></li>
              </>
            )}
            {isAuthenticated && (
              <>
                <li><Link to="/user-profile">Espace Personnel</Link></li>
                <li><Link to="/personal-journal">Journal Personnel</Link></li>
                <li><Link to="/creative-writing">Création Écrite</Link></li>
                <li><button onClick={handleLogout}>Se déconnecter</button></li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;