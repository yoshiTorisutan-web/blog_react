import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoImage from "../assets/blogger.png";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#0c2135", // Remplacez "#ff0000" par votre couleur personnalisée pour le fond
    color: "#ffffff", // Remplacez "#ffffff" par votre couleur personnalisée pour le texte
  };

  const linkStyle = {
    color: "#ffffff", // Remplacez "#ffffff" par votre couleur personnalisée pour les liens
  };

  const linkHoverStyle = {
    color: "#4599ea", // Remplacez "#ffcc00" par votre couleur personnalisée pour le survol des liens
  };

  const logoStyle = {
    width: "50px", // Ajustez la largeur de l'image selon vos besoins
    height: "50px", // Ajustez la hauteur de l'image selon vos besoins
    marginRight: "15px", // Ajoutez la marge à droite du texte (10px dans cet exemple)
  };

  return (
    <Navbar style={headerStyle} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={linkStyle}>
          <img
            src={logoImage}
            alt="Logo"
            className="logo-image"
            style={logoStyle}
          />{" "}
          Blog_react
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/articles"
              style={linkStyle}
              activeStyle={linkHoverStyle}
            >
              Articles
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/comments"
              style={linkStyle}
              activeStyle={linkHoverStyle}
            >
              Commentaires
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              style={linkStyle}
              activeStyle={linkHoverStyle}
            >
              Connexion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
