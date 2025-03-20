
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Controller = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  
  const handleButtonPress = (direction: string) => {
    setActiveButton(direction);
    // Cette fonction pourrait envoyer des commandes à la moto Arduino
    console.log(`Direction pressed: ${direction}`);
  };
  
  const handleButtonRelease = () => {
    setActiveButton(null);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-48 h-48">
        {/* Top button */}
        <button 
          className={`direction-button absolute top-0 left-1/2 transform -translate-x-1/2 ${activeButton === 'up' ? 'bg-opacity-60 scale-105' : ''}`}
          onMouseDown={() => handleButtonPress('up')}
          onMouseUp={handleButtonRelease}
          onTouchStart={() => handleButtonPress('up')}
          onTouchEnd={handleButtonRelease}
        >
          <ChevronUp className="w-8 h-8" />
        </button>
        
        {/* Left button */}
        <button 
          className={`direction-button absolute left-0 top-1/2 transform -translate-y-1/2 ${activeButton === 'left' ? 'bg-opacity-60 scale-105' : ''}`}
          onMouseDown={() => handleButtonPress('left')}
          onMouseUp={handleButtonRelease}
          onTouchStart={() => handleButtonPress('left')}
          onTouchEnd={handleButtonRelease}
        >
          <ChevronLeft className="w-8 h-8" strokeWidth={3} />
        </button>
        
        {/* Center button (Play) */}
        <button 
          className={`play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${activeButton === 'play' ? 'bg-opacity-60 scale-105' : ''}`}
          onMouseDown={() => handleButtonPress('play')}
          onMouseUp={handleButtonRelease}
          onTouchStart={() => handleButtonPress('play')}
          onTouchEnd={handleButtonRelease}
        >
          <Play className="w-8 h-8 fill-current" />
        </button>
        
        {/* Right button */}
        <button 
          className={`direction-button absolute right-0 top-1/2 transform -translate-y-1/2 ${activeButton === 'right' ? 'bg-opacity-60 scale-105' : ''}`}
          onMouseDown={() => handleButtonPress('right')}
          onMouseUp={handleButtonRelease}
          onTouchStart={() => handleButtonPress('right')}
          onTouchEnd={handleButtonRelease}
        >
          <ChevronRight className="w-8 h-8" strokeWidth={3} />
        </button>
        
        {/* Bottom button */}
        <button 
          className={`direction-button absolute bottom-0 left-1/2 transform -translate-x-1/2 ${activeButton === 'down' ? 'bg-opacity-60 scale-105' : ''}`}
          onMouseDown={() => handleButtonPress('down')}
          onMouseUp={handleButtonRelease}
          onTouchStart={() => handleButtonPress('down')}
          onTouchEnd={handleButtonRelease}
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Controller;
