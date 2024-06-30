import React, { useState } from 'react';
import './AddCourse.css';

const TravauxDevoirs = () => {
  const [devoirs, setDevoirs] = useState([]);
  const [newDevoirName, setNewDevoirName] = useState('');

  const handleCreateDevoir = () => {
    if (newDevoirName.trim() === '') return;

    const newDevoir = {
      name: newDevoirName,
      date: new Date().toLocaleString(),
    };

    setDevoirs([...devoirs, newDevoir]);
    setNewDevoirName('');
  };

  return (
    <div className="travaux-devoirs">
      <h1>Travaux et devoirs</h1>
      <div className="create-devoir">
        <input
          type="text"
          value={newDevoirName}
          onChange={(e) => setNewDevoirName(e.target.value)}
          placeholder="Nom du devoir"
        />
        <button onClick={handleCreateDevoir}>Créer</button>
      </div>
      <div className="devoirs-list">
        {devoirs.map((devoir, index) => (
          <div key={index} className="devoir-item">
            <div className="devoir-name">{devoir.name}</div>
            <div>{devoir.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravauxDevoirs;
