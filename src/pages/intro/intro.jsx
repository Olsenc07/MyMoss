import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import introStyles from './intro.module.scss';
import ProjectsInfo  from '/Users/olsenc07/Projects/MyMoss/src/components/info/ProjectsInfo.jsx'; 
import buttonStyles from  '/Users/olsenc07/Projects/MyMoss/src/styles/buttons.module.scss';


const Intro = () => {
  const [showMyMossIn, setShowMyMossIn] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        setShowMyMossIn(true);
      }, 2500); 
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
      <Typography variant="body2" color="text.secondary">
              MyMoss is a custom software development company.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
            <ProjectsInfo/>
        </Grid>
      </Grid>
   
      <Link to="/bio">
        <Button className={buttonStyles.outlined} variant="outlined">MyMoss's Story</Button>
      </Link>
    </Grid>
  );
};

export default Intro;
