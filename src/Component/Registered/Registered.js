import React, { useEffect, useState } from 'react';
import './Registered.css'

const Registered = () => {
    const [registered , setRegistered] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/handel')
        .then(res => res.json())
        .then(data => setRegistered(data))
    },[]);
   
    return (
        <div>
            <h1 className="register">Registered Count : {registered.length} </h1>           
        </div>
    );
};

export default Registered;