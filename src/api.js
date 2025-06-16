import axios from "axios";

// Usa la URL pública de tu backend en Render aquí:
const API = axios.create({
    baseURL: "https://bo-react.onrender.com",
});

export default API;
