import React, { useEffect, useRef } from "react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import {
  FaRecycle,
  FaLeaf,
  FaUsers,
  FaLightbulb,
  FaBroom,
  FaTree,
  FaCity,
} from "react-icons/fa";
import Faq from "../Faq/Faq";

const steps = [
  {
    id: "01",
    title: "Provide The Details",
    desc: "Fill out a quick form with details about your area, issue, and preferences.",
    img: "https://images.unsplash.com/photo-1581579185169-4794412f95aa?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "02",
    title: "Pick A Suitable Plan",
    desc: "Choose or get a personalized cleaning plan that fits your needs — no hidden fees.",
    img: "https://images.unsplash.com/photo-1598514982846-ff367fde25d0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "03",
    title: "We Take Action",
    desc: "Our volunteers and local teams arrive to clean, inspect, and restore the space.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c1a1eac?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "04",
    title: "You Enjoy & Relax",
    desc: "Enjoy a cleaner, greener community — and inspire others to do the same.",
    img: "https://images.unsplash.com/photo-1616628188502-fb78dbe7e1f2?auto=format&fit=crop&w=800&q=60",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      ".card1",
      { x: -200, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".card2",
        { x: -200, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".card3",
        { x: -200, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) tl.play();
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-base-200 text-base-content">
      {/* About us  Section */}
      <div className="relative min-h-[80vh] bg-base-200 flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-black bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OH7nL0RGqUv_aKfuH0hI40zpqbELR7iXlhoi-2psiOTLJML6')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-left space-y-4">
          <Zoom triggerOnce>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              About Us
            </h1>
          </Zoom>

          <Fade direction="up" triggerOnce>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
              CleanBangla is not just a cleaning platform — it’s a social
              movement. We unite cleanliness, environmental awareness, and human
              responsibility under one vision — to build a cleaner and more
              conscious Bangladesh.
            </p>

            {/* Breadcrumb Button */}
            <button className="btn bg-transparent border-2 border-primary text-white rounded-full px-8 font-semibold shadow-md  transition-all duration-300">
              Home → About
            </button>
          </Fade>
        </div>
      </div>

      {/* 🚶 Steps Section */}
      <section
        ref={sectionRef}
        className="bg-base-200 py-20 px-6 md:px-12 lg:px-24 container mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Get Cleaner <span className="text-green-500">Space</span> In{" "}
            <span className="text-green-500">Four Steps</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Follow these simple steps to report, act, and enjoy a cleaner
            community with CleanBangla.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-base-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-green-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm shadow-lg">
                  {step.id}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧠 Our Story */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <Slide direction="up" triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Story
          </h2>
          <p className="text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            CleanBangla began in 2023 with a group of passionate youth who had
            one simple dream — to see their city cleaner and more beautiful.
            What started small is now spreading across Bangladesh, inspiring
            awareness and action for a better environment.
          </p>
          <img
            src="https://images.unsplash.com/photo-1565372918679-bbe6e8e9e31f?auto=format&fit=crop&w=900&q=80"
            alt="Our Story"
            className="mt-8 rounded-2xl shadow-xl mx-auto hover:scale-[1.02] transition-transform duration-300"
          />
        </Slide>
      </div>

      {/* 🚀 Mission Section */}
      <div className="bg-base-100 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <Slide direction="left" triggerOnce>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
              alt="Mission"
              className="rounded-2xl shadow-lg"
            />
          </Slide>
          <Slide direction="right" triggerOnce>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-base-content/70 leading-relaxed">
                To make every citizen more responsible for their surroundings
                and to build a cleaner, sustainable, and conscious society.
              </p>
            </div>
          </Slide>
        </div>
      </div>

      {/* 👥 Team Section */}
      <div className="py-16 text-center bg-base-100">
        <Zoom triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
            Meet Our Team
          </h2>
        </Zoom>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              name: "Sakib Ahmed",
              role: "Founder & Leader",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
              quote: "Together we can transform our cities.",
            },
            {
              name: "Nusrat Jahan",
              role: "Coordinator",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
              quote: "Cleanliness begins with me.",
            },
            {
              name: "Rafiul Islam",
              role: "Campaign Manager",
              img: "https://randomuser.me/api/portraits/men/52.jpg",
              quote: "Every small action counts.",
            },
          ].map((member, i) => (
            <Slide key={i} direction="up" triggerOnce>
              <div className="bg-base-200 p-6 rounded-2xl shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/50"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="text-base-content/70 italic mt-2">
                  “{member.quote}”
                </p>
              </div>
            </Slide>
          ))}
        </div>
      </div>

      <Faq />
    </div>
  );
};

export default About;
