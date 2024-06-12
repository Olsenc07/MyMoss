import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './intro.module.scss';

const Intro = () => {
  // Title Moss Aniamtion
  const [title, setTitle] = useState('');
  const fullTitle = 'My Modern Software Solutions';
  const [mossGrowth, setMossGrowth] = useState(0);
  const [letterColors, setLetterColors] = useState({});

  useEffect(() => {
    let i = 0;
    const titleInterval = setInterval(() => {
      setTitle(fullTitle.substring(0, i + 1));
      // moss gets thicker green color
      setLetterColors(prevColors => ({
        ...prevColors,
        [fullTitle[i]]: 'lightgreen' 
      }));
      i++;
      if (i > fullTitle.length) {
        clearInterval(titleInterval);
      }
    }, 100); 

    const mossInterval = setInterval(() => {
      setMossGrowth(prevGrowth => prevGrowth + 0.03); 
      if (mossGrowth >= 1) {
        clearInterval(mossInterval);
      }
    }, 77); 

    return () => {
      clearInterval(titleInterval);
      clearInterval(mossInterval);
    };
  }, []);

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      for (const letter in letterColors) {
        if (letterColors[letter] === 'lightgreen') {
          setLetterColors(prevColors => ({
            ...prevColors,
            [letter]: 'darkgreen' // moss fully grown
          }));
        }
      }
    }, 500); 

    return () => clearInterval(colorChangeInterval);
  }, [letterColors]); // Run when letterColors changes

    return (
      <Container className="py-5 intro-container">
        <Row>
          <Col md={12}>
          {/* add logo transition animation, two logos */}
            <h1 className="text-center">{title}</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="Neslo.ico" className='image' />
              <Card.Body>
                <Card.Title>Neslo</Card.Title>
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
              <Card.Img variant="top" src="Skalarly.ico" className='image'/>
              <Card.Body>
                <Card.Title>Skalarly</Card.Title>
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
