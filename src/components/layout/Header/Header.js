import React, { useState } from "react";
import "./Header.css";
import hamburger from "../../../Assets/images/hamburger.png";
const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="left-section">Aasav's Portfolio</div>
        <div className="right-section">
          <ul>
            <li>
              <a href="#aboutme">Home</a>
            </li>
            <li>
              <a href="#aboutme">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="ham-burger">
        <span>Aasav's Portfolio</span>
        <img src={hamburger} onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
      </div>
      {isNavbarOpen &&
       <div className="mobile-navbar">
            <a href="#aboutme">Home</a>
            <a href="#aboutme">About</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
      </div>}
    </div>
  );
};

export default Header;
