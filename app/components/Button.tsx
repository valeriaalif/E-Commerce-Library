'use client';
import React from 'react';



const Button = () => {
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default Button
