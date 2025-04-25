"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar({ eventsRef, artistsRef, reviewsRef, teamRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-opacity-50 text-white px-8 py-4 flex justify-between items-center z-[10000]">
      {/* Logo */}
      <div className="flex items-center relative top-2 right-2 md:right-0 md:left-2 space-x-2">
        <Image src="/magicmakers.svg" alt="Magic Makers Logo" width={150} height={50} priority />
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <button 
        className="md:hidden block focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/menu.svg" alt="Menu" width={40} height={40} />
      </button>

      {/* Navigation Links */}
      <ul className={`md:flex space-x-8 text-lg mx-3 
        ${isOpen ? "absolute top-16 left-0 w-full bg-black bg-opacity-80 p-10 flex flex-col items-start space-y-4 pl-6 h-[300px]" : "hidden md:flex"}`}>
        <li className="cursor-pointer text-xl hover:text-gray-300 relative left-7 md:left-0 px-6" onClick={() => scrollToSection(eventsRef)}>Events</li>
        <li className="cursor-pointer text-xl hover:text-gray-300 px-6" onClick={() => scrollToSection(artistsRef)}>Artists</li>
        <li className="cursor-pointer text-xl hover:text-gray-300 px-6" onClick={() => scrollToSection(artistsRef)}>Campus Ambassador</li>
        <li className="cursor-pointer text-xl hover:text-gray-300 px-6" onClick={() => scrollToSection(reviewsRef)}>Reviews</li>
        <li className="cursor-pointer text-xl hover:text-gray-300 px-6" onClick={() => scrollToSection(teamRef)}>Meet the Team</li>
      </ul>
    </nav>
  );
}
