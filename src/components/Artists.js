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
    responsive: [
      {
        breakpoint: 630, // Mobile screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section ref={ref} className="py-12 px-6 text-center relative pb-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-28 lg:mb-12">
        ARTISTS WE'VE FEATURED
      </h2>

      <div className="relative mt-16 mb-12 flex justify-center items-center">
        {/* Left-end SVG (larger Movie Reel Circle) */}
        <div className="relative right-96 z-20 hidden lg:block md:w-64 md:h-72">
          <Image
            src="/moviereelcircle.svg"
            alt="Filmstrip Circle"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        {/* Filmstrip as repeating background */}
        <div
          className="
            absolute z-0 overflow-hidden
            -left-6 -right-6 lg:left-[20rem]
            h-[200px] sm:h-[250px]
            bg-left-top bg-repeat-x
            bg-[length:auto_200px] sm:bg-[length:auto_250px]
          "
          style={{ backgroundImage: "url('/moviereel.svg')" }}
        />

        {/* Infinite Slider inside Reel */}
        <div
          className="
            absolute z-10 inset-y-0
            -left-6 -right-6 lg:left-[20rem]
            flex items-center
          "
        >
          <div className="w-full">
            <Slider {...settings}>
              {artists.map((artist) => (
                <div key={artist.id} className="px-2">
                  <Image
                    src={artist.img}
                    alt="Artist"
                    width={240}
                    height={300}
                    className="
                      rounded-lg object-cover
                      w-[120px] h-[160px]
                      sm:w-[160px] sm:h-[180px]
                      mx-auto border-4 border-gray-600
                    "
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Artists;
