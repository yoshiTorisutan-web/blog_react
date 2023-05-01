import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row className="mt-5 mb-10">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/id/1000/400" />
            <Card.Body>
              <Card.Title>Titre de la carte 1</Card.Title>
              <Card.Text>
                Description de la carte 1
              </Card.Text>
              <Button variant="primary">Lire la suite</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/id/1001/400" />
            <Card.Body>
              <Card.Title>Titre de la carte 2</Card.Title>
              <Card.Text>
                Description de la carte 2
              </Card.Text>
              <Button variant="primary">Lire la suite</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/id/1002/400" />
            <Card.Body>
              <Card.Title>Titre de la carte 3</Card.Title>
              <Card.Text>
                Description de la carte 3
              </Card.Text>
              <Button variant="primary">Lire la suite</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
