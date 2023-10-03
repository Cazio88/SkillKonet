import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"


const NavBar = () => {


  return (
    <div className="Navbar-container">
    
      <div className="navbar">
      <img src='images/logoWhite.png'/>
      </div>
      <div>
        <nav>
          <ul id="menuitem">
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/SignUp">REGISTER</Link></li>
            <li><Link to="/signin">SIGN IN</Link></li>
            <li><Link to="/Contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
