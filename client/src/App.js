import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientPage from './pages/Main.js';
import Main from "./pages/Main.js";
import AllNews from "./pages/AllNews";
import Vakansii from "./pages/Vakansii";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/allnews" element={<AllNews />} />
            <Route path="/vakansii" element={<Vakansii />} />
        </Routes>
      </Router>
  );
}

export default App;
