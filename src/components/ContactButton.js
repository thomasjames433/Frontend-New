"use client";
import { useState } from "react";
import PopupForm from "./PopupForm";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img src="/ducksend.svg" alt="Send a Message"  onClick={() => setIsOpen(true)}

        className="fixed bottom-6 right-6 text-white w-56 h-20 md:w-72 md:h-20 rounded-full z-[9999]" />

      {isOpen && <PopupForm className='relative z-[999]' isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ContactButton;
