import React from "react";
import { FaTruck, FaShieldAlt, FaSmile, FaGift } from "react-icons/fa";
import Newsletter from "../NewsLetter/NewsLetter";

const Feature = () => {
  return (
    <div className="w-full bg-base-200">
      {/* Helmet */}
      <title>Feature - Toy Universe</title>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-10  container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 heading-font">
            Why
            <span className="text-secondary"> Choose </span>
            Us
          </h2>
          <p className="text-lg font-medium">
            Bringing happiness, creativity, and learning to every child’s
            playtime.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="p-6 border-t-4 border-primary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70 ">
            <div className="flex justify-center mb-4">
              <FaGift className="text-5xl text-primary  transition-colors duration-300" />
            </div>
            <h3
              className="text-xl font-semibold mb-2 
             transition-colors duration-300"
            >
              Wide Variety
            </h3>
            <p className="text-sm md:text-base transition-colors duration-300">
              Explore our collection of fun, educational, and creative toys for
              every child.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border-t-4 border-secondary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70">
            <div className="flex justify-center mb-4">
              <FaShieldAlt className="text-5xl text-secondary" />
            </div>
            <h3 className="text-xl font-semibold  mb-2">Safe & Non-Toxic</h3>
            <p className=" text-sm md:text-base">
              All our toys are made from non-toxic materials to ensure your
              child’s safety.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border-t-4 border-primary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70">
            <div className="flex justify-center mb-4">
              <FaTruck className="text-5xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className=" text-sm md:text-base">
              Quick and reliable delivery to your doorstep all over Bangladesh.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 border-t-4 border-secondary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70">
            <div className="flex justify-center mb-4">
              <FaSmile className="text-5xl text-secondary" />
            </div>
            <h3 className="text-xl font-secondary  mb-2">Happy Customers</h3>
            <p className=" text-sm md:text-base">
              Thousands of happy parents trust ToyTopia for quality and
              joy-filled playtime.
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      {/*  */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Feature;
