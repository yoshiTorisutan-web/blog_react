import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row } from "react-bootstrap";

const ContactForm = () => {
  const TextStyle = {
    color: "#ffffff", // Remplacez "#ffffff" par votre couleur personnalisée pour les liens
  };

  const FontStyle = {
    fontFamily: "SourceCodePro",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post("/api/contact", formData, config);
      alert("Votre message a été envoyé avec succès");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="mt-5 mb-10">
      <h1 style={TextStyle}>Contactez-nous</h1>
      <Form className="mt-5" onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="name">
          <Form.Label style={TextStyle}>Nom</Form.Label>
          <Form.Control
            style={FontStyle}
            type="text"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label style={TextStyle}>E-mail</Form.Label>
          <Form.Control
            style={FontStyle}
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label style={TextStyle}>Sujet</Form.Label>
          <Form.Control
            style={FontStyle}
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label style={TextStyle}>Message</Form.Label>
          <Form.Control
            style={FontStyle}
            as="textarea"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => onChange(e)}
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

export default ContactForm;
