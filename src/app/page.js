"use client";
import { useState, useRef } from "react";
import Image from "next/image";

import Events from "@/components/Events";
import Artists from "@/components/Artists";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import PopupForm from "@/components/PopupForm"; // Import popup

export default function Home() {
  // Creating refs in the parent
  const eventsRef = useRef(null);
  const artistsRef = useRef(null);
  const reviewsRef = useRef(null);
  const teamRef = useRef(null);

  // State to handle popup visibility
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      {/* Pass refs to Navbar */}
      <Navbar
        eventsRef={eventsRef}
        artistsRef={artistsRef}
        reviewsRef={reviewsRef}
        teamRef={teamRef}
      />

      <Hero />
      <Services />

      {/* Floating Buttons for Social Media and Contact */}
      <div className="fixed top-24 right-6 md:top-1/3 md:right-6 flex flex-col space-y-4 z-[9999]">
        <a href="#" className="bg-blue-600 p-3 rounded-full shadow-lg">
          <Image src="/whatsapp.svg" alt="whatsapp" width={24} height={24} />
        </a>
        <a href="#" className="bg-blue-500 p-3 rounded-full shadow-lg">
          <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
        </a>
      </div>
        <button onClick={() => setPopupOpen(true)}>
          <ContactButton className="fixed z-[9999]" />
        </button>

      {/* Sections with refs */}
      <div className="xl:flex xl:flex-row">
        <Events ref={eventsRef} />
        <Aboutus />
        <img src="/aboutus.svg" alt="About Us" className="hidden xl:block xl:mr-0 ml-auto h-[800px] w-[520px]" />
      </div>
      <Artists ref={artistsRef} />
      <Reviews ref={reviewsRef} />
      <Team ref={teamRef} />
      <Footer />

      {/* **PopupForm should be at the end to overlay everything** */}
      
    </div>
  );
}
