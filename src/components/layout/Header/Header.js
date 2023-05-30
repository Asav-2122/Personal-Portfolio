import React from "react";
import "./Header.css";
const Header = () => {
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
    </div>
  );
};

export default Header;
