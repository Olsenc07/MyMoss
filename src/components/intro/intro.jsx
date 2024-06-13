import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { keyframes } from 'styled-components';
import introStyles from './intro.module.scss';


const Intro = () => {
  // Title Moss Animation
  const [showFullTitle, setShowFullTitle] = useState(false);

  // Define keyframes for the text and color transition
  const growText = keyframes`
    0% {
      content: "MyMoss";
    }
    100% {
      content: "My Modern Software Solutions";
    }
  `;

  const darkenGreen = keyframes`
    0% {
      color: lightgreen;
    }
    100% {
      color: darkgreen;
    }
  `;

  const StyledTypography = styled(Typography)`
    animation: ${growText} 3s ease-in-out;
    span {
      animation: ${darkenGreen} 1s ease-in-out;
      font-family: 'Playfair Display', serif;
    }
  `;
  useEffect(() => {
    setTimeout(() => {
      setShowFullTitle(true);
    }, 3000);
  }, []); 

  // Define letter colors
  const letterColors = {
    'M': 'lightgreen',
    'y': 'darkgreen',
    ' ': 'lightgreen',
    'M': 'darkgreen',
    'o': 'lightgreen',
    'd': 'darkgreen',
    'e': 'lightgreen',
    'r': 'darkgreen',
    'n': 'lightgreen',
    'S': 'darkgreen',
    'o': 'lightgreen',
    'f': 'darkgreen',
    't': 'lightgreen',
    'w': 'darkgreen',
    'a': 'lightgreen',
    'r': 'darkgreen',
    'e': 'lightgreen',
    ' ': 'lightgreen',
    'S': 'darkgreen',
    'o': 'lightgreen',
    'l': 'darkgreen',
    'u': 'lightgreen',
    't': 'darkgreen',
    'i': 'lightgreen',
    'o': 'lightgreen',
    'n': 'darkgreen',
    's': 'lightgreen'
  };
  const ProjectCard = ({ image, title, description, repoUrl, url }) => {
    return (
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia
            component="img"
            className={introStyles.image}
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item>
                <Button variant="contained" href={repoUrl}>
                  Code Repository
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" href={url}>
                  Live Demo
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
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
    <Grid container spacing={2} className="introStyles.intro_container">
      <Grid item xs={12}>
        <StyledTypography variant="h1" align="center" title="My Modern Software Solutions">
          {showFullTitle ? (
            title.split('').map((letter, index) => (
              <span 
                key={index} 
                style={{ color: letterColors[letter] }} // Apply color from state
              >
                {letter}
              </span>
            ))
          ) : (
            // Display "My Moss" for 3 seconds
            <span style={{ fontSize: '3rem' }}>My Moss</span>
          )}
        </StyledTypography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Grid>
      </Grid>
      {/* project details */}
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item>
            <Link to="/projects">
              <Button variant="outlined">View All Projects</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Intro;
