import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assure-toi d'importer useNavigate
import logo from '../assets/icons/logo.png';

const ProfileLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();  // Initialiser useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation de l'email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
      setEmailError("Veuillez entrer un email valide.");
      return;
    } else {
      setEmailError('');
    }

    // Vérification du mot de passe
    if (password.length < 8) {
      setPasswordError('Le mot de passe doit comporter au moins 8 caractères.');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('Le mot de passe doit contenir au moins une majuscule.');
      return;
    } else if (!/\d/.test(password)) {
      setPasswordError('Le mot de passe doit contenir au moins un chiffre.');
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError('Le mot de passe doit contenir un caractère spécial.');
      return;
    } else {
      setPasswordError('');
    }

    // Effectuer la logique de connexion ici
    // Si la connexion réussit :
    onLogin();  // Met à jour l'état d'authentification
    navigate('/user-profile');  // Redirige vers l'espace personnel
  };

  // Fonction pour rediriger vers la page de création de profil
  const handleCreateProfile = () => {
    navigate('/create-account');  // Redirige vers la page de création de compte
  };

  // Fonction pour rediriger vers la page "Mot de passe oublié"
  const handleForgotPassword = () => {
    navigate('/forgot-password');  // Redirige vers la page de mot de passe oublié
  };

  return (
    <div className="profile-login">
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
        {emailError && <p className="error">{emailError}</p>}

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordError && <p className="error">{passwordError}</p>}

        <button type="submit">Se connecter</button>
      </form>

      {/* Lien pour rediriger vers la page de création de profil */}
      <p>
        Pas encore de compte ?{' '}
        <span onClick={handleCreateProfile} style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
          Créer un compte
        </span>
      </p>

      {/* Lien pour la récupération du mot de passe */}
      <p>
        <span onClick={handleForgotPassword} style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
          Mot de passe oublié ?
        </span>
      </p>
    </div>
  );
};

export default ProfileLogin;
