import React from 'react';

const ResponseBox = ({ response }) => {
  return (
    <div>
      <textarea className='response-box' value={response} readOnly />
    </div>
  );
};

export default ResponseBox;