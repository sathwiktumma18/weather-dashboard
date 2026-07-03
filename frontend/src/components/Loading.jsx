import React from 'react';

function Loading() {
  return (
    <div className="loading-card">
      <div className="spinner" />
      <p>Fetching weather details...</p>
    </div>
  );
}

export default Loading;
