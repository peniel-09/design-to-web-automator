
import React, { useState, useEffect } from 'react';
import Controller from '@/components/Controller';
import BalancingBike from '@/components/BalancingBike';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure animation works correctly
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="arduino-bg min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${loaded ? 'animate-fadeIn' : 'opacity-0'}`}>
          
          {/* Left side - Arduino logo and controller */}
          <div className="space-y-12">
            {/* Arduino Logo */}
            <div className="animate-float">
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  {/* Original Arduino logo */}
                  <svg className="w-32 h-32 text-white" viewBox="0 0 720 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M622 336.8c-32.2 0-58.5 26.2-58.5 58.4 0 32.3 26.3 58.5 58.5 58.5 32.3 0 58.5-26.2 58.5-58.5 0-32.2-26.2-58.4-58.5-58.4zm0 98.7c-22.3 0-40.2-17.9-40.2-40.2 0-22.2 18-40.2 40.2-40.2 22.3 0 40.3 18 40.3 40.2 0 22.3-18 40.2-40.3 40.2zm-351-98.7c-32.3 0-58.5 26.2-58.5 58.4 0 32.3 26.2 58.5 58.5 58.5 32.2 0 58.4-26.2 58.4-58.5 0-32.2-26.2-58.4-58.4-58.4zm0 98.7c-22.2 0-40.2-17.9-40.2-40.2 0-22.2 18-40.2 40.2-40.2 22.2 0 40.2 18 40.2 40.2 0 22.3-18 40.2-40.2 40.2zm89.4-53.4h24.5v-18.3h-24.5v18.3zm0 53.4h24.5v-36.4h-24.5v36.4zm172.1-178c-67.3-67.3-179.3-67.3-246.5 0-29.8 29.8-46.8 69.5-48 111.2H0v26.8h237.9c1.2 41.7 18.2 81.4 48 111.3 67.2 67.2 179.2 67.2 246.5 0 67.2-67.3 67.2-179.3 0-246.6l18.2-18.3L532.4 340l18.2-18.2c-5-5-10.3-9.8-15.8-14-40.4-40.4-93.9-62.6-150.8-62.6-56.8 0-110.4 22.2-150.8 62.6-40.3 40.3-62.5 93.9-62.5 150.7 0 56.9 22.2 110.4 62.6 150.8 40.4 40.3 93.9 62.5 150.7 62.5 56.9 0 110.4-22.2 150.8-62.6 83.3-83.3 83.3-219 0-302.3zm-18.2 284c-75.7 75.7-199 75.7-274.7 0-75.7-75.7-75.7-199 0-274.7 75.7-75.7 199-75.7 274.7 0 75.7 75.8 75.7 199 0 274.7zm-433-178h24.5v-18.3h-24.5v18.3zm0 71.7h24.5v-54.8h-24.5v54.8z"/>
                  </svg>
                </div>
                <h1 className="text-white text-5xl font-bold tracking-wide mt-4">ARDUINO</h1>
              </div>
            </div>

            {/* Controller */}
            <div className="py-8">
              <Controller />
            </div>
          </div>
          
          {/* Right side - Balancing Motorcycle */}
          <div className="space-y-6">
            <div className="text-right">
              <h2 className="text-cream text-6xl font-bold leading-tight animate-pulse-slow">
                Balancing
              </h2>
              <h2 className="text-dark-gray text-6xl font-bold leading-tight">
                Motorcycle
              </h2>
            </div>
            
            <div className="mt-8">
              <BalancingBike />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
