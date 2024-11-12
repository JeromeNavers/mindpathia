// src/pages/ProfileLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Utiliser useNavigate pour la redirection
import logo from '../assets/icons/logo.png';

const ProfileLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialiser useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Effectuer la logique de connexion ici
    // Si la connexion réussit :
    onLogin();  // Met à jour l'état d'authentification
    navigate('/user-profile');  // Redirige vers l'espace personnel
  };

  return (
    <div className="login-container">
 {/* Affiche le logo ici */}
 <img src={logo} alt="Logo" className="logo" />
      <h1>Se connecter</h1>
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
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default ProfileLogin;