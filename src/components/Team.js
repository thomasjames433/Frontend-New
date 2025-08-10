"use client";
import { forwardRef } from "react";

const teamMembers = [
  {
    name: "Abhijith Cheruvatt",
    position: "CEO",
    image: "/Abhijith.png",
  },
  {
    name: "Jose Tom",
    position: "COO",
    image: "/Jose.png",
  },
  {
    name: "Abhishek Kurian",
    position: "CMO",
    image: "/Abhishek.png",
  },
  {
    name: "Mathew Davis",
    position: "SFO",
    image: "/Mathew.png",
  },
  {
    name: "Amal K",
    position: "CTO",
    image: "/Amal.png",
  },
  {
    name: "Akash Suresh",
    position: "CDO",
    image: "/Akash.png",
  },
  {
    name: "Jonathan Cijo Jose",
    position: "CPO",
    image: "/Jonathan.jpeg",
  },
  {
    name: "Tresa Maria Biju",
    position: "CIO",
    image: "/Tresa.png",
  },
];

const Team = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-12 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">MEET THE TEAM</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 transition-all duration-300 hover:border-4 hover:border-blue-500"
            />
            <div className="mt-3">
              <h3 className="text-blue-900 bg-white px-4 py-1 rounded-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Team;
