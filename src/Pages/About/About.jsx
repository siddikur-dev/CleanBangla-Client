// AboutPage.jsx
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
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

/**
 * Industry-level About Page
 * - Tailwind for layout & styling
 * - AOS for scroll animations (cards, sections)
 * - GSAP for one-time hero entrance polish
 * - Typewriter for cycling titles (one-by-one effect)
 *
 * Required packages:
 * npm i aos gsap react-simple-typewriter react-awesome-reveal react-countup react-icons
 *
 * Note:
 * - Ensure Tailwind is configured in your project.
 * - You can tune AOS settings in useEffect or via data-aos attributes.
 */

/* ---------------------------
   Content data (easily editable)
   --------------------------- */
const STEPS = [
  {
    id: "01",
    title: "Provide Details",
    desc: "Tell us what, where and when — attach a picture if possible.",
    img: "https://images.unsplash.com/photo-1581579185169-4794412f95aa?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "02",
    title: "Choose Plan",
    desc: "Pick a plan or let us recommend the best action for your issue.",
    img: "https://images.unsplash.com/photo-1598514982846-ff367fde25d0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "03",
    title: "We Take Action",
    desc: "Local volunteers & partners step in to clean and restore the area.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c1a1eac?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "04",
    title: "Enjoy & Inspire",
    desc: "Share results, inspire others and help the movement grow.",
    img: "https://images.unsplash.com/photo-1616628188502-fb78dbe7e1f2?auto=format&fit=crop&w=800&q=60",
  },
];

const CORE_VALUES = [
  {
    icon: <FaRecycle size={40} className="text-primary" />,
    title: "Responsibility",
    desc: "Every citizen plays a part.",
  },
  {
    icon: <FaLeaf size={40} className="text-green-500" />,
    title: "Sustainability",
    desc: "Long-term solutions for the planet.",
  },
  {
    icon: <FaUsers size={40} className="text-blue-500" />,
    title: "Community",
    desc: "Together we achieve more.",
  },
  {
    icon: <FaLightbulb size={40} className="text-yellow-500" />,
    title: "Innovation",
    desc: "Creative ways to solve civic issues.",
  },
];

/* ---------------------------
   Component
   --------------------------- */
const AboutPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Initialize AOS (scroll animations)
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true, // animate once
      mirror: false,
    });

    // GSAP hero entrance (one-time)
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="bg-base-200 text-base-content">
      {/* =========================
         HERO / ABOUT US SECTION
         ========================= */}
      <section
        aria-label="About hero"
        className="relative min-h-[72vh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Background image (subtle, blurred) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 filter blur-sm"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OH7nL0RGqUv_aKfuH0hI40zpqbELR7iXlhoi-2psiOTLJML6')",
          }}
          aria-hidden
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/45" aria-hidden />

        {/* Content box */}
        <div
          ref={heroRef}
          className="relative max-w-5xl mx-auto text-left z-10 py-12"
        >
          {/* Typewriter Title (one-by-one) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            <Typewriter
              words={[
                "About Us",
                "The CleanBangla Movement",
                "Join the Change",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </h1>

          {/* Short description */}
          <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed mb-6">
            CleanBangla is a people-first civic movement — reporting issues,
            coordinating local action and building cleaner communities across
            Bangladesh through simple technology and community power.
          </p>

          {/* Call to action (breadcrumb-like) */}
          <div className="flex gap-4 items-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2 text-white font-semibold transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Home
            </a>

            <span className="text-white/70">→</span>

            <button
              className="rounded-full px-6 py-2 bg-transparent border-2 border-white/20 text-white/90 font-medium hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-current="page"
              aria-label="About page"
            >
              About
            </button>
          </div>
        </div>
      </section>

      {/* =========================
         STEPS / HOW IT WORKS
         ========================= */}
      <section
        aria-label="How it works"
        className="py-20 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            <Typewriter
              words={["Get Cleaner Space", "in Four Easy Steps"]}
              loop={true}
              cursor
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1400}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Report an issue, choose a plan, let the community act — then enjoy a
            cleaner space. Simple, transparent, and community-driven.
          </p>
        </div>

        {/* responsive grid of cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s, idx) => (
            <article
              key={s.id}
              className="bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              data-aos-duration="800"
              aria-labelledby={`step-title-${s.id}`}
            >
              <div className="relative h-48">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-primary text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                  {s.id}
                </div>
              </div>

              <div className="p-5">
                <h3
                  id={`step-title-${s.id}`}
                  className="text-lg font-semibold text-gray-900 mb-2"
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block text-sm font-medium text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
         OUR STORY (centered with image)
         ========================= */}
      <section
        aria-label="Our story"
        className="bg-base-200 py-20 px-6 md:px-12"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              <Typewriter words={["Our Story"]} loop={false} cursor />
            </h2>
            <p className="text-base-content/70 leading-relaxed text-[17px] mb-6">
              CleanBangla started when a small group of youth decided to stop
              complaining and start fixing. From one street clean-up to many
              city campaigns, we've grown by mobilizing neighbors, volunteers,
              and local authorities to act together.
            </p>

            <div className="flex gap-8">
              <div>
                <h3 className="text-3xl font-extrabold text-green-500">10k+</h3>
                <p className="text-sm text-base-content/60">Issues Reported</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-green-500">95%</h3>
                <p className="text-sm text-base-content/60">
                  Community Engagement
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="120"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-pBsBzJY9buWVCpBSnMy2VdUwcLBizM_Ww&s"
                alt="Our story"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         MISSION + CORE VALUES
         ========================= */}
      <section
        aria-label="Mission and core values"
        className="bg-base-200 py-20 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-12 items-center">
          {/* Mission image */}
          <div data-aos="fade-right">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0cTLab6CmyNZx5N5vru6Jbjhxt8UJ7cCM2lg9wUi9CfcARhGTWMoyR8Q&s"
              alt="Mission"
              className=" rounded-2xl shadow-2xl object-contain w-96"
              loading="lazy"
            />
          </div>

          {/* Mission text + values */}
          <div data-aos="fade-left" data-aos-delay="80">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              <Typewriter words={["Our Mission"]} loop={false} cursor />
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-6">
              To empower citizens with simple tools to report civic issues,
              encourage transparency, and collaborate with local stakeholders
              for long-term, sustainable improvements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_VALUES.map((v, i) => (
                <div
                  key={i}
                  className="bg-base-200 p-5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="flex items-center gap-4">
                    {v.icon}
                    <div>
                      <h4 className="font-semibold">{v.title}</h4>
                      <p className="text-sm text-base-content/70">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         TEAM
         ========================= */}
      <section className="py-20 px-6 md:px-12 bg-base-200">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            <Typewriter words={["Meet Our Team"]} loop={false} cursor />
          </h2>
          <p className="text-base-content/70 mt-3">
            A small, dedicated team working across cities and communities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sakib Ahmed",
              role: "Founder & Leader",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Nusrat Jahan",
              role: "Coordinator",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Rafiul Islam",
              role: "Campaign Manager",
              img: "https://randomuser.me/api/portraits/men/52.jpg",
            },
          ].map((m, i) => (
            <article
              key={m.name}
              className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/50"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-center">{m.name}</h3>
              <p className="text-primary text-center">{m.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
