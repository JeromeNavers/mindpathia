import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.png';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

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

    // Simuler l'envoi d'un email de réinitialisation
    alert("Un email de réinitialisation a été envoyé à " + email);

    // Optionnellement, rediriger l'utilisateur après soumission
    navigate('/login');
  };

  return (
    <div className="forgot-password">
      <h1>Mot de passe oublié</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error">{emailError}</p>}

        <button type="submit">Envoyer un lien de réinitialisation</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
