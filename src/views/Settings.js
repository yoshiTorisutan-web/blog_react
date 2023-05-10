import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
} from "reactstrap";

const SiteSettings = () => {
  const TextStyle = {
    color: "#ffffff", // Remplacez "#ffffff" par votre couleur personnalisée pour les liens
  };

  const FontStyle = {
    fontFamily: "SourceCodePro",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  const handleSave = () => {
    // TODO: handle save logic
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="mt-5 mb-10">
        <h1 className="mt-4 mb-3" style={TextStyle}>
          Site Settings
        </h1>
        <Form className="mt-5">
          <FormGroup>
            <Label style={TextStyle} for="name">
              Nom du site
            </Label>
            <Input
              style={FontStyle}
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter site name"
            />
          </FormGroup>
          <FormGroup>
            <Label style={TextStyle} for="email">
              Email admin
            </Label>
            <Input
              style={FontStyle}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
            />
          </FormGroup>
          <FormGroup>
            <Label style={TextStyle} for="password">
              Mot de passe admin
            </Label>
            <Input
              style={FontStyle}
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
            />
          </FormGroup>
          <FormGroup>
            <Label style={TextStyle} for="language">
              Langage par defaut
            </Label>
            <Input
              style={FontStyle}
              type="select"
              name="language"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">Selectionner une langue</option>
              <option value="en">Anglais</option>
              <option value="fr">Frnaçais</option>
              <option value="es">Espagnol</option>
            </Input>
          </FormGroup>
          <Button className="mt-4 mb-3" color="primary" onClick={handleSave}>
            Sauvegarder les changements
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default SiteSettings;
