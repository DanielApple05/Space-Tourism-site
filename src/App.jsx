import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/index.jsx'
import Destinations from './pages/destinations.jsx';
import Crew from './pages/crew.jsx';
import Technology from './pages/technology.jsx';
import './App.css'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Navigate to="/" replace />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination" element={<Navigate to="/destinations" replace />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    
  );
}

export default App;

