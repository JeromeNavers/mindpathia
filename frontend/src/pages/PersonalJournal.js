import React, { useState, useEffect } from 'react';
import './PersonalJournal.css';
import logo from '../assets/icons/logo.png';
import { useNaya } from '../contexts/NayaContext'; // Utilisation du contexte Naya
import { useUser } from '../contexts/UserContext'; // Utilisation du contexte utilisateur

const PersonalJournal = () => {
  const [entry, setEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { nayaMessage, setNayaMessage } = useNaya(); // Utilisation du contexte de Naya
  const { username } = useUser(); // Récupération du pseudo de l'utilisateur

  // Mise à jour du message de Naya au chargement de la page
  useEffect(() => {
    setNayaMessage(`Bonjour ${username}, si à tout moment vous avez besoin d'aide ou souhaitez poser une question, il vous suffit d'écrire "Naya, j'ai une question", et je serai là pour vous accompagner. N'hésitez pas à prendre tout le temps qu'il vous faut, cet espace est totalement à vous.`);
  }, [setNayaMessage, username]);

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSaveEntry = () => {
    if (entry.trim()) {
      setShowConfirmation(true);
    }
  };

  const confirmSaveEntry = () => {
    setJournalEntries([...journalEntries, entry]);
    setEntry('');
    setShowConfirmation(false);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="journal-container">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="journal-box">
        <h1>Bienvenue dans votre espace de réflexion, {username} !</h1>
        <p>Prenez votre temps pour explorer vos pensées, vos émotions et ce que vous ressentez.</p>

        {/* Affichage du message de Naya */}
        {nayaMessage && (
          <div className="naya-message">
            <p>{nayaMessage}</p>
          </div>
        )}

        <textarea
          value={entry}
          onChange={handleChange}
          placeholder="Qu'est-ce qui occupe votre esprit aujourd'hui ?"
        />

        <button className="save-button" onClick={handleSaveEntry}>Sauvegarder votre pensée</button>

        {showConfirmation && (
          <div className="confirmation-dialog">
            <p>Voulez-vous vraiment sauvegarder cette pensée ?</p>
            <button className="confirm-button" onClick={confirmSaveEntry}>Oui</button>
            <button className="cancel-button" onClick={() => setShowConfirmation(false)}>Non</button>
          </div>
        )}

        <div className="saved-entries">
          <h2>Vos écrits :</h2>
          <ul>
            {journalEntries.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>

      <footer>
        <button className="back-button" onClick={handleGoBack}>Retour</button>
      </footer>
    </div>
  );
};

export default PersonalJournal;
