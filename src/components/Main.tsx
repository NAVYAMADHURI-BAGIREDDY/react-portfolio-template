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
          <h2 className="about-title">Full stack Data Engineer </h2>
          {/* NEW ABOUT TEXT */}
          <p className="about-text">
          I build scalable data pipelines and cloud-based data solutions using Python, SQL, Spark, Azure, and AWS. 
          My experience spans ETL development, big data processing, data warehousing, and analytics. I enjoy turning complex data into reliable, high-quality solutions that help businesses make better decisions.
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
