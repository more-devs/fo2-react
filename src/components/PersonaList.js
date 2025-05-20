// src/components/PersonaList.js
import React from 'react';

const PersonaList = ({ personas, onDelete }) => {
    return (
        <ul>
            {personas.map((persona) => (
                <li key={persona.id}>
                    {persona.nombre} - {persona.edad} años
                    <button onClick={() => onDelete(persona.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default PersonaList;
