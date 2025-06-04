"use client";

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
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } z-[10000]`}
    >
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-2xl relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-blue-900 mb-6">
          Let’s Set the Scene
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors"
          >
            Send it out!
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
