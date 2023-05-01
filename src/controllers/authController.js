const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Fonction du contrôleur pour l'authentification
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Vérifiez les informations d'identification de l'utilisateur

    // Si les informations sont valides, générer un token JWT
    const token = jwt.sign({ username }, 'secret_key');
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'authentification.' });
  }
};
