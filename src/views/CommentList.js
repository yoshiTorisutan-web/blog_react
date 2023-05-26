/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoComments from "../assets/comment.png";

const CommentList = () => {
  const logoStyleComments = {
    width: "75px", // Ajustez la largeur de l'image selon vos besoins
    height: "75px", // Ajustez la hauteur de l'image selon vos besoins// Ajoutez la marge à droite du texte (10px dans cet exemple)
  };

  const TextStyle = {
    color: "#ffffff", // Remplacez "#ffffff" par votre couleur personnalisée pour les liens
  };
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Utilisez les données brutes de test pour la liste des commentaires
    const testComments = [
      {
        id: 1,
        content: "Commentaire 1",
        userId: 1,
        articleId: 1,
      },
      {
        id: 2,
        content: "Commentaire 2",
        userId: 2,
        articleId: 1,
      },
      {
        id: 3,
        content: "Commentaire 3",
        userId: 3,
        articleId: 1,
      },
      // Ajoutez d'autres commentaires de test ici...
    ];

    setComments(testComments);
  }, []);

  return (
    <Container>
      <Link to="/comments/new">
        <Button className="mt-5" variant="primary">
          Écrire un commentaire
        </Button>
      </Link>
      <Row className="mt-5 mb-10">
        <h2 style={TextStyle} className="mt-4 mb-5">
          Liste des commentaires
        </h2>
        {comments.map((comment) => (
          <div key={comment.id} className="col-md-4 mb-4">
            <Card>
              <img
                src={logoComments}
                alt="Image de l'article"
                className="rounded-circle mx-auto mt-3"
                style={logoStyleComments}
              />
              <Card.Body>
                <Card.Text>{comment.content}</Card.Text>
                <Card.Text>User ID: {comment.userId}</Card.Text>
                <Card.Text>Article ID: {comment.articleId}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default CommentList;
