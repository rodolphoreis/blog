// css
import "./App.css";

// react router dom imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes></Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
