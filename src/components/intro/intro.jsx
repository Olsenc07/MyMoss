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
        [fullTitle[i]]: '#8BC34A' 
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
        if (letterColors[letter] === '#8BC34A') {
          setLetterColors(prevColors => ({
            ...prevColors,
            [letter]: '#4CAF50' // moss fully grown
          }));
        }
      }
    }, 500); 

    return () => clearInterval(colorChangeInterval);
  }, [letterColors]); // Run when letterColors changes

  const ProjectCard = ({ image, title, description, repoUrl, url }) => {
    return (
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={image} className='image' />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className='url-buttons'>
              <div>
                <Button variant="primary" href={repoUrl}>
                  Code Repository
                </Button>
              </div>
              <div>
                <Button variant="secondary" href={url}>
                  Live Demo
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  const projects = [
    {
      image: 'Neslo.ico',
      title: 'Neslo',
      description: 'Neslo is a Premium Windows and Doors company based out of central Alberta.',
      repoUrl: 'https://github.com/Olsenc07/Neslo',
      url: 'https://www.neslo.ca'
    },
    {
      image: 'Skalarly.ico',
      title: 'Skalarly',
      description: 'Skalarly is an academic enhancing social media platform.',
      repoUrl: 'https://github.com/Olsenc07/Skalarly',
      url: 'https://www.skalarly.com'
    }
  ];

  return (
    <Container className="py-5 intro-container">
      <Row>
        <Col md={12}>
          <h1 className="text-center">
            {title.split('').map((letter, index) => (
              <span 
                key={index} 
                style={{ color: letterColors[letter] || 'black' }} // Apply color from state
              >
                {letter}
              </span>
            ))}
          </h1>
        </Col>
      </Row>
      <Row className="mt-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
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
  );
};

export default Intro;
