import "../styles/Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "ExploreInn",
      description:
        "A responsive accommodation platform where users can host their houses or list properties, while travelers can explore stays with filters and review Listings.",
      tech: ["React", "Express", "Node.js", "MongoDB"],
      github: "https://github.com/shrutika-gawande/ExploreInn",
      live: "https://exploreinn-lgne.onrender.com/listings"
    },
    {
      title: "Portfolio",
      description:
        "A full-stack AI-powered mock interview platform built using MERN stack with OpenAI integration.",
      tech: ["React", "Javascript", "Tailwind", "Html"],
      github: "https://github.com/shrutika-gawande/portfolio/tree/main/portfolio",
      live: "https://portfolio-delta-gold-27.vercel.app/"
    },
    {
      title: "BitLinks",
      description:
        "Track income and expenses with real-time analytics and authentication system.",
      tech: ["Next,js", "Express", "MongoDB", "Bootstrap"],
      github: "https://github.com/shrutika-gawande/bitlinks",
      live: "https://bitkinks.vercel.app/"
    },
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