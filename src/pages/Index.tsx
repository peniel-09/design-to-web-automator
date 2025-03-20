
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
            {/* New Arduino Logo */}
            <div className="animate-float">
              <div className="flex flex-col items-start">
                <img 
                  src="/lovable-uploads/2e4c7fed-24cd-4010-84bf-0588482326b4.png" 
                  alt="Arduino Open-Source Community" 
                  className="w-64 h-auto"
                />
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
