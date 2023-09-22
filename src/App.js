import React from "react";
import Popular from "./components/popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "./components/Anime";
import Pictures from "./components/Pictures";
import Homepage from "./components/Homepage";const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<Anime />} />
        <Route path="/character/:id" element={<Pictures />} />
  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
