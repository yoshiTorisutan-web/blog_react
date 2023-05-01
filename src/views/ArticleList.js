import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import apiService from '../services/apiService';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await apiService.getArticles();
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="mt-5 mb-10">
        {articles.map(article => (
          <Col key={article._id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArticleList;
