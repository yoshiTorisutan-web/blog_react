import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';

import ArticleList from './views/ArticleList';
import Article from './views/Article';
import CommentList from './views/CommentList';
import CommentForm from './views/CommentForm';
import LoginForm from './views/LoginForm';
import Home from './views/Home';
import ContactForm from './views/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/articles" element={<ArticleList />} />
        <Route exact path="/articles/:id" element={<Article />} />
        <Route exact path="/comments" element={<CommentList />} />
        <Route exact path="/comments/new" element={<CommentForm />} />
        <Route exact path="/contact" element={<ContactForm />} />
        <Route exact path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
