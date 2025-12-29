import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import computer from "../../assets/computer.png";
import phone from "../../assets/phone.png";
import headphone from "../../assets/headphone.png";
import keyboard from "../../assets/keyboard.png";
import camera from "../../assets/camera.png";
import tv from "../../assets/tv.png";

import "swiper/css";

const categories = [
  { title: "Computer & Laptop", image: computer },
  { title: "SmartPhone", image: phone },
  { title: "Headphones", image: headphone },
  { title: "KeyBoard & Mouse", image: keyboard },
  { title: "Camera & Photo", image: camera },
  { title: "TV & Homes", image: tv },
];

const Category = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Shop with Categories
            </h2>
            <div className="w-12 h-1 bg-orange-500 mt-2 rounded-full"></div>
          </div>
          
          {/* Desktop Navigation Buttons */}
          <div className="hidden sm:flex gap-2">
            <button className="category-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
              <HiOutlineChevronLeft size={20} />
            </button>
            <button className="category-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
              <HiOutlineChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={20}
            navigation={{
              prevEl: ".category-prev",
              nextEl: ".category-next",
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="pb-4"
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-transparent hover:border-orange-200 hover:bg-white hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
                >
                  <div className="w-20 h-20 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <p className="text-sm font-bold text-gray-800 group-hover:text-orange-500 transition-colors line-clamp-1">
                    {item.title}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Category;