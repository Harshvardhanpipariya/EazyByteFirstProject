import React, { useContext } from 'react';
import './CSS-files/index.css'
import HTML from './images/stack/HTML.png';
import CSS from "./images/stack/CSS.png";
import Javascript from "./images/stack/Javascript.svg";
import Reacts from "./images/stack/React.png";
import NodeJs from "./images/stack/NodeJs.svg";
import Next from "./images/stack/Next.svg";
import Redux from "./images/stack/Redux.svg";
import Tailwind from "./images/stack/Tailwind.png"
import Bootstrap from "./images/stack/Bootstrap.svg";
import MaterialUI from "./images/stack/MaterialUI.svg";
import Express from "./images/stack/Express.png";
import Git from "./images/stack/Git.svg";
import Github from "./images/stack/Github.svg";
import Graphql from "./images/stack/Graphql.svg";
import MongoDB from "./images/stack/MongoDB.svg";
import Vercel from "./images/stack/Vercel.svg";
import ChartJs from "./images/stack/ChartJs.svg"
import Bash from "./images/stack/Bash.svg";
import Docker from "./images/stack/Docker.svg";
import K8s from "./images/stack/K8s.svg";
import NextJsCircle from "./images/stack/NextJsCircle.png"
import MyContext from './Context-Api/MyContext';


const Projectsection = () => {
  const { totalProject } = useContext(MyContext);

  const skillIcons = {
    Next:Next,
    HTML: HTML,
    CSS: CSS,
    Javascript: Javascript,
    Reacts: Reacts,
    NodeJs: NodeJs,
    NextJsCircle: NextJsCircle,
    Redux: Redux,
    Tailwind: Tailwind,
    Bootstrap: Bootstrap,
    MaterialUI: MaterialUI,
    Express: Express,
    Git: Git,
    Github: Github,
    Graphql: Graphql,
    MongoDB: MongoDB,
    Vercel: Vercel,
    ChartJs: ChartJs,
    Bash: Bash,
    Docker: Docker,
    K8s: K8s,
  };
  
  return (
    <div className="project-container" id="projects">
      {totalProject.projects.map((project, index) => (
        <div className="project-card" id={project.id} key={project.id} style={{
    backgroundImage: `url(${project.backgroundImage})`, // Correct syntax for dynamic URL
    backgroundSize: 'cover', // Optional: Ensures the image covers the entire element
    backgroundPosition: 'center', // Optional: Centers the image
    backgroundRepeat: 'no-repeat', // Optional: Prevents image repetition
  }}>
          <div className={`project-number ${index % 2 === 0 ? 'project-number-right' :'project-number-left' }`} id={project.id}>
            {project.number}
          </div>
          <div className={`project-content ${index % 2 === 0 ? 'project-content-right' : 'project-content-left'}`}>
            <div className="project-skills-container">
              {project.skills.map((skill, i) => (
                <img key={i} className="project-skill" src={skillIcons[skill]} alt={skill} />
              ))}
            </div>
            <h2 className="project-heading">{project.heading}</h2>
            <p className="project-sub-heading">{project.subHeading}</p>
            <div className="btn-group">
              <button className="btn-pink btn-project">Read More</button>
              <a href={project.gitHubLink || "#"} target="_blank" rel="noopener noreferrer">
                <i title="GitHubLink" className="fa-brands fa-github icon"></i>
              </a>
              <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer">
                <i title="LiveLink" className="fa-solid fa-link icon"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectsection;
