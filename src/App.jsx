// css
import "./App.css";

//context
import { AuthProvider } from "./context/AuthContext";

// react router dom imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
