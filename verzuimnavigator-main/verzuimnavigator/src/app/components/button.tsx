// 'use client'
// type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

// export default function Button(props: Props) {
//     return (
//         <button className="bg-yellow-500 hover:bg-black hover:text-white py-2 px-4 rounded">
        
//         </button>
//       );
//       //Als je over de button hovert wordt hij zwart. 
    
// }
// This was my first try of making a simple button 

"use client";
import React, { useState } from 'react';

export default function ButtonArrow() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <button
 
  className={`bg-yellow relative overflow-hidden hover:bg-black hover:text-white transition-colors duration-300 py-2 px-4 rounded flex items-center space-x-2`}
  onClick={handleClick}
  >
<span className="relative z-10">{isClicked ? 'Clicked' : 'Bekijk aanbod'}</span>
<span className="relative flex items-center justify-center w-10 h-6 bg-black text-white rounded-full group-hover:animate-expand-bg">
  →
</span>

</button>
);
};