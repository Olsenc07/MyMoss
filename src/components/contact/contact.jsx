import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import ContactSupportIcon from '@mui/icons-material/ContactSupport'; 
import SpeedDialAction from '@mui/material/SpeedDialAction';

const Contact = () => {
  const actions = [
    { 
      icon: <FontAwesomeIcon icon={faEnvelope} />, 
      name: 'Email',
      onClick: () => window.open('mailto:chase.erik.olsen@gmail.com', '_blank') 
    },
    { 
      icon: <FontAwesomeIcon icon={faPhone} />, 
      name: 'Phone',
      onClick: () => window.open('tel:+14035075297', '_blank') 
    },
    { 
      icon: <FontAwesomeIcon icon={faGithub} />, 
      name: 'GitHub',
      onClick: () => window.open('https://github.com/Olsenc07', '_blank') 
    },
    { 
      icon: <FontAwesomeIcon icon={faLinkedin} />, 
      name: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/chase-ol/', '_blank') 
    },
  ];

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <SpeedDial
        ariaLabel="Contact Info"
        sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}
        icon={<ContactSupportIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick} 
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default Contact;
