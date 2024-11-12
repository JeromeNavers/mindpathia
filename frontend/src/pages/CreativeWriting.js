import React, { useState } from 'react';
import './CreativeWriting.css';
import logo from '../assets/icons/logo.png';

const CreativeWriting = () => {
  const [entry, setEntry] = useState('');
  const [creativeEntries, setCreativeEntries] = useState([]);
  const [responses, setResponses] = useState([]);

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSaveEntry = () => {
    if (entry.trim()) {
      setCreativeEntries([...creativeEntries, entry]);

      // Simuler les réponses de l'IA
      const newResponses = [
        { type: 'psychiatric', message: "Vous semblez explorer des émotions profondes. Continuez à vous exprimer, cela peut aider à mieux comprendre vos ressentis." },
        { type: 'philosophical', message: "Votre écriture soulève des questions existentielles. Pensez à ce que cela signifie pour vous." },
        { type: 'spiritual', message: "Une belle expression de l'âme. Laissez cette énergie guider votre créativité." },
      ];

      // Ajouter les suggestions de l'IA pour explorer d'autres formes de création
      newResponses.push({
        type: 'suggestion',
        message: "Pourquoi ne pas essayer de traduire vos mots en image ou en musique ? Explorez un espace de création visuelle ou musicale pour enrichir votre expression.",
      });

      setResponses(newResponses);
      setEntry(''); // Réinitialiser l'entrée
    }
  };

  // Fonction pour retourner à la page précédente
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="creative-writing-container">
      <header>
      <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="creative-writing-box">
        <h1>Votre espace de création</h1>
        <p>Écrivez ce qui vous inspire, laissez libre cours à votre imagination.</p>

        <textarea
          value={entry}
          onChange={handleChange}
          placeholder="Laissez votre créativité s'exprimer ici..."
        />

        <button onClick={handleSaveEntry}>Soumettre votre création</button>

        <div className="creative-responses">
          {responses.map((response, index) => (
            <div key={index} className={`response ${response.type}`}>
              <p>{response.message}</p>
            </div>
          ))}
        </div>

        <div className="saved-entries">
          <h2>Vos créations :</h2>
          <ul>
            {creativeEntries.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>

      <footer>
        <button onClick={handleGoBack}>Retour</button>
      </footer>
    </div>
  );
};

export default CreativeWriting;