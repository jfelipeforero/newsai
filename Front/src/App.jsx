// App.jsx
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import ResponseBox from './components/ResponseBox';
import './App.css';
import { sendTextToBackend } from './services/api';

// const App = () => {
//   const [response, setResponse] = useState('');

//   const handleSubmit = async (text) => {
//     try {
//       // Envía el texto al backend y obtiene la respuesta
//       const backendResponse = await sendTextToBackend(text);
//       // Actualiza el estado con la respuesta del backend
//       setResponse(backendResponse);
//     } catch (error) {
//       console.error('Error al enviar el texto al backend:', error);
//     }
//   };

const App = () => {
  const [response, setResponse] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = async (text) => {
    // Simulación de respuesta del backend 
    const fakeBackendResponse = `esta noticia es rial o falsa qn sabe "${text}"`;
    
    // Actualiza el estado con la respuesta simulada del backend
    setResponse(fakeBackendResponse);
  };

  return (
    <div className='container background'>
      <div className='content'>
        <h1 className='title'>NewSai</h1>
        <TextInput onSubmit={handleSubmit} />
        <ResponseBox response={response} />
      </div>
    </div>
  );
};

export default App;
