import React from 'react';
import TextareaAutosize from '../text_area_styles/TextAreaAutosize';


const ResponseBox = ({ response }) => {
  return (
    <TextareaAutosize
      id="standard-multiline-flexible"
      label=""
      multiline
      maxRows={10}
      minRows={5}
      variant="outlined"
      value={response}
      InputProps={{ readOnly: true }}
    />
  );
};

export default ResponseBox;
