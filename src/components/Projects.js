import React from 'react';
import { SiPython, SiDjango, SiReact, SiJavascript, SiHtml5, SiCss3, SiGit } from 'react-icons/si';
import Header from './HeadertTemp';  
import Footer from './Footer';  
import '../styles/Projects.css'; 

const Projects = () => {
  return (
    <div className="projects-page">
      <Header />
      
      <div className="projects-container">
        <h1>Meus Projetos</h1>
        <div className="projects-grid">

          <div className="project-card">
            <div className="project-info">
              <h2>Portfolio Website</h2>
              <p>Um site portfólio pessoal construído com React, onde mostro minhas habilidades e projetos.</p>
              <div className="project-tech">
                <SiReact title="React" />
                <SiJavascript title="JavaScript" />
                <SiHtml5 title="HTML" />
                <SiCss3 title="CSS" />
                <SiGit title="Git" />
              </div>
              <div className="project-links">
                <a href="https://github.com/seuusuario/portfolio" target="_blank" rel="noopener noreferrer">Ver Código</a>
                <a href="https://seuportfolio.com" target="_blank" rel="noopener noreferrer">Ver Online</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>Aplicativo de Tarefas</h2>
              <p>Um aplicativo simples de lista de tarefas desenvolvido com Django e React.</p>
              <div className="project-tech">
                <SiPython title="Python" />
                <SiDjango title="Django" />
                <SiHtml5 title="HTML" />
                <SiJavascript title="JavaScript" />
                <SiCss3 title="CSS" />
                <SiGit title="Git" />
              </div>
              <div className="project-links">
                <a href="https://github.com/jfelipeschwaab/To-Do-Django-App" target="_blank" rel="noopener noreferrer">Ver Código</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
