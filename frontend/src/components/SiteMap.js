import React from 'react';
import { Link } from 'react-router-dom'; // Utilisation de Link pour la navigation
import './SiteMap.css'; // Importation du CSS, placée après les autres importations

const SiteMap = () => {
  return (
    <div className="page-container">
      <h1>Plan du site</h1>
      <p>Liste des pages : Home, A propos, Contact, Mentions légales, etc...</p>
    </div>
  );
};

export default SiteMap;