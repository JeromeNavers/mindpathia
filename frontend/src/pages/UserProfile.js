import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';
import logo from '../assets/icons/logo.png';
import BlackButton from '../components/utils/BlackButton'; // Importation du bouton personnalisé

const UserProfile = () => {
  const navigate = useNavigate();

  const handleNavigateJournal = () => {
    navigate('/personal-journal');
  };

  const handleNavigateCreative = () => {
    navigate('/creative-writing');
  };

  return (
    <div className="user-profile-container">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="philosophy-section">
        <h1>Bienvenue sur MindPath.IA</h1>
        <p>
          Sur MindPath.IA, nous vous offrons un espace où vous pouvez explorer vos émotions et votre bien-être
          dans un cadre sécurisé et sans jugement. C'est un endroit où vous pouvez prendre du recul et réfléchir à vos
          pensées et vos sentiments, que ce soit de manière privée ou en interaction avec notre IA, qui vous accompagne
          en fonction de vos besoins.
        </p>
        <p>
          L'expérience est avant tout centrée sur vous. Vous pouvez choisir de vous exprimer dans un espace privé, où
          vous avez la liberté d'écrire librement vos pensées. Si vous préférez un accompagnement plus interactif, vous
          pouvez également échanger avec notre IA, qui vous proposera des pistes de réflexion personnalisées.
        </p>
        <p>
          Vous pouvez approfondir votre cheminement personnel dans deux espaces créatifs : un pour générer des images à
          partir de vos idées et un autre pour explorer des créations musicales en résonance avec vos états émotionnels.
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