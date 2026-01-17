import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import panda from "../assets/1.png";
import { FaUser, FaTrash, FaEdit } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          data-aos="fade-up"
          className="bg-amber-600 p-4 rounded-2xl text-center"
        >
          <img src={panda} alt="panda" className="mx-auto rounded-2xl" />
          <h3 className="text-xl font-bold mt-4 italic text-white">Subtitle</h3>
        </div>
        <div
          data-aos="fade-right"
          className="bg-amber-600 p-4 rounded-2xl text-center"
        >
          <img src={panda} alt="panda" className="mx-auto rounded-2xl" />
          <h3 className="text-xl font-bold mt-4">Subtitle</h3>
        </div>
        <div
          data-aos="zoom-out-down"
          className="bg-amber-600 p-4 rounded-2xl text-center"
        >
          <img src={panda} alt="panda" className="mx-auto rounded-2xl" />
          <h3 className="text-xl font-bold mt-4">Subtitle</h3>
        </div>
        <div
          data-aos="fade-up"
          className="bg-amber-600 p-4 rounded-2xl text-center"
        >
          <img src={panda} alt="panda" className="mx-auto rounded-2xl" />
          <h3 className="text-xl font-bold mt-4">Subtitle</h3>
        </div>
      </div>

      {/* Text Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div data-aos="fade-up" className="bg-white p-4 rounded-2xl shadow-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui
            voluptatibus nulla, dolorum pariatur nobis tempora, ea eaque
            perferendis, ullam quae molestiae? Placeat quia quisquam maiores
            praesentium ducimus suscipit itaque.
          </p>
        </div>
        <div data-aos="fade-up" className="bg-white p-4 rounded-2xl shadow-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui
            voluptatibus nulla, dolorum pariatur nobis tempora, ea eaque
            perferendis, ullam quae molestiae? Placeat quia quisquam maiores
            praesentium ducimus suscipit itaque.
          </p>
        </div>
        <div data-aos="fade-up" className="bg-white p-4 rounded-2xl shadow-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui
            voluptatibus nulla, dolorum pariatur nobis tempora, ea eaque
            perferendis, ullam quae molestiae? Placeat quia quisquam maiores
            praesentium ducimus suscipit itaque.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
        <div className="bg-blue-500 p-4 text-white text-center py-2 pt-3 shadow">
          Card 1
        </div>
        <div className="bg-red-500 p-4  text-white text-center py-2 pt-3">
          Card 2
        </div>
        <div className="bg-green-500 p-4 text-white text-center py-2">
          Card 3
        </div>
        <div className="bg-yellow-500 p-4 text-white text-center py-2">
          Card 4
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-4 shadow-md flex items-center gap-2">
          <FaUser className="text-blue-500 text-xl" />
          <span>Text 1</span>
        </div>
        <div className="bg-white p-4 shadow-md flex  items-center gap-2">
          <FaUser className="text-blue-500 text-xl" />
          <span>Text 2</span>
        </div>
        <div className="bg-white p-4 shadow-md">Text 3</div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 lg:col-end-4 gap-6 mt-3 text-center">
        <div className="bg-green-400 py-6 shadow">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            similique inventore voluptatum sequi, unde repellat beatae possimus
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="grid  place-items-center bg-gray-100"
        >
          Your Text
        </div>
        <div data-aos="fade-up" className="bg-green-400 py-6">
          Sab ka Text
        </div>
      </div>
      <div>
        <div className=" flex gap-4  items-center ">
          <button className="flex items-center gap-2 px-4 py-3 my-2 bg-green-800 rounded-2xl cursor-pointer hover:bg-sky-500">
            <FaTrash className="text-white text-xl" />
            <span className="text-white">Submit</span>
          </button>

      

          <button
            className="
        flex items-center gap-2
        px-5 py-3
        bg-gradient-to-r from-red-500 to-red-600
        text-white font-semibold
        rounded-xl
        shadow-lg
        hover:shadow-red-400/50
        transition-all duration-300"
          >
            <FaTrash className="text-lg" />
            Delete
          </button>

          
          <button
            className="
        flex items-center gap-2
        px-5 py-3
        bg-gradient-to-r from-blue-500 to-green-500
        text-white font-semibold
        rounded-xl
        shadow-lg
        hover:shadow-red-400/50
        transition-all duration-300"
          >
            <FaEdit className="text-lg" />
            Delete
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default About;
