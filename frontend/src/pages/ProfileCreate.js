import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.png';
import { useUser } from '../contexts/UserContext'; // Importer le contexte utilisateur

const ProfileCreate = () => {
  const [pseudo, setPseudo] = useState(''); // State pour le pseudo
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState({
    minLength: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  const [isFormValid, setIsFormValid] = useState(false); // State pour vérifier la validité du formulaire
  const navigate = useNavigate();
  const { setUsername } = useUser(); // Fonction pour définir le pseudo dans le contexte utilisateur

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Enregistrer le pseudo dans le contexte utilisateur
    setUsername(pseudo);

    // Redirige vers l'espace personnel
    navigate('/user-profile');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Vérifications de la validité du mot de passe
    const minLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    setPasswordValid({
      minLength,
      hasUppercase,
      hasNumber,
      hasSpecialChar,
    });

    // Vérifier si tous les critères sont respectés
    setIsFormValid(minLength && hasUppercase && hasNumber && hasSpecialChar);
  };

  return (
    <div className="create-profile-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Créer un compte</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          required
        />
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
          onChange={handlePasswordChange}
          required
        />
        <div className="password-criteria">
          <p className={passwordValid.minLength ? 'valid' : 'invalid'}>
            {passwordValid.minLength ? '✔️' : '❌'} Minimum 8 caractères
          </p>
          <p className={passwordValid.hasUppercase ? 'valid' : 'invalid'}>
            {passwordValid.hasUppercase ? '✔️' : '❌'} Une majuscule
          </p>
          <p className={passwordValid.hasNumber ? 'valid' : 'invalid'}>
            {passwordValid.hasNumber ? '✔️' : '❌'} Un chiffre
          </p>
          <p className={passwordValid.hasSpecialChar ? 'valid' : 'invalid'}>
            {passwordValid.hasSpecialChar ? '✔️' : '❌'} Un caractère spécial
          </p>
        </div>
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={!isFormValid}>
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default ProfileCreate;
