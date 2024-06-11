import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './intro.module.scss';


const Intro = () => {
    return (
      <Container className="py-5 intro-container">
        <Row>
          <Col md={12}>
            <h1 className="text-center">My Modern Software Solutions</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="Neslo.ico" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Subtitle>Neslo</Card.Subtitle>
                <Card.Text>
                  Neslo is a Premium Windows and Doors company based out of central Alberta.
                </Card.Text>
                <Button variant="primary" href="https://github.com/Olsenc07/Neslo">
                  Code Repository
                </Button>
                <Button variant="secondary" href="https://www.neslo.ca">
                  Live Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="Skalarly.ico"/>
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Subtitle>Skalarly</Card.Subtitle>
                <Card.Text>
                  Skalarly is an academic enhancing social media platform.
                </Card.Text>
                <Button variant="primary" href="https://github.com/Olsenc07/Skalarly">
                  Code Repository
                </Button>
                <Button variant="secondary" href="https://www.skalarly.com">
                  Live Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
     {/* project details */}
     <Row className="mt-4">
        <Col md={12} className="text-center">
          <Link to="/projects">
            <Button variant="outline-primary">View All Projects</Button>
          </Link>
        </Col>
      </Row>
      </Container>
// Explain more
// with an extensive knowledge stacks we can optimize your needs and budget
// instead of forcing you in a generic category, we meet your needs.
    );
  };
  
  export default Intro;
