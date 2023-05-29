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
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Projects</a>
            </li>
            <li>
              <a href="/#">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
