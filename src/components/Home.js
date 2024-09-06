import React from 'react';
import { SiPython, SiDjango, SiReact, SiJavascript, SiHtml5, SiCss3, SiGit } from 'react-icons/si';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-animations">
        <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="rgba(240, 165, 0, 0.2)" />
        </svg>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(240, 165, 0, 0.4)" d="M0,224L60,213.3C120,203,240,181,360,197.3C480,213,600,267,720,272C840,277,960,235,1080,213.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="photo-section">
        <div className="photo-placeholder">
          <img 
            src="/images/WhatsApp Image 2024-09-06 at 20.05.15.jpeg"  
            alt="João Felipe"               
            className="profile-photo"         
          />
        </div>
      </div>

      <div className="text-section">
        <h1>João Felipe</h1>
        <p className="typewriter">Software Developer</p>
        <p>Ciência da Computação 2024/2027</p>
      </div>

      <div className="skills-section">
        <h3>Minhas Skills</h3>
        <div className="skills-icons">
          <SiPython title="Python" />
          <SiDjango title="Django" />
          <SiReact title="React" />
          <SiJavascript title="JavaScript" />
          <SiHtml5 title="HTML" />
          <SiCss3 title="CSS" />
          <SiGit title="Git" />
        </div>
      </div>
    </div>
  );
};

export default Home;
