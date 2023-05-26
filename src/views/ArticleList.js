/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoArticles from "../assets/journal.png";

const ArticleList = () => {
  const logoStyleSettings = {
    width: "75px", // Ajustez la largeur de l'image selon vos besoins
    height: "75px", // Ajustez la hauteur de l'image selon vos besoins// Ajoutez la marge à droite du texte (10px dans cet exemple)
  };

  const TextStyle = {
    color: "#ffffff", // Remplacez "#ffffff" par votre couleur personnalisée pour les liens
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Utilisez les données brutes de test pour la liste des articles
    const testArticles = [
      {
        id: 1,
        title: "Titre de l'article 1",
        content: "Contenu de l'article 1",
        userId: 1,
      },
      {
        id: 2,
        title: "Titre de l'article 2",
        content: "Contenu de l'article 2",
        userId: 2,
      },
      {
        id: 3,
        title: "Titre de l'article 3",
        content: "Contenu de l'article 3",
        userId: 3,
      },
      // Ajoutez d'autres articles de test ici...
    ];

    setArticles(testArticles);
  }, []);

  return (
    <Container>
      <Row className="mt-5 mb-10">
        <h2 style={TextStyle} className="mt-4 mb-5">
          Liste des articles
        </h2>
        {articles.map((article) => (
          <div key={article.id} className="col-md-4">
            <Card>
              <img
                src={logoArticles}
                alt="Image de l'article"
                className="rounded-circle mx-auto mt-3"
                style={logoStyleSettings}
              />
              <Card.Body>
                <Card.Title className="mt-2 d-flex justify-content-center align-items-center">
                  {article.title}
                </Card.Title>
                <Card.Text className="mt-2 d-flex justify-content-center align-items-center">
                  {article.content}
                </Card.Text>
                <Link to={`/articles/${article.id}`} className="btn btn-primary mt-5 d-flex justify-content-center align-items-center">
                  Voir plus
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ArticleList;
