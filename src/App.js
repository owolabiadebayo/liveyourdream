import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Submit from "./Submit";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Success from "./Success"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/submit" element={<Submit/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/carousel" element={<Carousel/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
