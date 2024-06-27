import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import footerStyles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${footerStyles.footer} p-3`} > 
      <div className="container">
        <div className="row align-items-center"> 
          <div className="d-flex flex-column"> 
          {/* <div className="img-fluid img">
            <img src='chazz.jpg' alt="Chase Olsen" className="profile-pic" />
          </div> */}
            <h3 className="ms-3">Chase Olsen</h3> 
          </div>
          <div className="col-md-8 d-flex flex-row">
          <div className="col-12 mb-3">
              <h6 className="mb-2">Contact</h6>
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <a href="mailto: chase.erik.olsen@gmail.com">
                    chase.erik.olsen@gmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <a href="tel:+14035075297">
                    (403) 507-5297
                  </a>
                </div>
              </div>
              <div className="col-12 mb-3">
                <h6 className="mb-2">Connect With Me</h6>
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                  <a href="https://www.linkedin.com/in/chase-ol/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  <a href="https://github.com/Olsenc07" target="_blank" rel="noopener noreferrer">
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
