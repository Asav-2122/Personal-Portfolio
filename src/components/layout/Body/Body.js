import React from "react";
import "./Body.css";
import foodis_video from "../../../Assets/videos/foodish_app.mp4";
import youtube from "../../../Assets/videos/YouTube.webm";
import Typed from "typed.js";
import Image from "../../../Assets/images/developer_Img.png";
const Body = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Web</i> Developer",
        " React Js Developer",
        "Javascript Developer",
        "Front-End Developer.",
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
      <section className="first-section" id="aboutme">
        <div className="left">
          Hi, My name is <span className="developer_name_color">Aasav</span>
          <div>and I am a passionate</div>
          <span ref={el} className="developer_role" />
        </div>
        <div className="right">
          <img src={Image} alt="developer.png" />
        </div>
      </section>
      <section className="project-section" id="project">
        <h1>Projects</h1>
        <div className="project-1">
          <div className="video-container">
            <video autoPlay height="280" width="350">
              <source src={foodis_video}></source>
            </video>
          </div>
          <div className="project-description">
            <h4>Foodish-A React App.</h4>
            <p style={{ color: "gray" }}>
              Foodish is a highly scalable and performent food ordering app made
              with react js and parcel as a bundler.It is having interactive and
              dynamic landing page with the lists of restaurants where user can
              search for a sepecific restaurant.
            </p>
            <div className="project-btn">
              <a href="https://foodish-react-app.netlify.app/" target="blank">
                Live Demo
              </a>
              <a
                href="https://github.com/Asav-2122/Foodish-A_React_App"
                target="blank"
              >
                Git Hub
              </a>
            </div>
          </div>
        </div>
        <div className="project-2">
          <div>
            <video autoPlay height="280" width="350">
              <source src={youtube}></source>
            </video>
          </div>
          <div className="project-description">
            <h4>YouTube-A Video Streaming Platform.</h4>
            <p style={{ color: "gray" }}>
              Youtube is a fast high quality video streaming platform which is
              having home page with list of videos , optimized search bar , watch
              page , live chat feature , recommended videos and many more
              amazing features.
            </p>
            <div className="project-btn">
              <a href="https://youtube-1105.netlify.app/" target="blank">
                Live Demo
              </a>
              <a
                href=" https://github.com/Asav-2122/You-Tube-Clone"
                target="blank"
              >
                Git Hub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Body;
