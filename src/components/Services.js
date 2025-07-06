"use client";

import React from 'react'

const Services = () => {
    const services = [
        {
          title: "CORPORATE EVENTS",
          image: "/events.png", // Replace with actual image path
          description: "From concerts and college fests, to corporate events and to private celebrations, we manage everything to ensure your event is smooth, engaging, and unforgettable."
        },
        {
          title: "BRAND ACTIVATION",
          image: "/brandact.png", // Replace with actual image path
          description: "We bring your brand to life with immersive activations, campus engagements, and innovative promotions that connect with your audience."
        },
        {
          title: "EXHIBITION",
          image: "/exhibition.png", // Replace with actual image path
          description: "Seamless management of exhibitions with expert stall planning, on-ground support, and audience engagement to ensure your brand stands out."
        }
      ];
    
      return (
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">WHAT WE OFFER</h2>
    
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