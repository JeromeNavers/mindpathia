import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNaya } from '../contexts/NayaContext'; // Importer le contexte Naya
import { useUser } from '../contexts/UserContext'; // Importer le contexte utilisateur
import './UserProfile.css';
import logo from '../assets/icons/logo.png';
import BlackButton from '../components/utils/BlackButton'; // Importation du bouton personnalisé

const UserProfile = () => {
  const navigate = useNavigate();
  const { nayaMessage, setNayaMessage } = useNaya(); // Utilisation de NayaContext
  const { username } = useUser(); // Récupérer le pseudo de l'utilisateur

  const handleNavigateJournal = () => {
    navigate('/personal-journal');
  };

  const handleNavigateCreative = () => {
    navigate('/creative-writing');
  };

  useEffect(() => {
    // Mettre à jour le message de Naya au chargement de la page, avec le pseudo de l'utilisateur
    setNayaMessage(`Bonjour ${username}, bienvenue dans ton espace personnel ! Je suis Naya, ton guide virtuel.`);
  }, [setNayaMessage, username]);

  return (
    <div className="user-profile-container">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Afficher le message de Naya */}
      <div className="naya-message">
        <p>{nayaMessage}</p>  {/* Le message personnalisé de Naya */}
      </div>

      <div className="philosophy-section">
        <h1>Bienvenue dans votre espace MindPath</h1>
        <p>
          Bonjour ! Je suis Naya, votre guide dans cet espace dédié à votre bien-être. Ici, 
          vous pouvez explorer vos pensées, vos émotions, et même découvrir des outils créatifs
          qui vous aident à mieux comprendre votre intérieur. 
          Tout est conçu pour vous offrir un environnement sûr, calme, et sans jugement.
          Vous avez toute la liberté de vous exprimer comme vous le souhaitez, en toute confidentialité.
        </p>
        <p>
          Que vous choisissiez d'écrire dans votre journal personnel, de vous exprimer à travers l'écriture créative, 
          ou simplement de réfléchir à vos émotions, chaque espace a été pensé pour vous soutenir dans votre cheminement.
          Si vous avez des questions, ou si vous avez simplement besoin d'un peu de réconfort ou de réflexion,
          je serai là pour vous guider à chaque étape.
        </p>
        <p>
          N'oubliez pas : cet espace est pour vous. Prenez tout le temps dont vous avez besoin.
          Vous êtes ici comme chez vous, et nous avancerons ensemble à votre rythme.
        </p>
      </div>

      {/* Boutons de navigation avec le bouton personnalisé */}
      <div className="navigation-buttons">
        <BlackButton onClick={handleNavigateJournal}>Accéder au Journal Personnel</BlackButton>
        <BlackButton onClick={handleNavigateCreative}>Accéder aux Créations Écrites</BlackButton>
      </div>
    </div>
  );
};

export default UserProfile;
