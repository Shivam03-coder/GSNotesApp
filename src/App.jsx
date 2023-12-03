import React from "react";
import "./App.css";
import MainSection from "./components/layout/MainSection";
import PhysSemPage from "./pages/PhysSemPage";
import ChemSemPage from "./pages/ChemSemPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/physempage" element={<PhysSemPage />} />
          <Route path="/chemsempage" element={<ChemSemPage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
