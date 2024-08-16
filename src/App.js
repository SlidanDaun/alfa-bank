import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";
import { GamePage } from "./pages/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gamePage" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
