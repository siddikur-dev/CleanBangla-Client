import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
import { FaBroom, FaCity, FaLeaf, FaLightbulb, FaRecycle, FaTree, FaUsers } from "react-icons/fa";

const ValueImpact = () => {
  return (
    <div>
      {/* ❤️ Core Values */}
      <div className="py-16 text-center">
        <Zoom triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Our Core Values
          </h2>
        </Zoom>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              icon: <FaRecycle size={40} className="text-primary" />,
              title: "Responsibility",
              desc: "Cleanliness is everyone's responsibility.",
            },
            {
              icon: <FaLeaf size={40} className="text-green-500" />,
              title: "Sustainability",
              desc: "We care for the planet and our future.",
            },
            {
              icon: <FaUsers size={40} className="text-blue-500" />,
              title: "Community",
              desc: "Together, we can make a difference.",
            },
            {
              icon: <FaLightbulb size={40} className="text-yellow-500" />,
              title: "Innovation",
              desc: "Creative solutions for a cleaner world.",
            },
          ].map((value, i) => (
            <Fade key={i} triggerOnce>
              <div className="bg-base-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                {value.icon}
                <h3 className="text-xl font-semibold mt-4">{value.title}</h3>
                <p className="text-base-content/70 mt-2">{value.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {/* 🌍 Impact Section */}
      <div
        className="relative py-20 text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary-content">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaBroom />, label: "Cleaned Areas", end: 50 },
              { icon: <FaTree />, label: "Trees Planted", end: 1000 },
              { icon: <FaUsers />, label: "Volunteers", end: 500 },
              { icon: <FaCity />, label: "City Campaigns", end: 10 },
            ].map((item, i) => (
              <Fade key={i} triggerOnce>
                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="text-3xl font-bold">
                    <CountUp end={item.end} duration={3} />+
                  </h3>
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueImpact;
