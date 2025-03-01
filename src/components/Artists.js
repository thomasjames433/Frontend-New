"use client";
import { forwardRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const artists = [
  { id: 1, img: "/artist1.png" },
  { id: 2, img: "/artist2.png" },
  { id: 3, img: "/artist3.png" },
  { id: 4, img: "/artist4.png" },
  { id: 5, img: "/artist5.png" },
];

const Artists = forwardRef((props, ref) => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section ref={ref} className="py-12 px-6 text-center relative pb-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-12">ARTISTS WE'VE FEATURED</h2>

      <div className="relative mt-16 mb-12 flex justify-center items-center">
        {/* Filmstrip SVG */}
        <Image
          src="/moviereel.svg"
          alt="Filmstrip"
          width={1000}
          height={200}
          className="absolute z-0 w-full max-w-4xl"
        />

        {/* Infinite Slider inside Reel */}
        <Slider {...settings} className="relative z-10 w-[80%] max-w-3xl">
          {artists.map((artist) => (
            <div key={artist.id} className="px-2">
              <Image
                src={artist.img}
                alt="Artist"
                width={150}
                height={220} // Increased height
                className="rounded-lg object-cover w-[130px] h-[160px] mx-auto border-4 border-gray-600"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
});

export default Artists;
