import React, { useState } from 'react';

const TextInput = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange}
        placeholder='Pon el texto pa' 
      />
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextInput;
