import { Avatar, Button, Typography, styled, IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState, useRef, useEffect } from "react";
import buttonStyles from  '/Users/olsenc07/Projects/MyMoss/src/styles/buttons.module.scss';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


 const ProjectCard = ({ message }) => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // expand panel
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });
    if (cardRef.current) observer.observe(cardRef.current);
  }, []);

  // needs to be from message object array
  const { animation, image, imageBackground, title, description, projectDetails, repoUrl, url } = message;
  const { keyFeatures, technologies } = projectDetails;

  // className={`project-card ${animation} ${isVisible ? 'visible' : ''}`} 
  return (
    <Card ref={cardRef}>
    <CardHeader avatar={
      <Avatar>
      <img className="img-fluid" src={image} alt={title} />
      </Avatar>
    }
      title={title} >
    </CardHeader>
    <CardMedia component="img" image={imageBackground}>
    </CardMedia>
    <CardContent>
      <Typography>
      {description}
      </Typography>
    </CardContent>
    <CardActions>
    <Button className={buttonStyles.contained}  variant="contained" href={repoUrl} target="_blank" rel="noopener noreferrer">
      Code Repository
      </Button>
      <Button className={buttonStyles.outlined} variant="outlined" href={url} onClick={(e) => {
        e.preventDefault(); 
        window.open(url, '_blank', 'noopener,noreferrer'); 
      }}>
     Live Website
      </Button>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
      </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
      <ul>
        {keyFeatures.map((keyFeature, index) => (
          <li key={index}><strong>{keyFeature}</strong></li>
        ))}
      </ul>
      <h4>Technologies Used</h4>
      <ul>
        <li><strong>Front-End:</strong> {technologies.frontEnd.join(', ')}</li>
        <li><strong>Back-End:</strong> {technologies.backEnd.join(', ')}</li>
        <li><strong>CI/CD:</strong> {technologies.ciCD.join(', ')}</li>
        <li><strong>SaaS:</strong> {technologies.saas.join(', ')}</li>
      </ul>
   </CardContent>
   </Collapse>
  </Card>
  );
};

export default ProjectCard;