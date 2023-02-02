import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Connexion from "./pages/Connexion";
import Category from "./pages/Category";
import "./App.css";
import Profile from "./pages/Profile";
import FicheDescription from "./components/FicheDescription";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Category/:id" element={<Category />} />
        <Route path="/FicheDescription" element={<FicheDescription />} />
      </Routes>
    </div>
  );
}

export default App;
