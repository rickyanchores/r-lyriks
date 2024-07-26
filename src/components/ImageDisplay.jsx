// src/components/ImageDisplay.js
import React from 'react';


const ImageDisplay = ({ artistImage, artistName }) => {
  return (
    <div className="artistImageContainer bg-pink-500">
      {artistImage ? (
        <img src={artistImage} alt={`${artistName}`} className={styles.artistImage} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};

export default ImageDisplay;
