import React from "react";
import "./Hero.css";
import shuva_ppt from "../../assets/shuva_ppt.jpg";
function Hero() {
  return (
    <div id="home" className="hero">
      <img
        src={shuva_ppt}
        alt="ProfilePhoto"
        style={{
          width: "200px",
          height: "200px", // Ensure it's a square
          borderRadius: "50%", // Makes it circular
          objectFit: "cover", // Ensures image covers the circle nicely
        }}
      />
      <h1><span>I'm Shuvadip Pal</span></h1>
      <p>
        I'm a 4th-year B.Tech student at <b>Haldia Institute of Technology</b> with a
        strong foundation in <b>Python</b> and <b>Java</b> programming languages. I am
        currently delving into Machine Learning and Web Development, aiming to
        build expertise in these domains.{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
