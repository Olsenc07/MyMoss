import React from 'react';

const Footer = () => {
  return (
    <footer className="position-absolute bottom-0 end-0 p-3 bg-light">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img src="profile-pic.jpg" alt="Chase Olsen" className="rounded-circle" width="100" height="100" />
          </div> */}
          <div className="col-md-8">
            <a href="mailto: chase.erik.olsen@gmail.com">Email: chase.erik.olsen@gmail.com</a>
            <a href="tel:+14035075297">Phone: (403) 507-5297</a>
            <a href="https://www.linkedin.com/in/chase-ol/">LinkedIn</a>
            <a href="https://github.com/Olsenc07">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
