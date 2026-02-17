import React from "react";

const About = () => {
  return (
    <>
     
      
      <div className="container mx-auto mt-10 px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          About Cravings
        </h1>

        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-4">
          Cravings is your ultimate app to explore and satisfy your food desires! 
          From discovering new dishes to finding local favorites, we make your 
          culinary journey simple and delightful.
        </p>

        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
          Whether you're at home or traveling, Cravings helps you locate the best
          restaurants, track your favorite meals, and share your food experiences
          with friends. Your cravings, our mission!
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Cravings App"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default About;
