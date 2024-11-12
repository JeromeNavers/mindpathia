import React from 'react';
import { Link } from 'react-router-dom'; // Utilisation de Link pour la navigation
import './Footer.css'; // Importation du CSS, placée après les autres importations

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 MindPath.IA | Tous droits réservés</p>
      <ul>
        <li><a href="/about">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/legal">Mentions légales</a></li>
        <li><a href="/profile">Profil</a></li>
      </ul>
    </footer>
  );
};

export default Footer; // Assure-toi d'utiliser export default