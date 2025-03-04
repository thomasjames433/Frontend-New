"use client";
import { useState } from "react";
import PopupForm from "./PopupForm";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img src="/ducksend.svg" alt="Send a Message"  onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 text-white w-72 h-20 rounded-full" />
      {isOpen && <PopupForm className='relative z-[999]' isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ContactButton;
