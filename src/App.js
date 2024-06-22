import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Dashboard from './components/Dashboard';

function App() {
  return (
   
    
      <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here for different classes if needed */}
        </Routes>
        </Router>
      </div>
    
  );
}

export default App;
