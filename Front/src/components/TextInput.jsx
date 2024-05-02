import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '../text_area_styles/TextAreaAutosize';

const TextInput = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text); // Envía el texto al backend al momento de enviar el formulario
    setText(''); // Limpia el estado del texto después de enviar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextareaAutosize
        id="standard-multiline-flexible" 
        label="Notice"  
        maxRows={10}
        minRows={5}
        value={text} 
        onChange={handleChange} 
        placeholder='Put your notice here...'
        style={{ width: '300px', maxHeight: '200px', overflowY: 'auto' }}
      />
      <br/>
      <Button 
      variant="text"
      type="submit">Submit</Button>
    </form>
  );
};

export default TextInput;
