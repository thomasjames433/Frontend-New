"use client";

import React from 'react'

const Services = () => {
    const services = [
        {
          title: "EVENTS",
          image: "/events.png", // Replace with actual image path
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          title: "BRAND ACTIVATION",
          image: "/brandact.png", // Replace with actual image path
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          title: "EXHIBITION",
          image: "/exhibition.png", // Replace with actual image path
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ];
    
      return (
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">LOREM IPSUM</h2>
    
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white shadow-lg rounded-t-[25px] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Services