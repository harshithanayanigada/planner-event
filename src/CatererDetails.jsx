import React from 'react';

const CatererDetails = ({ name }) => {
  return (
    <div>
      <h1>{name} - Caterer Details</h1>
      <p>Details about {name} catering services...</p>
    </div>
  );
};

export default CatererDetails;