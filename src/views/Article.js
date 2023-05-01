import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import apiService from "../services/apiService";

const Article = ({ match }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await apiService.getArticle(match.params.id);
        setArticle(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [match.params.id]);

  if (!article) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <Container>
      <Row className="mt-5 mb-10">
        <h2 className="mt-4 mb-3">{article.title}</h2>
        <p>{article.content}</p>
      </Row>
    </Container>
  );
};

export default Article;
