"use client";
import { useRef } from "react";
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

export default function Home() {
  // Creating refs in the parent
  const eventsRef = useRef(null);
  const artistsRef = useRef(null);
  const reviewsRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <div>
      {/* Pass refs to Navbar */}
      <Navbar
        eventsRef={eventsRef}
        artistsRef={artistsRef}
        reviewsRef={reviewsRef}
        teamRef={teamRef}
      />
      
        <Hero/>
        <Services/>

        <div className="fixed top-1/3 right-6 flex flex-col space-y-4">
          <a href="#" className="bg-blue-600 p-3 rounded-full shadow-lg">
            <Image src="/whatsapp.svg" alt="whatsapp" width={24} height={24}/>
          </a>
          <a href="#" className="bg-blue-500 p-3 rounded-full shadow-lg">
            <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>

        {/* Pass refs to sections */}
        <Events ref={eventsRef} />
        <Aboutus/>
        <Artists ref={artistsRef} />
        <Reviews ref={reviewsRef} />
        <Team ref={teamRef} />
        <Footer/>
     
    </div>
  );
}
