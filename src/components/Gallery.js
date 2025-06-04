'use client';

import { useRef, useState, forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const Gallery = forwardRef((props, ref) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = Array(7).fill("/gallerypic1.png");

  return (
    <div ref={ref} className="md:h-[60vh] md:relative md:top-8 w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">A SNEAK PEEK...</h2>

      <div className="relative w-full max-w-6xl">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay]}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="w-full"
        >
          {images.map((src, index) => {
            const total = images.length;
            const distance = (index - activeIndex + total) % total;
            const relativePos = distance > total / 2 ? distance - total : distance;

            let scaleClass = "scale-90 opacity-70 z-0";
            if (relativePos === 0) scaleClass = "scale-110 z-30";
            else if (Math.abs(relativePos) === 1) scaleClass = "scale-94 opacity-60 z-20";
            else if (Math.abs(relativePos) === 2) scaleClass = "scale-90 opacity-40 z-10";

            return (
              <SwiperSlide key={index} className="!flex justify-center h-80">
                <div
                  className={`transition-transform duration-500 transform ${scaleClass} 
                    rounded-xl shadow-md border-2 border-blue-400 overflow-hidden`}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    width={180}
                    height={280}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation buttons below */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-blue-600 text-3xl hover:scale-110 transition-transform"
          >
            &#8592;
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-blue-600 text-3xl hover:scale-110 transition-transform"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
});

export default Gallery;
