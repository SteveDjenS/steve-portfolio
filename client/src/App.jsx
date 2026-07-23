import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/parcours" element={<Education />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
