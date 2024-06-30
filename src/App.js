import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Dashboard from './components/dashboard/Dashboard.js';
import AddCourse from './components/addcour/AddCourse.js';


function App() {
  return (
   
    
      <div className="App">
        <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashbaord" element={<Dashboard />} />
        <Route path="/classroom" element={<AddCourse />} />
          <Route path="/addcourse" element={<AddCourse />} />
          {/* Add more routes here for different classes if needed */}
        </Routes>
        </Router>
      </div>
    
  );
}

export default App;
