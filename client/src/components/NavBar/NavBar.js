import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    
    
    
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           FAHAMNI
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Cours"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Cours
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Enseignents"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
      Enseignents

              </NavLink>
            </li>
            
            
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact 
              </NavLink>
            </li>
            <li className="nav-item">
                <NavLink  to="/Signup" activeClassName="active"
               
 ><div class="right">
            <a href="#">Signup</a> </div></NavLink>
              </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    
    
  );
}

export default NavBar;