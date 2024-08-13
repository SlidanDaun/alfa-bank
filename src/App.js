import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages";

function App() {
  return (
    <Router basename="/React">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
