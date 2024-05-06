import React, { useState } from 'react';
import ContentInput from './components/ContentInput';
import ResponseBox from './components/ResponseBox';
import './App.css';
import { sendTextToBackend } from './services/api';

const App = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = async ({ title, content }) => { // Actualizado para recibir title y content
    try {
      // Envía el título y el contenido al backend y obtiene la respuesta
      const backendResponse = await sendTextToBackend({ title, content }); // Enviar título y contenido al backend
      // Actualiza el estado con la respuesta del backend
      setResponse(backendResponse);
    } catch (error) {
      console.error('Error al enviar el título y el contenido al backend:', error);
    }
  };

  return (
    <div className='container background'>
      <div className='content'>
        <h1 className='title'>Newsai</h1>
        <h2 className='subtitle'>Are your news reliable? Find out here!</h2>
        <ContentInput onSubmit={handleSubmit} />
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
