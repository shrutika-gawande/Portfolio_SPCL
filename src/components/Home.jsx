import "../styles/Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Shrutika Gawande</span>
        </h1>
        <h2>Full Stack Developer | MERN Stack</h2>
        <p>
          I build modern, scalable and user-friendly web applications.
          Passionate about problem solving and creating impactful products.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="/resume.pdf" className="secondary-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Home;