// importation des modules nécessaires
import React, { createContext, useState, useContext } from 'react';

// Créer le contexte Naya
const NayaContext = createContext();

// Hook personnalisé pour accéder au contexte de Naya
export const useNaya = () => useContext(NayaContext);

export const NayaProvider = ({ children }) => {
  const [isNayaIntroVisible, setNayaIntroVisible] = useState(true);
  const [nayaMessage, setNayaMessage] = useState("Bonjour, je suis Naya, votre guide et compagne virtuelle. Comment puis-je vous aider aujourd'hui ?");

  // Fonction pour masquer l'introduction de Naya
  const hideNayaIntro = () => setNayaIntroVisible(false);

  return (
    <NayaContext.Provider value={{ isNayaIntroVisible, nayaMessage, hideNayaIntro, setNayaMessage }}>
      {children}
    </NayaContext.Provider>
  );
};
