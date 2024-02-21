import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Earthquake from "./components/Earthquake";
import Pollution from "./components/Pollution";
import Floods from "./components/Floods";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earthquakes" element={<Earthquake />} />
        <Route path="/pollution" element={<Pollution />} />
        <Route path="/floods" element={<Floods />} />
      </Routes>
    </Router>
  );
};

export default App;
