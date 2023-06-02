import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Submit from "./Submit";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/submit" element={<Submit/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
      </Routes>
    </Router>
  );
}
// https://docs.google.com/forms/d/e/1FAIpQLScvbLDW4Do4v2U6oHeWkrKZP1lNxB28eyDyfHuCiAaA8cU1gQ/viewform?usp=pp_url
export default App;
