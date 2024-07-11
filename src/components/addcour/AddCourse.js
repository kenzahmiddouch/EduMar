import React, { useState } from 'react';
import './AddCourse.css';

function ClassroomInterface() {
  const [activeTab, setActiveTab] = useState('travaux');
  const [showCreateDropdown, setShowCreateDropdown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [assignments, setAssignments] = useState([]);

  const handleCreate = () => {
    setShowCreateDropdown(!showCreateDropdown);
  };

  const handleCreateDevoir = () => {
    setShowForm(true);
    setShowCreateDropdown(false);
  };

  const handleSubmit = (newAssignment) => {
    setAssignments([...assignments, { ...newAssignment, date: new Date() }]);
    setShowForm(false);
  };

  return (
    <div className="ClassroomInterface">
      <nav className="navbar">
        <button className={activeTab === 'flux' ? 'active' : ''} onClick={() => setActiveTab('flux')}>Flux</button>
        <button className={activeTab === 'travaux' ? 'active' : ''} onClick={() => setActiveTab('travaux')}>Travaux et devoirs</button>
        <button className={activeTab === 'personnes' ? 'active' : ''} onClick={() => setActiveTab('personnes')}>Personnes</button>
        <button className={activeTab === 'notes' ? 'active' : ''} onClick={() => setActiveTab('notes')}>Notes</button>
      </nav>

      {activeTab === 'travaux' && (
        <div className="content">
          <div className="create-button-container">
            <button className="create-button" onClick={handleCreate}>+ Créer</button>
            {showCreateDropdown && (
              <div className="dropdown">
               <center><button onClick={handleCreateDevoir}>Devoir</button></center> 
                <button>Question</button>
              </div>
            )}
          </div>
          <AssignmentList assignments={assignments} />
        </div>
      )}

      {activeTab === 'flux' && (
        <div className="content">
          <AssignmentList assignments={assignments} />
        </div>
      )}

      {showForm && <AssignmentForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />}
    </div>
  );
}

function AssignmentList({ assignments }) {
  return (
    <ul className="assignment-list">
      {assignments.map((assignment, index) => (
        <li key={index}>
          <span className="icon">📄</span>
          <span className="title">{assignment.title}</span>
          <span className="date">Posté le {assignment.date.toLocaleDateString()}</span>
        </li>
      ))}
    </ul>
  );
}

function AssignmentForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, instructions, file });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Devoir</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Instructions (facultatif)"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <div className="file-upload">
            <input
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={onCancel}>Annuler</button>
            <button type="submit">Créer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClassroomInterface;
