import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define the route for the login page */}
          <Route path="/login" element={<Login />} />
          {/* Redirect to /login when the application starts */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
