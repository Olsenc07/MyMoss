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
  const [showMyMossIn, setShowMyMossIn] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        setShowMyMossIn(true);
      }, 2500); 
  }, []);

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
         {!showMyMossIn && (
      <div align="center">
         <h1 className={introStyles.moss_initletters}>MyMoss</h1>
      </div>
    )}
    {showMyMossIn && (  
      <div align="center">
        <h1 className={introStyles.moss_finalletters}>My Modern Software Solutions</h1>
      </div>
    )}
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
