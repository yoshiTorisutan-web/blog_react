const Comment = require('../models/commentModel');

// Fonctions du contrôleur pour les commentaires
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des commentaires.' });
  }
};

exports.createComment = async (req, res) => {
  try {
    const { content } = req.body;
    const comment = await Comment.create({ content });
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création du commentaire.' });
  }
};
