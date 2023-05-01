const Article = require('../models/articleModel');

// Fonctions du contrôleur pour les articles
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des articles.' });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await Article.create({ title, content });
    res.status(201).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'article.' });
  }
};
