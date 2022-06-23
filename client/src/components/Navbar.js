import React from 'react';
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <nav className="navbar bg-light text-center">
          <div className="container-fluid">
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
              <li className="nav-item" >
                <Link to="/">Login</Link>
                </li>
                
                <li className="nav-item">
                <Link to="/Register">Register</Link>
                </li>

                <li className="nav-item">
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