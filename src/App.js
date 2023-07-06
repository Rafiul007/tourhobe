import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Routes/Home.js";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
