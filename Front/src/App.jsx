import React, { useState } from 'react';
import TextInput from './components/TextInput';
import ResponseBox from './components/ResponseBox';
import './App.css';
import { sendTextToBackend } from './services/api';

const App = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = async (text) => {
    try {
      // Envía el texto al backend y obtiene la respuesta
      const backendResponse = await sendTextToBackend(text);
      // Actualiza el estado con la respuesta del backend
      setResponse(backendResponse);
    } catch (error) {
      console.error('Error al enviar el texto al backend:', error);
    }
  };

  return (
    <div className='container'>
      <div className='content'>
        <h1>NewSai</h1>
        <TextInput onSubmit={handleSubmit} />
        <ResponseBox response={response} />
      </div>
    </div>
  );
};

export default App;
