import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import './footer.module.scss';

const Footer = () => {
  return (
    <footer className="position-absolute bottom-0 d-flex w-100 p-3 bg-light">
      <div className="container">
        <div className="row align-items-center"> 
          <div className="d-flex flex-column align-items-center"> 
          {/* <div className="img-fluid img">
            <img src='chazz.jpg' alt="Chase Olsen" className="profile-pic" />
          </div> */}
            <h3 className="ms-3">Chase Olsen</h3> 
          </div>
          <div className="col-md-8">
              <div className="row">
              <h6 className="col-12 mb-2">Contact</h6>
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <a href="mailto: chase.erik.olsen@gmail.com" className="text-dark d-flex align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2"/>
                     chase.erik.olsen@gmail.com
                  </a>
                </div>
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <a href="tel:+14035075297" className="text-dark d-flex align-items-center">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                     (403) 507-5297
                  </a>
                </div>
              </div>
              <div className='row'>
              <h6 className="col-12 mb-2">Connect With Me</h6>
              <div className="col-12 col-md-6">
                  <a href="https://www.linkedin.com/in/chase-ol/" className="text-dark d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin}  className="me-2"/>
                    LinkedIn
                  </a>
              </div>
              <div className="col-12 col-md-6">
                  <a href="https://github.com/Olsenc07" className="text-dark d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub}  className="me-2"/>
                    GitHub
                  </a>
              </div>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
