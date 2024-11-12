// BlackButton.js
import React from 'react';
import './BlackButton.css';

const BlackButton = ({ onClick, children }) => {
  return (
    <button className="black-button" onClick={onClick}>
      {children}  {/* Utilise le texte passé via props */}
    </button>
  );
};

export default BlackButton;