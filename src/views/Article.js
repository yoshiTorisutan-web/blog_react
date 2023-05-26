/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

import ImageArticle from "../assets/articles_photo.jpg";

const Article = ({ match }) => {
  const ImageStyleSettings = {
    width: "700px", // Ajustez la largeur de l'image selon vos besoins
    height: "400px",
    borderRadius: "20px"// Ajustez la hauteur de l'image selon vos besoins// Ajoutez la marge à droite du texte (10px dans cet exemple)
  };

  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Utilisez les données brutes de test pour l'article
    const testArticle = {
      id: 1,
      title: "Titre de l'article",
      content: "Contenu de l'article",
      userId: 1,
    };

    setArticle(testArticle);
  }, []);

  if (!article) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <Container>
      <Card className="my-5">
      <Card.Body className="mt-3 mb-10 d-flex flex-column align-items-center justify-content-center">
          <img
            src={ImageArticle}
            style={ImageStyleSettings}
            alt="Image de l'article"
            className="shadow bg-secondary mb-3 text-center"
          />
          <Card.Title className="mt-4 mb-3 d-flex justify-content-center align-items-center">
            {article.title}
          </Card.Title>
          <Card.Text className="mt-2 d-flex justify-content-center align-items-center">
            {article.content}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Article;
