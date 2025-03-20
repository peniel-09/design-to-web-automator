
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
    <div className="relative w-full h-[300px]">
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
        
        {/* Motorcycle position at the end of the curve */}
        <g transform={`translate(140, 100) rotate(${bikePosition})`}>
          {/* Motorcycle chassis (simplified) */}
          <rect x="-20" y="-8" width="40" height="16" rx="4" fill="#222" />
          
          {/* Wheels */}
          <circle cx="-15" cy="12" r="8" fill="#888" />
          <circle cx="15" cy="12" r="8" fill="#888" />
          
          {/* Front fork */}
          <rect x="12" y="-7" width="3" height="16" rx="1" fill="#555" />
          
          {/* Circuit board (Arduino) */}
          <rect x="-10" y="-5" width="12" height="6" rx="1" fill="#1E88E5" />
          
          {/* Cables */}
          <path d="M-5,-2 L-2,5 L5,2" stroke="#FF5722" strokeWidth="0.7" fill="none" />
          <path d="M-8,-2 L-12,3 L-10,8" stroke="#4CAF50" strokeWidth="0.7" fill="none" />
          
          {/* Handlebar */}
          <rect x="-15" y="-12" width="30" height="4" rx="2" fill="#333" />
        </g>
      </svg>
    </div>
  );
};

export default BalancingBike;
