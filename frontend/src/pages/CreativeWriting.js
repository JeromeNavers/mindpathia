import React, { useState, useEffect } from 'react';
import './CreativeWriting.css';
import logo from '../assets/icons/logo.png';
import { useNaya } from '../contexts/NayaContext'; // Utilisation du contexte Naya
import { useUser } from '../contexts/UserContext'; // Utilisation du contexte utilisateur

const CreativeWriting = () => {
  const [entry, setEntry] = useState('');
  const [responses, setResponses] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { nayaMessage, setNayaMessage } = useNaya(); // Utilisation de setNayaMessage
  const { username } = useUser(); // Récupération du pseudo de l'utilisateur

  useEffect(() => {
    // Mettre à jour le message de Naya au début de la page avec le pseudo de l'utilisateur
    setNayaMessage(`Bienvenue dans votre espace créatif, ${username} ! Je suis Naya, et je vais vous accompagner dans ce voyage créatif.`);
  }, [setNayaMessage, username]);

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSaveEntry = () => {
    if (entry.trim()) {
      setIsGenerating(true); // Démarrer la génération de la réponse

      // Simuler les réponses de Naya
      const newResponses = [
        { type: 'naya', message: "C'est une belle exploration de vos émotions. Prenez le temps de réfléchir à ce que vous ressentez." },
        { type: 'neutral', message: "J'ai l'impression que vous commencez à toucher quelque chose de profond. Comment cela vous fait-il sentir ?" },
        { type: 'neutral', message: "C'est une belle réflexion, peut-être que vous pourriez explorer ce que cela signifie pour vous au niveau personnel." },
        { type: 'neutral', message: "Peut-être souhaitez-vous explorer cette idée plus en profondeur, ou bien essayer de l'exprimer autrement ?" },
      ];

      setResponses(newResponses);
      setEntry('');
      
      setTimeout(() => {
        setIsGenerating(false); // Arrêter l'animation après 2 secondes
      }, 2000);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="creative-writing-container">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Afficher le message de Naya */}
      <div className="naya-message">
        <p>{nayaMessage}</p>
      </div>

      <div className="creative-writing-box">
        <h1>Votre espace de création</h1>
        <p>Écrivez ce qui vous inspire, laissez libre cours à votre imagination.</p>

        <div className="creative-responses">
          {responses.map((response, index) => (
            <div key={index} className={`response ${response.type}`}>
              <p>
                {response.type === 'naya' ? <strong>Naya:</strong> : null} {response.message}
              </p>
            </div>
          ))}
        </div>

        <div className={`input-section ${isGenerating ? 'generating' : ''}`}>
          <textarea
            value={entry}
            onChange={handleChange}
            placeholder="Laissez votre créativité s'exprimer ici..."
          />
          <button
            className="send-button"
            onClick={handleSaveEntry}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <div className="spinner"></div>
            ) : (
              <span className="arrow">↑</span> 
            )}
          </button>
        </div>
      </div>

      <footer>
        <button onClick={handleGoBack}>Retour</button>
      </footer>
    </div>
  );
};

export default CreativeWriting;
