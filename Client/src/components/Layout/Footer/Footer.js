import React from 'react';
import {Link} from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
    <footer>
    <div className="section__container footer__container">
      <div className="footer__col">
        <h5>Wonderlust</h5>
        <p>
          Welcome to Wanderlust, our tour and travel website is your gateway
          to a world of wanderlust-inducing experiences.
        </p>
      </div>
      <div className="footer__col">
        <h4>Quick Links</h4>
        <Link to="/HomePage">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Post New">Post New</Link>
        <Link to="/SignIn">Contact Us</Link>
        
      </div>
      <div className="footer__col">
        <h4>Features</h4>
        <a href="#">Vacation Package</a>
        <a href="#">List of Tours</a>
        <a href="#">Gallery</a>
        <a href="#">Travel on a Budget</a>
      </div>
      <div className="footer__col">
        <h4>Follow Us</h4>
        <div className="footer__socials">
          <span>
            <a href="#"><i className="ri-tiktok-fill"></i></a>
          </span>
          <span>
            <a href="#"><i className="ri-linkedin-fill"></i></a>
          </span>
          <span>
            <a href="#"><i className="ri-instagram-line"></i></a>
          </span>
          <span>
            <a href="#"><i className="ri-facebook-fill"></i></a>
          </span>
        </div>
      </div>
    </div>
    <div className="footer__bar">
      Copyright © 2023 SkillKonet. All rights reserved.
    </div>
  </footer>
    
    
    </>
  );
}

export default Footer;
