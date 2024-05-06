import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '../text_area_styles/TextAreaAutosize';

const ContentInput = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content }); // Envía el título y el contenido al backend al momento de enviar el formulario
    setTitle(''); // Limpia el estado del título después de enviar el formulario
    setContent(''); // Limpia el estado del contenido después de enviar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextareaAutosize
        id="title"
        label="Title"
        value={title}
        onChange={handleTitleChange}
        placeholder='Enter the title...'
        style={{ width: '600px', maxHeight: '50px', overflowY: 'auto' }}
      />
      <br/>
      <TextareaAutosize
        id="standard-multiline-flexible"
        label="Notice"
        maxRows={10}
        minRows={5}
        value={content}
        onChange={handleChange}
        placeholder='Put your notice here...'
        style={{ width: '600px', maxHeight: '200px', overflowY: 'auto' }}
      />
      <br/>
      <Button
        variant="text"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContentInput;
