// css
import "./App.css";

// react router dom imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
