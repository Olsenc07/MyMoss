import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import bioStyles from './bio.module.scss';

const Bio = () => {
  return (
    <div className={bioStyles.bioContainer}>
      <div className="container">
        <div className="row align-items-center">
          {/* <div className="col-md-6">
            <img 
              src="your-profile-picture.jpg" 
              alt="Chase Olsen" 
              className={bioStyles.profileImage} 
            />
          </div> */}
          <div className="col-md-6">
            <h2 className={bioStyles.bioHeading}>Chase Olsen</h2>
            <p className={bioStyles.bioDescription}>
            We specialize in crafting solutions that are both visually appealing and functionally robust. 
            Our approach is to meet your specific budget and project needs, 
            leveraging a network of skilled professionals to ensure cost-effective and high-quality solutions.
            </p>
            <h3 className={bioStyles.credentialsHeading}>MyMoss Approach</h3>
            <ul className={bioStyles.credentialsList}>
              <li><strong>Collaborative Meetings:</strong> We start with a clear understanding of your vision and goals. We'll work together to define project scope, timelines, and budget expectations.</li>
              <li><strong>Strategic Planning:</strong>  We'll develop a detailed project plan, outlining key milestones, deliverables, and communication strategies. This ensures a smooth and efficient development process.</li>
              <li><strong>Agile Development:</strong> We embrace agile methodologies to deliver value incrementally and adapt to changing requirements. This allows for flexibility and continuous improvement throughout the project.</li>
              <li><strong>Expert Execution:</strong>  Our team of skilled developers brings expertise in Angular, React, Node.js, and other modern technologies to deliver high-quality, custom solutions.</li>
            </ul>

            <h3 className={bioStyles.servicesHeading}>What MyMoss Offers</h3>
            <ul className={bioStyles.servicesList}>
              <li>Custom Web Application Development</li>
              <li>Front-End and Back-End Development</li>
              <li>API Design and Integration</li>
              <li>Cloud Infrastructure Management</li>
              <li>Agile Software Development</li>
              <li>Flexible Outsourcing Options</li>
            </ul>
            <div className={bioStyles.contactInfo}>
              <h3 className={bioStyles.contactHeading}>Contact</h3>
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
    </div>
  );
};

export default Bio;
