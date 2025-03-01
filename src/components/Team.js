"use client";
import { forwardRef } from "react";

const teamMembers = [
  {
    name: "Shawn Mendes",
    position: "Something of Something",
    image: "/artist1.png",
  },
  {
    name: "Sabrina Carpenter",
    position: "Something of Something",
    image: "/artist2.png",
  },
  {
    name: "Justin Bieber",
    position: "Something of Something",
    image: "/artist3.png",
  },
  {
    name: "Rose",
    position: "Something of Something",
    image: "/artist4.png",
  },
  {
    name: "Harry Styles",
    position: "Something of Something",
    image: "/artist5.png",
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
              <h3 className="text-white bg-blue-900 px-4 py-1 rounded-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Team;
