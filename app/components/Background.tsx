import React, { useState } from 'react';
import BackgroundImg from '../../public/assets/background.jpeg';

const Background = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageUpload = () => {
    document.getElementById('file-upload')?.click();
  };

  return (
    <div
      className="hero min-h-56 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${BackgroundImg.src})`, // Use .src to get the actual path from the imported image
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleImageUpload}
    >
      {isHovered && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-neutral bg-opacity-75">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 122.88"
            xmlSpace="preserve"
            className="h-12 w-12 text-white"
            enableBackground="new 0 0 122.88 122.88"
          >
            <style type="text/css">
              {`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}
            </style>
            <g>
              <path
                className="st0"
                d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44S0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z M52.56,84c-1.82,0.61-3.68,1.17-5.5,1.77c-1.82,0.61-3.64,1.21-5.5,1.82 c-4.34,1.4-6.71,2.19-7.23,2.33c-0.51,0.14-0.19-1.86,0.89-6.06l3.45-13.19l26.01-27.04l13.85,13.33L52.56,84L52.56,84L52.56,84z M78.48,33.84c-0.65-0.61-1.4-0.93-2.24-0.89c-0.84,0-1.59,0.33-2.19,0.98l-4.94,5.13l13.85,13.38l4.99-5.22 c0.61-0.61,0.84-1.4,0.84-2.24c0-0.84-0.33-1.63-0.93-2.19L78.48,33.84L78.48,33.84L78.48,33.84z"
              />
            </g>
          </svg>
        </div>
      )}
      <input
        type="file"
        id="file-upload"
        accept="image/*"
        style={{ display: 'none' }}
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md"></div>
      </div>
    </div>
  );
};

export default Background;
