import './App.css'
import Navbar from "./components/Nav";
import Home from "./components/Home";
import About from './components/About';
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;