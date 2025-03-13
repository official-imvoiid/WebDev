import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/WebSite";
import Game from "./components/Game";
import GamesList from "./components/GamesPlayed";
import MusicList from "./components/MusicList";
import SkillSet from "./components/Skills";
import Art from "./components/Art";
import Literature from "./components/Literature";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <Router>
      <div className="app-container" style={{ minHeight: "100vh", backgroundColor: "#222", color: "#fff" }}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/game" element={<Game />} />
          <Route path="/gamesplayed" element={<GamesList />} />
          <Route path="/musiclist" element={<MusicList />} />
          <Route path="/skills" element={<SkillSet />} />
          <Route path="/art" element={<Art />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
