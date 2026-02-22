import "../styles/Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "AI Mock Interview Assistant",
      description:
        "A full-stack AI-powered mock interview platform built using MERN stack with OpenAI integration.",
      tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
      github: "",
      live: ""
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Track income and expenses with real-time analytics and authentication system.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      github: "",
      live: ""
    },
    {
      title: "ExploreInn",
      description:
        "Full-stack property booking platform with authentication and image upload.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "",
      live: ""
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank"> <FaGithub /> GitHub</a>
              <a href={project.live} target="_blank"> <FaExternalLinkAlt /> Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;