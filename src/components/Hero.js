import React from 'react';


const Hero = () => {
  return (
    <div 
      className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center text-center px-6 z-0"
      style={{ backgroundImage: "url('/hero.png')" }}
    > 
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Your Go-To Event Management Experts!</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Hero;
