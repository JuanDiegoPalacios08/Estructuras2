
import React from 'react';

const Son = React.memo(({ numero, increment }) => {
  console.log('Son component re-rendered');

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => increment(numero)}
    >
      {numero}
    </button>
  );
});

export default Son;
