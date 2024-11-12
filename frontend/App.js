import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')  // Appel vers l'API backend
      .then(response => response.json())
      .then(data => setMessage(data.message));  // Met à jour l'état avec le message de l'API
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;