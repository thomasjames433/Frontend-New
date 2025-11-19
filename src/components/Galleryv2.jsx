"use client"
import { useState,forwardRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs, FreeMode, Controller } from "swiper/modules"

import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/thumbs"

import styles from "./gallery.module.css"

const GalleryImages = [
  {
    id: 1,
    src: "/IMG_1008.JPG",
    alt: "A musician playing a bass guitar on a brightly lit stage.",
  },
  {
    id: 2,
    src: "/IMG_1006.JPG",
    alt: "A silhouette of a person in a crowd at a concert.",
  },
  {
    id: 3,
    src: "/IMG_1007.JPG",
    alt: "A large, artistic sculpture of a blue and orange octopus.",
  },
  {
    id: 4,
    src: "/IMG_1005.JPG",
    alt: "Students participating in a workshop event.",
  },
  
];

const Gallery = forwardRef((props, ref) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [mainSwiper, setMainSwiper] = useState(null)

  const slideNext = () => {
    mainSwiper?.slideNext()
    thumbsSwiper?.slideNext()
  }
  const slidePrev = () => {
    mainSwiper?.slidePrev()
    thumbsSwiper?.slidePrev()
  }

  return (
    <div ref={ref}  className=" my-auto mb-14" id="galleryx" >
      <div className={styles.container}>
<div className="flex justify-center items-center px-4 sm:px-8 lg:px-16 sm:py-12">
  <p className="text-center max-w-3xl text-gray-700  plus-jakarta leading-relaxed tracking-wide font-light ">
    <span className="font-bold text-blue-900  text-4xl block mb-6 sm:mb-10">
      A SNEEK PEAK
    </span>
  </p>
</div>


        <div className={styles["gallery-container"]}>
          <Swiper
            modules={[Thumbs, Controller, FreeMode]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            onSwiper={setMainSwiper}
            direction="horizontal"
            slidesPerView="auto"
            loop={true}
            centeredSlides={true}
            spaceBetween={10}
            breakpoints={{ 514: { spaceBetween: 32 } }}
            className={styles["horizontal-swiper"]}
          >
            {GalleryImages.map((img) => (
              <SwiperSlide key={img.id} className={styles["swiper-slide"]}>
                <img src={img.src} alt={img.alt} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[FreeMode, Thumbs, Controller]}
            onSwiper={setThumbsSwiper}
            direction="vertical"
            slidesPerView={4}
            watchSlidesProgress={true}
            loop={true}
            centeredSlides={true}
            spaceBetween={6}
            freeMode={true}
            className={styles["vertical-swiper"]}
            breakpoints={{ 514: { slidesPerView: 5 } }}
            grabCursor={true}
          >
            {GalleryImages.map((img) => (
              <SwiperSlide key={img.id} className={styles["vertical-swiper-slide"]}>
                <img src={img.src} alt={img.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex mx-auto gap-5 mt-10">
          <button className="rounded-full p-2 transition-all duration-300 border border-gray-400 " onClick={slidePrev}>
           <ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6   text-gray-700" />
          </button>
          <button className="rounded-full p-2 transition-all duration-300 border border-gray-400"onClick={slideNext}>
            <ChevronRightIcon className="h-4 w-4 sm:h-6 sm:w-6  text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
});
export default Gallery;
