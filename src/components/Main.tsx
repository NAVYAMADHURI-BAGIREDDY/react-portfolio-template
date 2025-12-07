import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import NavyaAvatar from '../assets/images/Navya.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">

        {/* LEFT IMAGE */}
        <div className="image-wrapper">
          <img src={NavyaAvatar} alt="Avatar" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="content">

          {/* SOCIAL ICONS (moved higher using SCSS fix below) */}
          <div className="social_icons">
            <a href="https://github.com/NAVYAMADHURI-BAGIREDDY" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/navyamadhuri/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

          {/* NEW HEADING */}
          <h3 className="about-title">Full stack AI engineer| Data Analyst | Data Engineer | Data scientist</h3>

          {/* NEW ABOUT TEXT */}
          <p className="about-text">
            I’m Navya Madhuri, a Data Analyst and Machine Learning Engineer focused on building 
            intelligent, scalable solutions that turn real-world data into meaningful insights.
            I enjoy solving complex problems, optimizing systems, and designing clean user experiences.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/NAVYAMADHURI-BAGIREDDY" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/navyamadhuri/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;
