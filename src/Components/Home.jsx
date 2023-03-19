import React from "react";
import "../Styles/home.css";
import img from "../asset/background.jpg";
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <section id="home">
      <div className="home-div">
        <div className="home-div1">
          <img src={img} alt="pic" className="bg-img" />
        </div>
        <div className="content">
          <p className="tag-hi">Hii,👋</p>
          <p className="name-tag">
            I am <span id="user-detail-name">Dharmendra Yadav</span>
          </p>
          <span className="span-tag"> I am a </span>
          <h1 className="title">
            <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#FFED00",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                }}
                startDelay={3000}
                cursorColor="#865DFF"
               multiText={[
                  "Full Stack Web Developer",
                  "Frontened Developer",
                  "Backened Developer",
                  "Problem Solver"
                ]}
                multiTextDelay={2000}
                typeSpeed={100}
                multiTextLoop
              />
          </h1>
          <button id="resume-button-2">
            <Link to="">Download Resume</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
