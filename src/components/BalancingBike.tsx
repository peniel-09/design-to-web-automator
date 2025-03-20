
import React, { useState, useEffect } from 'react';

const BalancingBike = () => {
  const [bikePosition, setBikePosition] = useState(0);
  
  // Animation de la moto qui se balance légèrement
  useEffect(() => {
    const interval = setInterval(() => {
      setBikePosition(prev => {
        // Oscillate between -2 and 2 degrees
        const newPos = prev + 0.5;
        return newPos > 2 ? -2 : newPos;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px]">
      {/* Road/Path */}
      <svg 
        className="w-full h-full"
        viewBox="0 0 500 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved road */}
        <path 
          d="M500,100 Q400,10 300,100 T100,100" 
          fill="#3a3a3a" 
          stroke="#ffffff" 
          strokeWidth="2"
        />
        
        {/* Road markings */}
        <path 
          d="M490,100 Q400,20 300,100 T110,100" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="2" 
          strokeDasharray="10,15"
        />
        
        {/* Road edge - top */}
        <path 
          d="M500,95 Q400,5 300,95 T100,95" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="2"
        />
        
        {/* Road edge - bottom */}
        <path 
          d="M500,105 Q400,15 300,105 T100,105" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="2"
        />
        
        {/* Placeholder for motorcycle (image will be placed on top) */}
        <g transform={`translate(140, 100)`}>
          <rect x="-15" y="-15" width="30" height="30" fill="none" />
        </g>
      </svg>
      
      {/* The actual motorcycle image */}
      <div 
        className="absolute top-[85px] left-[125px]" 
        style={{ 
          transform: `rotate(${bikePosition}deg)`,
          transition: 'transform 0.1s ease-in-out',
          zIndex: 10
        }}
      >
        <img 
          src="/lovable-uploads/b6fa1306-8fc8-4dc7-b72c-676d8221df25.png" 
          alt="Balancing Motorcycle" 
          className="w-[150px] h-auto"
        />
      </div>
    </div>
  );
};

export default BalancingBike;
