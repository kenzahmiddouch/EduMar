// src/components/ClassCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ClassCard.css';

const ClassCard = ({ className, deadline }) => {
  return (
    <Link to={`/addcourse`} className="class-card">
      <h3>{className}</h3>
      {deadline && <p>{deadline}</p>}
      <div className="status"></div>
      <div className="folder-icon"></div>
    </Link>
  );
};

export default ClassCard;
