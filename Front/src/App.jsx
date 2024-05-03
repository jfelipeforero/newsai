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

  const handleSubmit = async (text) => {
    // Simulación de respuesta del backend 
    const fakeBackendResponse = `la noticia es fake "${text}"`;
    
    // Actualiza el estado con la respuesta simulada del backend
    setResponse(fakeBackendResponse);
  };

  return (
    <div className='container background'>
      <div className='content'>
        <h1 className='title'>Newsai</h1>
        <h2 className='subtitle'>Are your news reliable? Find out here!</h2>
        <TextInput onSubmit={handleSubmit} />
        <ResponseBox response={response} />
        <p className="footer-text">
          Developed by: 
          <a href="https://www.linkedin.com/in/andresfeliperocha/"target='_blank'>Andres Rocha</a>, 
          <a href="https://www.linkedin.com/in/jfelipeforero/"target='_blank'>Felipe Forero</a>, 
          <a href="https://www.linkedin.com/in/marlon-calle-areiza/"target='_blank'>Marlon Calle</a>
        </p>
      </div>
    </div>
  );
};

export default App;
