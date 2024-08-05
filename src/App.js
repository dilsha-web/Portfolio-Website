import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<WorkExperience />} />
          <Route path="contact" element={<ContactMe />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
