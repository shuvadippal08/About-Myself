import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import MyProject from "../../assets/MyProject";
import arrow_icon from "../../assets/arrow_icon.svg";
function Mywork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {MyProject.map((work, index) => (
          <div className="work-card" key={index}>
            <img src={work.w_img} alt={work.w_name} />
            <h3>{work.w_name}</h3>
            <div className="work-links">
              <a href={work.w_git} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {work.w_deployment && (
                <a
                  href={work.w_deployment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default Mywork;
