import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Events from "./pages/Events.jsx";
import Team from "./pages/Team.jsx";
import Dotslash from "./pages/Dotslash.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/dotslash" element={<Dotslash />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
