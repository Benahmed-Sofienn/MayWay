import React from "react";


import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <div>
          <h2>MayWay</h2>
          <h5>Together we go</h5>
        </div>
        <div>
          <h3>About us</h3>
          {/* <h5>
            <a>Who we are</a>
          </h5>
          <h5>
            <a>Our services</a>
          </h5>
          <h5>
            <a>FAQ</a>
          </h5> */}
        </div>
        <div>
          <h3>Our partners</h3>
          <h5>Google</h5>
          <h5>GoMyCode</h5>
          <h5>Thneity</h5>
          <h5>Transport ministry</h5>
        </div>
      
      <div className='follow'>
        <h3>Folow us</h3>
        
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-youtube"></i>
        
      </div>
      </div>

    </footer>
  );
};

export default Footer;
