// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile">
          <img src="profile-pic-placeholder.png" alt="Profile" className="profile-pic" />
          <h2>Fatima EL ALAOUI</h2>
          <button className="edit-profile">Edit Profile</button>
        </div>
        <nav className="menu">
          <ul>
            <li>Accueil</li>
            <li>Classe 1</li>
            <li>Classe 2</li>
            <li>Classe 3</li>
            <li>Classe 4</li>
            <li>Classe 5</li>
            <li>Classe 6</li>
            <li>Emploi du temps</li>
          </ul>
        </nav>
        <div className="settings-logout">
          <button className="settings">Paramètres</button>
          <button className="logout">Logout</button>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <input type="text" placeholder="Search..." className="search-bar" />
        </header>
        <section className="classes">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="class-card">
              <h3>Classe {i + 1}</h3>
              {i === 0 && <p>Date limite: Demain<br />8:00 - Atelier1</p>}
              <div className="status"></div>
              <div className="folder-icon"></div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
