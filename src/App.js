import React, { useState } from "react";
import StarTunnelCanvas from "./Stars";
import MainPage from "./MainPage";
import BackPage from "./BackPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/conclusion" element={<BackPage />} />
        <Route path="/leaders" element={<StarTunnelCanvas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;