import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null); 
  const [isEditing, setIsEditing] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Charger les données du profil depuis le localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('userProfile');
    if (storedData) {
      const data = JSON.parse(storedData);
      setUserData(data);
      setFormData(data);  // Mettre à jour le formulaire avec les données existantes
    }
  }, []);

  // Gérer la modification des données du profil
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(formData)); // Sauvegarder dans localStorage
    setUserData(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userProfile');  // Supprimer le profil lors de la déconnexion
    setUserData(null);  // Réinitialiser les données utilisateur
  };

  if (!userData) {
    return <div>Chargement du profil...</div>;  // Ou rediriger vers une page de création de profil
  }

  return (
    <div className="profile-container">
      <h2>Profil de l'utilisateur</h2>
      <div>
        <p><strong>Nom :</strong> {userData.name}</p>
        <p><strong>Email :</strong> {userData.email}</p>

        {isEditing ? (
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <button onClick={handleSave}>Sauvegarder</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>Modifier Profil</button>
        )}
      </div>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
};

export default Profile;