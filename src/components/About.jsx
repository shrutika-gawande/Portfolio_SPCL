import "../styles/About.css";

function About() {

  const skillsData = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Express", "Bootstrap"]
    }
  ];

  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate BCA student and aspiring Software Engineer.
        I specialize in MERN stack development and Data Structures & Algorithms.
        I enjoy building scalable applications and continuously improving my skills.
      </p>

      <div className="skills-container">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-card">
            <h3>{item.category}</h3>
            <div className="skill-list">
              {item.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;