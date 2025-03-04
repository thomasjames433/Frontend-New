"use client";
import Image from "next/image";

const PopupForm = ({ isOpen, onClose }) => {
  const handleBackgroundClick = (e) => {
    // Prevent closing if clicking inside the form
    if (e.target.id === "popup-container") {
      onClose();
    }
  };

  return (
    <div
      id="popup-container"
      onClick={handleBackgroundClick}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } z-[999]`}
    >
      <div className="relative p-6 w-full flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-white text-4xl z-50"
        >
          &times;
        </button>

        {/* **Clapperboard & Black Background for Mobile** */}
        <div className="relative flex flex-col items-center w-full">
          {/* Clapperboard SVG */}
          <Image
            src="/clapperboard.svg"
            alt="Clapperboard"
            width={1200}
            height={900}
            className="w-[90%] max-w-[1200px] md:w-[70%] md:max-w-[800px]"
          />

          {/* **Black Background (Same Width as Clapperboard)** */}
          <div className="bg-black h-36 md:hidden relative left-1 sm:left-2 w-[84%] max-w-[1200px]"></div>

          {/* **Form Inside Clapperboard (Small & Centered)** */}
          <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 w-[75%] max-w-[320px] md:max-w-[400px]">
            <form className="relative z-20 bg-black bg-opacity-0 bottom-7 md:bottom-4 lg:top-1 xl:top-6 p-4 rounded-lg">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 mb-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 mb-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
              />

              <textarea
                placeholder="Message"
                className="w-full p-2 mb-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
                rows="3"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded w-full text-sm font-semibold"
              >
                Send it out!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
