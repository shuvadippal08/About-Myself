import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import shuva_ppt from "../../assets/shuva_ppt.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={shuva_ppt}
            alt="ProfilePhoto"
            style={{
              width: "300px",
              height: "300px"
            }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Haldia Institute of Technology - 26 (IT)||Proficient in DSA(JAVA),
              python, C, MySQL ||Exploring Machine Learning & Web Development
              ||Passionate About Continuous Learning
            </p>
            <p>
              I am Shuvadip Pal, a 4th-year B.Tech student at Haldia Institute
              of Technology with a strong foundation in Python and Java
              programming languages. I am currently delving into Machine
              Learning and Web Development, aiming to build expertise in these
              domains. My goal is to continuously explore and learn diverse
              technologies related to these fields, broadening my skill set and
              contributing effectively to innovative projects. Also interested
              in new other technologies.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
                <p>Programming Language: <br/>Python & Java & C</p>
                <hr style={{width: "50%"}}></hr>
            </div>
            <div className="about-skill">
                <p>Machine Learning: <br/>Sciktlearn,Pandas, Numpy, Matplotlib </p>
                <hr style={{width: "80%"}}></hr>
            </div>
            <div className="about-skill">
                <p>Machine Learning: <br/>Classification , Regression</p>
                <hr style={{width: "70%"}}></hr>
            </div>
            <div className="about-skill">
                <p>Web Development: <br/>HTML & CSS & JavaScript & React.js</p>
                <hr style={{width: "60%"}}></hr>
            </div>
            <div className="about-skill">
                <p>Other skills: <br/>DBMS, MySQL</p>
                <hr style={{width: "50%"}}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-educations">
        <div className="about-education">
            <h1>Matriculation</h1>
            <h3>Mejhiary S C S High School</h3>
            <h4>&emsp; Board: <br/>West Bengal Board of Secondary Education (WBBSE)</h4>
            <p>MARKS:&emsp; 85.71%</p>
            <p>YEAR: 2019</p>
        </div><hr/>
        <div className="about-education">
            <h1>Higher Secondary</h1>
            <h3>Maldanga R M Institution</h3>
            <h4>&emsp;Board: <br/>West Bengal Council of Higher Secondary Education (WBCHSE)</h4>
            <p>MARKS: &emsp;85.8%</p>
            <p>YEAR: 2021</p>
        </div><hr/>
        <div className="about-education">
            <h1>College/ Graduation</h1>
            <h3>Haldia Institute of Technology</h3>
            <h4>&emsp;University: <br/>Maulana Abul Kalam Azad University of Technology</h4>
            <p>MARKS:&emsp; 9.10 CGPA &emsp;&emsp;&emsp; UPTO - 6th Semester</p>
            <p>YEAR: 2022-2026</p>
        </div><hr/>
      </div>
    </div>
  );
}

export default About;
