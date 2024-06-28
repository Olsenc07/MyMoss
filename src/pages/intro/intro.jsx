import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
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
      <Typography className='justify-content-center' align="center" variant="body2" color="text.secondary">
              MyMoss is a custom software development company.
              <Link to="/bio">
        <Fab extended className={buttonStyles.fab} >
        <ArrowForwardIcon sx={{ mr: 1 }} />
          MyMoss's Story
          </Fab>
      </Link>
        </Typography>
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
