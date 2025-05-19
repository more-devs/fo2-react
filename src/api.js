import axios from "axios";

// Usa la URL pública de tu backend en Render aquí:
const API = axios.create({
    baseURL: "https://b2-react.onrender.com",
});

export default API;
