"use client";
import React, {useState } from 'react';
export default function ButtonB() {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(true);
    };
  
    return (
      <button
        className={`${
          isClicked ? 'bg-blue' : 'bg-yellow'
        } hover:bg-black hover:text-white py-2 px-4 rounded`}
        onClick={handleClick}
      >
        {isClicked ? 'Clicked - Dark Blue' : 'Click me'}
      </button>
    );
  };
  
//   export default ButtonB;
