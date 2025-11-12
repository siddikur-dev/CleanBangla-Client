import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import SectionHeader from "../../Component/Shared/SectionHeader";

const JoinCleanDrive = () => {
  return (
    <section className="bg-primary/10 py-16 pt-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center"
        >
          <FaHandsHelping className="text-primary text-6xl mb-4" />
          <SectionHeader
            title={"Join Our Next Clean Drive"}
            description={
              "Become a part of our mission to make our communities cleaner and healthier. Every small effort counts — together we can make a big impact!"
            }
          />

          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-500 ease-in-out hover:bg-primary/90 hover:scale-105">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCleanDrive;
