import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/me" element={<AboutMe />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
