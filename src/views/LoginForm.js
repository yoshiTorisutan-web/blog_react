import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import apiService from "../services/apiService";

const LoginForm = () => {

  const TextStyle = {
    color: "#ffffff", // Remplacez "#ffffff" par votre couleur personnalisée pour les liens
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.login({ username, password });
      // Stocker le token JWT dans le local storage ou les cookies
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="mt-5 mb-10">
        <h2 className="mt-4 mb-3" style={TextStyle}>Connexion</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={TextStyle}>Utilisateur</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted" style={TextStyle}>
              Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={TextStyle}>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check style={TextStyle} type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Se connecter
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default LoginForm;
