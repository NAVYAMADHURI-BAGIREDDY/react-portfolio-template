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
          <h2 className="about-title">Full stack AI engineer | Data Engineer | Data Analyst</h2>
          {/* NEW ABOUT TEXT */}
          <p className="about-text">
          I build AI-driven, cloud-ready web experiences and have a habit of refining things until they’re so simple anyone could use them. I learn fast, dive deep, and enjoy solving problems that keep most people up at night. If you like thoughtful engineering with a bit of personality, you’ll feel right at home here.
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
