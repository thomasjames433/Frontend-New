"use client";
import { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Thomas James",
    position: "NITC",
    image: "/angelayu.png",
    text: "MME turned our college fest into a spectacular event, managing every detail with professionalism and creativity. Highly recommended!",
  },
  {
    id: 1,
    name: "Thomas James",
    position: "NITC",
    image: "/angelayu.png",
    text: "MME turned our college fest into a spectacular event, managing every detail with professionalism and creativity. Highly recommended!",
  },
];

const Reviews = forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section ref={ref} className="pb-12 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">REVIEWS</h2>

      <div className="w-full max-w-3xl">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8 text-center md:text-left">
              {/* Profile Image & Info */}
              <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                />
                <div className="mt-4 md:mt-0">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-500">{review.position}</p>
                </div>
              </div>

              {/* Review Text */}
              <div className="max-w-lg border-l-4 border-blue-500 pl-4 mt-4 md:mt-0">
                <p className="text-lg text-gray-700 italic">“{review.text}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
});

export default Reviews;
