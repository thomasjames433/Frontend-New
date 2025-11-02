"use client";
import { useState } from "react";

const PopupForm = ({ isOpen, onClose }) => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  // State for loading and submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleBackgroundClick = (e) => {
    if (e.target.id === "popup-container") {
      onClose();
    }
  };

  // Update state when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form redirect
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // ⭐ THIS IS THE KEY CHANGE ⭐
      // We send the data to Formspree using fetch
      const response = await fetch("https://formspree.io/f/xrborkjv", { // <-- PASTE YOUR FORMSPREE URL HERE
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", // Important: Tells Formspree to send a JSON response
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Clear form
        // Optional: close popup after a delay
        setTimeout(() => {
          onClose();
          setSubmitStatus(null); // Reset status for next time
        }, 3000); 
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="popup-container"
      onClick={handleBackgroundClick}
      className={`fixed inset-0 flex items-center justify-center bg-blue-950/60 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } z-[10000]`}
    >
      <div className="bg-white/90 backdrop-blur-lg w-[90%] max-w-md p-6 rounded-lg shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-blue-900 mb-6 text-center">
          Let’s Set the Scene
        </h2>

        {/* Form - now shows success message */}
        {submitStatus === "success" ? (
          <div className="text-center py-4">
            <h3 className="text-lg font-semibold text-green-700">Thank You!</h3>
            <p className="text-gray-600">Your message has been sent.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4"> {/* <-- Use onSubmit */}
            <input
              type="text"
              name="name" // Add name attribute
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone" // Add name attribute
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email" // Add name attribute
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message" // Add name attribute
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while sending
              className="w-full py-2 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send it out!"}
            </button>
            {submitStatus === "error" && (
              <p className="text-red-600 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default PopupForm;