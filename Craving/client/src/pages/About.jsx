import React, { useState } from "react";

import slide1 from "../assets/images .jpg";
import slide2 from "../assets/1.png";
import slide3 from "../assets/1.png";

const slides = [
  { title: "First Slide", image: slide1 },
  { title: "Second Slide", image: slide2 },
  { title: "Third Slide", image: slide3 },
];

const About = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <a
                className="link text-base-content text-xl font-bold no-underline"
                href="#"
              >
                FlyonUI
              </a>
            </div>
          </div>

          <div className="md:navbar-end grow ">
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base flex items-center justify-end me-10">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="container mx-auto mt-10">
        <div className="relative w-full h-64 overflow-hidden rounded-xl">

          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-full shadow"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-full shadow"
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
