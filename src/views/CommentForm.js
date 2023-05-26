import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import apiService from "../services/apiService";

const CommentForm = () => {
  const TextStyle = {
    color: "#ffffff", // Remplacez "#ffffff" par votre couleur personnalisée pour les liens
  };

  const FontStyle = {
    fontFamily: "SourceCodePro",
  };

  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.createComment({ content });
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="mt-5 mb-10">
        <h2 style={TextStyle} className="mt-4 mb-3">
          Ajouter un commentaire
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              as="textarea"
              style={FontStyle}
              rows={3}
              placeholder="Votre commentaire"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-4 mb-3" variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default CommentForm;
