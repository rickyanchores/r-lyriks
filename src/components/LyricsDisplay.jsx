// src/components/LyricsDisplay.js
import React from 'react';


const LyricsDisplay = ({ lyrics }) => {
  return (
    <div className="LyricsDisplay bg-gray-400 p-4 grid justify-center m-auto">
      {lyrics ? <pre>{lyrics}</pre> : <p>No lyrics found.</p>}
    </div>
  );
};

export default LyricsDisplay;
