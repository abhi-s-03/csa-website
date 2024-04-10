import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Dotslash from "./pages/Dotslash.jsx";
import CSCup from "./pages/Cscup.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/dotslash" element={<Dotslash />} />
          <Route path="/cscup" element={<CSCup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
