"use client";
import { forwardRef } from "react";

const Events = forwardRef((props, ref) => {
  const events = [
    {
      title: "Concert 1",
      date: "13 Feb | XYZ Venue",
      image: "/concert1.png", // Replace with actual image path
      link: "#",
    },
    {
      title: "Concert 2",
      date: "13 Feb | XYZ Venue",
      image: "/concert2.png", // Replace with actual image path
      link: "#",
    },
    {
      title: "Concert 3",
      date: "13 Feb | XYZ Venue",
      image: "/concert3.png", // Replace with actual image path
      link: "https://in.linkedin.com/in/thomasjames433",
    }
  ];

  return (
    <section ref={ref} className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Featured Events Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">FEATURED EVENTS</h2>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-lg border rounded-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
                <a href={event.link} className="mt-3 inline-block bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  Get Tickets →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Events;
