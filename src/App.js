import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="main-container">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
