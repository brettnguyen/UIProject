import React from 'react';
import { Outlet, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import { useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function myRegFunction() {
  
    navigate("/Register")
    console.log("handleCollapse");
    var nav = document.getElementById("navbarNav");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
}


  const { user } = useContext(UserContext);

  const authenticated = (
    <Fragment>
      <h2>Hi, { user.username } </h2>
      <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <input type="text" placeholder="Search.."></input>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
              <li>
                <Link to="/" onClick={myFunction} >Logout</Link>
                </li>
              </ul>
            </div>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>Welcome! </h2>
      <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <input type="text" placeholder="Search.."></input>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
              <li>
                <Link to="/" onClick={myFunction} >Login</Link>
                </li>
                
                <li>
                <label className='Reg-link'  onClick={myRegFunction}>Register</label>
                </li>

                
              </ul>
            </div>
    </Fragment>
  )

  function myFunction() {
    console.log("handleCollapse");
    var nav = document.getElementById("navbarNav");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");

}

    return (
      <div>
        <nav className="navbar text-center">
          <div className="container">
          { user.authenticated ? authenticated : guest }    
          </div>
          
        </nav>
        <Outlet />
      </div>
    );
  }
  
  export default Navbar;