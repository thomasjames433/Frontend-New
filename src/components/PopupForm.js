"use client";
import Image from "next/image";

const PopupForm = ({ isOpen, onClose }) => {
  const handleBackgroundClick = (e) => {
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
      } z-[10000]`}
    >
      <div className="relative p-4 w-full flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white text-4xl z-50"
        >
          &times;
        </button>

        {/* Clapperboard & Form */}
        <div className="relative flex flex-col items-center w-full">
          {/* Clapperboard SVG (Scaled Down) */}
          <Image
            src="/clapperboard.svg"
            alt="Clapperboard"
            width={900} 
            height={675} 
            className="w-[80%] max-w-[900px] md:w-[60%] md:max-w-[700px]"
          />

          {/* Black Background (Same Width as Clapperboard) */}
          <div className="bg-white h-28 md:hidden relative w-[80%] max-w-[900px]"></div>

          {/* Form Inside Clapperboard */}
          <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[70%] max-w-[300px] md:max-w-[350px]">
            <form className="relative z-20 bg-opacity-0 bottom-6 md:bottom-0 p-4 rounded-lg">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-3 bg-gray-200 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 mb-3 bg-gray-200 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 mb-3 bg-gray-200 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
              />

              <textarea
                placeholder="Message"
                className="w-full p-2 mb-3 bg-gray-200 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
                rows="3"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-400 px-4 py-2 rounded w-full text-sm font-semibold"
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
