import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Quotes from './pages/Quotes';
import Signs from './pages/Astrology';
import Sign from './pages/Signs';

ReactDOM.render(
  
  <Router>
    <NavBar />
    <div id='bg'>
    <Routes>
      <Route path="/" element={<Quotes />} />
      <Route path="/signs" element={<Signs />} />
      <Route path="/signs/:sign" element={<Sign />} />
    </Routes>
    </div>
  </Router>,

  document.getElementById("root")
);