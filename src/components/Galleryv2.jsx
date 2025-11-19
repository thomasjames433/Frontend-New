import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const GalleryImages = [
  {
    id: 1,
    src: "/IMG_1008.JPG",
    alt: "A musician playing a bass guitar on a brightly lit stage.",
    title: "Live Performance"
  },
  {
    id: 2,
    src: "/IMG_1006.JPG",
    alt: "A silhouette of a person in a crowd at a concert.",
    title: "Concert Vibes"
  },
  {
    id: 3,
    src: "/IMG_1007.JPG",
    alt: "A large, artistic sculpture of a blue and orange octopus.",
    title: "Art Installation"
  },
  {
    id: 4,
    src: "/IMG_1005.JPG",
    alt: "Students participating in a workshop event.",
    title: "Workshop"
  },
];

export default function ModernGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GalleryImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GalleryImages.length) % GalleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 mt-3">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold  text-blue-900 mb-4">
          A SNEAK PEEK
        </h2>
        <p className="text-gray-600 text-lg">Explore our curated moments</p>
      </div>

      {/* Main Gallery Container */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Main Image Display */}
          <div 
            className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-white"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative w-full h-full">
              {GalleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Image Title */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm text-gray-200">{index + 1} / {GalleryImages.length}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${
                isHovering ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={goToNext}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${
                isHovering ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsFullscreen(true)}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${
                isHovering ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="View fullscreen"
            >
              <ZoomIn className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            {GalleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-4 ring-blue-500 scale-110 shadow-xl'
                    : 'ring-2 ring-gray-200 hover:ring-blue-300 hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-blue-500/20" />
                )}
              </button>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {GalleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-gray-300 hover:bg-blue-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-7xl max-h-[90vh] relative">
            <img
              src={GalleryImages[currentIndex].src}
              alt={GalleryImages[currentIndex].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              
              <p className="text-gray-300 text-sm">
                {currentIndex + 1} of {GalleryImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}