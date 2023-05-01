import axios from "axios";

const BASE_URL = "http://localhost:5000";

const apiService = {
  getArticles: () => axios.get(`${BASE_URL}/articles`),
  getArticle: (id) => axios.get(`${BASE_URL}/articles/${id}`),
  getComments: () => axios.get(`${BASE_URL}/comments`),
  createComment: (comment) => axios.post(`${BASE_URL}/comments`, comment),
  login: (credentials) => axios.post(`${BASE_URL}/login`, credentials),
};

export default apiService;
