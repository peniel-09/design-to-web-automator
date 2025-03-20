
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
      {/* Straight Road */}
      <svg 
        className="w-full h-full"
        viewBox="0 0 500 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Straight road background */}
        <rect 
          x="0" 
          y="80" 
          width="500" 
          height="40" 
          fill="#3a3a3a" 
        />
        
        {/* Road markings */}
        <line 
          x1="0" 
          y1="100" 
          x2="500" 
          y2="100" 
          stroke="#ffffff" 
          strokeWidth="2" 
          strokeDasharray="10,15"
        />
        
        {/* Road edge - top */}
        <line 
          x1="0" 
          y1="80" 
          x2="500" 
          y2="80" 
          stroke="#ffffff" 
          strokeWidth="2"
        />
        
        {/* Road edge - bottom */}
        <line 
          x1="0" 
          y1="120" 
          x2="500" 
          y2="120" 
          stroke="#ffffff" 
          strokeWidth="2"
        />
      </svg>
      
      {/* The horizontal motorcycle image */}
      <div 
        className="absolute top-[85px] left-[200px]" 
        style={{ 
          transform: `scaleX(-1) rotate(${bikePosition}deg)`,
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
