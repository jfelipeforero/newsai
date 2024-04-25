import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // URL del backend

const api = axios.create({
  baseURL: BASE_URL,
});

export const sendTextToBackend = async (text) => {
  try {
    const response = await api.post('/', { text });
    return response.data;
  } catch (error) {
    console.error('Error al enviar el texto al backend:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente que llama a esta función
  }
};
