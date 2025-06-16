import React, { useEffect, useState } from "react";
import API from "./api";
import PersonaForm from "./components/personaForm.js";
import PersonaList from "./components/PersonaList.js";


function App() {
    const [personas, setPersonas] = useState([]);
    const [editData, setEditData] = useState(null);

    const fetchPersonas = async () => {
        const res = await API.get("/personass");
        setPersonas(res.data);
    };

    useEffect(() => {
        fetchPersonas();
    }, []);

    const handleSave = async (persona) => {
        if (persona.id) {
            await API.put(`/personass/${persona.id}`, persona);
        } else {
            await API.post("/personass", persona);
        }
        setEditData(null);
        fetchPersonas();
    };

    const handleDelete = async (id) => {
        await API.delete(`/personass/${id}`);
        fetchPersonas();
    };

    const handleEdit = (persona) => {
        setEditData(persona);
    };

    return (
        <div>
            <h1>CRUD Personas</h1>
            <PersonaForm onSave={handleSave} editData={editData} />
            <PersonaList
                personas={personas}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default App;
