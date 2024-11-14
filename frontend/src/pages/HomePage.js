import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Pour utiliser les liens vers les pages de création et de connexion
import './HomePage.css';  // Importer les styles spécifiques à la page d'accueil
import logo from '../assets/icons/logo.png';

const HomePage = () => {
  const [isStarted, setIsStarted] = useState(false); // Nouveau state pour contrôler l'affichage

  // Fonction pour afficher le message après un clic
  const handleStart = () => {
    setIsStarted(true); // Change l'état pour afficher le message
  };

  return (
    <div className="home-container">
      {/* Afficher le logo avant le clic */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Modifier le message d'accueil pour quelque chose de plus serein */}
      <h1>Bienvenue sur le chemin de la sérénité</h1>
      <p>Un moment pour vous. Explorez votre bien-être intérieur et laissez-vous guider.</p>
      
      {/* Afficher le bouton seulement si le message n'est pas encore visible */}
      {!isStarted && (
        <button onClick={handleStart}>Commencer</button>
      )}

      {/* Afficher le message seulement après un clic */}
      {isStarted && (
        <div className="welcome-message">
          <h2>Prêt à commencer ?</h2>
          <p>Votre voyage intérieur commence ici. Laissez la paix et l'équilibre s'installer dans votre esprit.</p>
          
          {/* Modifier le lien pour correspondre à la route correcte */}
          <div className="auth-buttons">
            <Link to="/create-account"><button>Créer un compte</button></Link>
            <Link to="/login"><button>Se connecter</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
