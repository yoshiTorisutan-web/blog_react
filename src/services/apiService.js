import axios from "axios";
import Comment from "../models/commentModel";
import Article from "../models/articleModel";

const BASE_URL = "http://localhost:3000";

const apiService = {
  // ...

  getArticles: async () => {
    const response = await axios.get(`${BASE_URL}/articles`);

    // Construire les données brutes pour les articles
    const articlesData = response.data.map((article) => {
      return new Article(
        article.id,
        article.title,
        article.content,
        article.userId
      );
    });

    return articlesData;
  },

  getArticle: async (id) => {
    const response = await axios.get(`${BASE_URL}/articles/${id}`);

    // Construire les données brutes pour un article
    const articleData = new Article(
      response.data.id,
      response.data.title,
      response.data.content,
      response.data.userId
    );

    return articleData;
  },

  getComments: async () => {
    const response = await axios.get(`${BASE_URL}/comments`);

    // Construire les données brutes pour les commentaires
    const commentsData = response.data.map((comment) => {
      return new Comment(
        comment.id,
        comment.content,
        comment.userId,
        comment.articleId
      );
    });

    return commentsData;
  },

  // ...
};

export default apiService;
