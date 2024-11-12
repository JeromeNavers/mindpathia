import React, { useState } from 'react';
import './PersonalJournal.css'; // Assurez-vous que le CSS est bien importé
import logo from '../assets/icons/logo.png';

const PersonalJournal = () => {
  const [entry, setEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSaveEntry = () => {
    if (entry.trim()) {
      setJournalEntries([...journalEntries, entry]);
      setEntry(''); // Effacer l'entrée après sauvegarde
    }
  };

  // Fonction pour retourner à la page précédente
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="journal-container">
      <header>
      <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="journal-box">
        <h1>Votre espace de réflexion</h1>
        <p>Écrivez vos pensées, vos émotions, ou ce qui vous traverse l'esprit. C'est un espace pour vous.</p>

        <textarea
          value={entry}
          onChange={handleChange}
          placeholder="Qu'est-ce qui occupe votre esprit aujourd'hui ?"
        />

        <button className="save-button" onClick={handleSaveEntry}>Sauvegarder votre pensée</button>

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