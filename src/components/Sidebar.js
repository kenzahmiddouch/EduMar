// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import axios from 'axios';

import { useEffect, useState } from'react';
const Sidebar = () => {
    const [dataClass, setDataClass] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://acef4929-fdeb-4e80-871c-beab87bbf238.mock.pstmn.io/classes')
        .then((response) => {
            console.log(response.data)
            setDataClass(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error)
            setError(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="logo192.png" alt="Profile" className="profile-pic" />
        <h4>Abdelali</h4>
        <button className="edit-profile">Edit Profile</button>
      </div>
      <nav className="menu">
        <ul>
      {dataClass.map((user) => (     
            <li>
                 
                <h4>{user.name}</h4>
                
            </li>
            
            ))}
            </ul>
            
      </nav>
      <div className="settings-logout">
        <button className="settings">Paramètres</button>
        <button className="logout">Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;
