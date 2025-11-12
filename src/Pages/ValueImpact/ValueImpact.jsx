import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
import SectionHeader from "../../Component/Shared/SectionHeader";
import {
  FaBroom,
  FaCity,
  FaLeaf,
  FaLightbulb,
  FaRecycle,
  FaTree,
  FaUsers,
} from "react-icons/fa";

const ValueImpact = () => {
  return (
    <div className="bg-base-200 py-20">
      {/* ❤️ Our Core Values */}
      <section className="text-center mb-24">
        <Zoom triggerOnce>
          <SectionHeader title={"Our Core Values"} titleProps={{ className: "text-primary mb-10" }} />
        </Zoom>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaRecycle size={40} className="text-primary" />,
              title: "Responsibility",
              desc: "Cleanliness is everyone's responsibility.",
            },
            {
              icon: <FaLeaf size={40} className="text-success" />,
              title: "Sustainability",
              desc: "We care for the planet and our future.",
            },
            {
              icon: <FaUsers size={40} className="text-info" />,
              title: "Community",
              desc: "Together, we can make a difference.",
            },
            {
              icon: <FaLightbulb size={40} className="text-warning" />,
              title: "Innovation",
              desc: "Creative solutions for a cleaner world.",
            },
          ].map((value, i) => (
            <Fade key={i} triggerOnce>
              <div className="bg-base-100 p-8 rounded-2xl shadow-md border border-base-300 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-2 duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-base-content/70">{value.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* 🌱 Our Impact Section */}
      <section className="relative text-center max-w-6xl mx-auto px-6">
        <Fade direction="up" triggerOnce>
          <SectionHeader
            title={
              <>
                Our <span className="text-primary">Impact</span>
              </>
            }
            description={
              "Together, we’re creating a cleaner, greener, and more responsible Bangladesh — one action at a time."
            }
            titleProps={{ className: "font-extrabold mb-10" }}
            descProps={{ className: "mb-14" }}
          />
        </Fade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: <FaBroom className="text-primary text-4xl" />,
              end: 50,
              label: "Cleaned Areas",
            },
            {
              icon: <FaTree className="text-success text-4xl" />,
              end: 1000,
              label: "Trees Planted",
            },
            {
              icon: <FaUsers className="text-info text-4xl" />,
              end: 500,
              label: "Volunteers",
            },
            {
              icon: <FaCity className="text-warning text-4xl" />,
              end: 10,
              label: "City Campaigns",
            },
          ].map((item, i) => (
            <Fade key={i} direction="up" delay={i * 100} triggerOnce>
              <div className="bg-base-100 p-8 rounded-2xl shadow-md border border-base-300 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-2 duration-300 group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-base-content mb-1">
                  <CountUp end={item.end} duration={2.5} />+
                </h3>
                <p className="text-sm text-base-content/70 font-medium">
                  {item.label}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ValueImpact;
