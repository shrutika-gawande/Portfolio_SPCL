import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Shrutika</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="hire-btn">Hire Me</a>
    </nav>
  );
}

export default Navbar;