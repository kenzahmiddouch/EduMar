import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Dashboard from './components/Dashboard';

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       {/* Define the route for the login page */}
    //       <Route path="/login" element={<Login />} />
    //       {/* Redirect to /login when the application starts */}
    //       <Route path="*" element={<Navigate to="/login" />} />
    //     </Routes>
    //   </Router>
    // </div>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes here for different classes if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
