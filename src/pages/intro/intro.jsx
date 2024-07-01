import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import introStyles from './intro.module.scss';
import ProjectsInfo  from '/Users/olsenc07/Projects/MyMoss/src/components/info/ProjectsInfo.jsx'; 
import buttonStyles from  '/Users/olsenc07/Projects/MyMoss/src/styles/buttons.module.scss';


const Intro = () => {
  const [showMyMossIn, setShowMyMossIn] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMyMossIn(true);
      // Fade in animation
      const intervalId = setInterval(() => {
        setOpacity(prevOpacity => {
          if (prevOpacity >= 1) {
            clearInterval(intervalId);
            return 1;
          }
          return prevOpacity + 0.05;
        });
      }, 50);
    }, 2500);
     // Cleanup on unmount
     return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const projects = ProjectsInfo.projects; 
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
      <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
          We specialize in crafting solutions that are both visually appealing and functionally robust. 
          Our approach is to meet your specific budget and project needs, 
          leveraging a network of skilled professionals to ensure cost-effective and high-quality solutions.
        </Typography>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Link to="/bio">
              <Fab extended sx={{ backgroundColor: 'primary.main', color: 'white', marginRight: '1rem' }}>
                <ArrowForwardIcon sx={{ mr: 1 }} />
                MyMoss's Story
              </Fab>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center" color="text.primary" gutterBottom>
              Checkout our recent projects
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
            <Grid>
              <ProjectsInfo />
            </Grid>
        </Grid>
      </Grid>
     
   
      
    </Grid>
  );
};

export default Intro;
