// src/pages/ProfileCreate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.png';

const ProfileCreate = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();  // Initialiser useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérification des mots de passe
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Logique de création de compte ici (ex : enregistrement dans une base de données)
    // Si la création réussit :
    navigate('/user-profile');  // Redirige vers l'espace personnel
  };

  return (
    <div className="create-profile-container">
 {/* Affiche le logo ici */}
 <img src={logo} alt="Logo" className="logo" />
      <h1>Créer un compte</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default ProfileCreate;