import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // npm install react-route-dom
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/Notfound";

// ROUTING PAGES
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
