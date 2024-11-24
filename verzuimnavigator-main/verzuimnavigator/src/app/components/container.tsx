import React from 'react';
import ButtonArrow from './button'; // Adjust the import path according to your file structure

const Container: React.FC <{ text: string ; heading :string }> = ({ text, heading })=> {
  return (
    <div className="bg-beige rounded-lg p-8 shadow-md w-1/3">
      <h2 className="text-lg font-bold mb-4">{heading}</h2>
      <p className="mb-4">{text}</p>
      <ButtonArrow />
    </div>
  );
};

export default Container;
