"use client";
import { useState } from "react";
import PopupForm from "./PopupForm";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Send Us a Message
      </button>
      {isOpen && <PopupForm className='relative z-[999]' isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ContactButton;
