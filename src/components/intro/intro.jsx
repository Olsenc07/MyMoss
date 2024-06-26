import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { keyframes } from 'styled-components';
import introStyles from './intro.module.scss';


const Intro = () => {
  const [progress, setProgress] = useState(0); // State for animation progress
  const animationDuration = 5000;
  // Define keyframes for the text and color transition
  const MyMossExit = keyframes`
    0% {
      content: "MyMoss";
       color: var(--oliveDrab);
    },
    25% {
      content: "My Mo s s";
        color: var(--oliveDrab);
    },
    50% {
      content: "My Mod So So";
        color: var(--mossGreen);
    },
    75% {
      content: "My Moder Softw Soluti";
      color: var(--mossGreen);
    },
    100% {
      content: "My Modern Software Solutions";
      color: var(--lawnsGreen);
    }`;

    const MyMossOut = styled(Typography)`
    span {
      animation: ${MyMossExit} ${progress * 5}s ease-in;
    }`;

useEffect(() => {
  const intervalId = setInterval(() => {
    setProgress((prevProgress) => {
      if (prevProgress < 1) {
        return prevProgress + 0.01; // Increment progress by 0.01
      } else {
        return 1; // Stop at 1
      }
    });
  }, 50);

  return () => clearInterval(intervalId);
}, []);

const getAnimationContent = (progress) => {
  if (progress < 0.25) {
    return "MyMoss";
  } else if (progress < 0.5) {
    return "My Mo s s";
  } else if (progress < 0.75) {
    return "My Mod So So";
  } else if (progress < 1) {
    return "My Moder Softw Soluti";
  } else {
    return "My Modern Software Solutions";
  }
};

  const ProjectCard = ({ image, title, description, repoUrl, url }) => {
    return (
      <Grid item xs={12} md={4}>
        <Card>
          <div className={introStyles.img_container}>
          <img
            className={introStyles.image}
            src={image}
            alt={title}
          />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item>
                <Button contained variant="contained" className={introStyles.code_rep_btn} href={repoUrl}>
                  Code Repository
                </Button>
              </Grid>
              <Grid item>
                <Button contained variant="contained" href={url}>
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
    <Grid container spacing={2} className={introStyles.intro_container}>
         <Grid item xs={12}>
         <MyMossOut align="center">
         <span className={introStyles.moss_letters}>{getAnimationContent(progress)}</span>
         </MyMossOut>
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
              <Button outlined variant="outlined">View All Projects</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Intro;
