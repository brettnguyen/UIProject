import React from 'react';
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <nav className="navbar text-center">
          <div className="container">
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <input type="text" placeholder="Search.."></input>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
              <li  >
                <Link to="/">Login</Link>
                </li>
                
                <li >
                <Link to="/Register">Register</Link>
                </li>

                <li >
                <Link to="/Profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
        
      </div>
    );
  }
  
  export default Navbar;