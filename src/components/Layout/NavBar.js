import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout/layout.css';

const NavBar = () => {
  // Define the menutoggle function here
  const menutoggle = () => {
    // Implement your menu toggle logic here
    // This function should toggle the visibility of your mobile menu
  };

  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <ul id="menuitem">
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/signin">SIGN IN</Link></li>
          </ul>
        </nav>
        <span className="fa fa-bars" onClick={menutoggle}></span>
      </div>
    </div>
  );
}

export default NavBar;
