import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Instagram } from "@material-ui/icons";
// import GithubIcon from "@material-ui/icons/Github";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hey, This is <span className="name">Abhay</span>
        </h2>
        <div className="prompt">
          <p>
            I am a <span className="web-dev-text">Web Developer</span>
          </p>
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/theabhaygaur/", "_blank")
            }
            style={{ cursor: "pointer" }}
          />
          <Instagram
            onClick={() => window.open("https://instagram.com/abhayygaur")}
            style={{ cursor: "pointer" }}
          />
          {/* <GithubIcon /> */}
        </div>
      </div>
      <div className="skills">
        {/* <h1>Skillset</h1> */}
        <ul className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React JS , HTML, CSS, Bootstrap, TailwindCSS </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJs, ExpressJS, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Python, C </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
