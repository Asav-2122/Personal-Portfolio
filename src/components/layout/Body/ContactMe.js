import React from "react";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <div className="contact-me">
      <form>
        <span>CONTACT</span>
        <div>
          <p>Name:</p>
          <input type="text" />
        </div>
        <div>
          <p>Email:</p>
          <input type="email" />
        </div>
        <div>
          <p>Message:</p>
          <textarea rows={4} cols={8} />
        </div>
        <button onClick={(e)=>e.preventDefault()}>Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
