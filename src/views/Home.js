import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import ReactImage from "../assets/react.jpg";
import ProjectImage from "../assets/project_react.jpg";
import BiblioImage from "../assets/biblio_react.png";

function Home() {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={ReactImage} />
            <Card.Body>
              <Card.Title>Qu'est-ce que React ?</Card.Title>
              <Card.Text>Presentation du framework JS</Card.Text>
              <Button className="mt-5" variant="primary">
                Lire la suite
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={ProjectImage} />
            <Card.Body>
              <Card.Title>Projets React</Card.Title>
              <Card.Text>Exemple de projets React pour bien debuter</Card.Text>
              <Button className="mt-5" variant="primary">
                Lire la suite
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={BiblioImage} />
            <Card.Body>
              <Card.Title>Bibliotheque React</Card.Title>
              <Card.Text>
                Bibliotheque de composants React a installer
              </Card.Text>
              <Button className="mt-5" variant="primary">
                Lire la suite
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-10">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={ReactImage} />
            <Card.Body>
              <Card.Title>Qu'est-ce que React ?</Card.Title>
              <Card.Text>Presentation du framework JS</Card.Text>
              <Button className="mt-5" variant="primary">
                Lire la suite
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={ProjectImage} />
            <Card.Body>
              <Card.Title>Projets React</Card.Title>
              <Card.Text>Exemple de projets React pour bien debuter</Card.Text>
              <Button className="mt-5" variant="primary">
                Lire la suite
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={BiblioImage} />
            <Card.Body>
              <Card.Title>Bibliotheque React</Card.Title>
              <Card.Text>
                Bibliotheque de composants React a installer
              </Card.Text>
              <Button className="mt-5" variant="primary">
                Lire la suite
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
