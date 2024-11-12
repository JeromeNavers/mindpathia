const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Pour gérer les requêtes JSON

app.get('/', (req, res) => {
  res.send('API Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});