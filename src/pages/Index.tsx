
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
                  <svg className="w-32 h-32 text-white" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 10C27.909 10 10 27.909 10 50C10 72.091 27.909 90 50 90C72.091 90 90 72.091 90 50C90 27.909 72.091 10 50 10ZM36 37H42V63H36V37ZM64 37H58V63H64V37ZM50 20C64.359 20 76 31.641 76 46C76 60.359 64.359 72 50 72C35.641 72 24 60.359 24 46C24 31.641 35.641 20 50 20Z" />
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
