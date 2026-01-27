import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index.jsx'
import Destinations from './pages/destinations.jsx';
import Crew from './pages/crew.jsx';
import Technology from './pages/Technology.jsx';
import './App.css'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    
  );
}

export default App;

