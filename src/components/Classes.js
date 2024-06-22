import React, { useState, useEffect } from 'react';
import ClassCard from './ClassCard';
import './Classes.css';
import axios from 'axios';

const Classes = () => {
    const [dataClass, setDataClass] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://acef4929-fdeb-4e80-871c-beab87bbf238.mock.pstmn.io//classes')
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
        <section className="classes">
            {dataClass.map((user) => (
                <ClassCard 
                    key={user.id}
                    className={user.name} 
                    deadline={user.due_date}
                />
            ))}
        </section>
    );
};

export default Classes;
