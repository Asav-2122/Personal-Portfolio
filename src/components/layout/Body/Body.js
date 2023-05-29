import React from "react";
import "./Body.css";
import Typed from "typed.js";
import Image from "../../../Assets/images/developer_Img.png";
const Body = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Web</i> Developer",
        " React Js Developer",
        "Javascript Developer.",
      ],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main>
      <section className="first-section">
        <div className="left">
          Hi, My name is <span className="developer_name_color">Aasav</span>
          <div>and I am a passionate</div>
          <span ref={el} className="developer_role" />
        </div>
        <div className="right">
          <img src={Image} alt="developer.png" />
        </div>
      </section>
    </main>
  );
};
export default Body;
