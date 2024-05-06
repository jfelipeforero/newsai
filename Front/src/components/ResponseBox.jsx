import React from 'react';
import TextareaAutosize from '../text_area_styles/TextAreaAutosize';


const ResponseBox = ({ response }) => {
  const formattedResponse = JSON.stringify(response, null, 2);

  return (
    <TextareaAutosize
      id="standard-multiline-flexible"
      label=""
      multiline
      maxRows={10}
      minRows={5}
      variant="outlined"
      value={formattedResponse}
      InputProps={{ readOnly: true }}
      style={{ width: '600px', maxHeight: '200px', overflowY: 'auto' }}
    />
  );
};

export default ResponseBox;
