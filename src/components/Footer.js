"use client";
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-center md:text-left">
            
            {/* Left Side - Description */}
            <div className='m-3'>
              <h3 className="text-xl font-semibold mb-4">Let’s Make It Happen!</h3>
              <p className="text-gray-300">
                With exceptional experiences that blend creativity, precision, and heartfelt passion, just sit back, relax, 
                and let us conjure up that magic that’ll make your moments memorable.
              </p>
              <div className="mt-4 flex items-center justify-center md:justify-start">
                <span className="text-lg">📍</span>
                <p className="ml-2 text-gray-300">899 Tracey Falls, South Lizette, PA 45407-8732</p>
              </div>
            </div>
    
            {/* Right Side - Contact Details */}
            <div className='md:ml-32'>
              <h3 className="text-xl font-semibold mb-4">Contact Us at</h3>
              <div className="flex flex-col space-y-2">
                <p className="flex items-center justify-center md:justify-start">
                  ✉️ <a href="mailto:live.magicmakers@gmail.com" className="ml-2 text-gray-300 hover:text-white">live.magicmakers@gmail.com</a>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  📞 <span className="ml-2 text-gray-300">(+91) 8281504939</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  📞 <span className="ml-2 text-gray-300">(+91) 9400422106</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  📸 <span className="ml-2 text-gray-300">@magicmakerslive</span>
                </p>
              </div>
            </div>
          </div>
    
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm mt-6">
            Copyright © 2025 | Magic Makers
          </div>
        </footer>
      );
}

export default Footer