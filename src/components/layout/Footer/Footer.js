import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <span>AASAV PANDYA</span>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="right">
          <span>SOCIAL</span>
          <ul>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
      <hr className="hr-row" />
      <div className="bottom">
        <span>© Copyright 2023. Made by AASAV PANDYA</span>
      </div>
    </footer>
  );
};

export default Footer;
