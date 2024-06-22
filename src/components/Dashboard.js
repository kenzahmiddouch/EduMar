import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Classes from './Classes';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <Header />
        <div className="main-container">
          <Sidebar className="sidebar" />
          <Classes className="classes" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
