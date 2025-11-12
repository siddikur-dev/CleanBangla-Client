import React from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { FaUsers, FaCheckCircle, FaEllipsisH } from "react-icons/fa";

const CommunityStats = () => {
  //   useEffect(() => {
  //     AOS.init({ duration: 1000, once: true });
  //   }, []);

  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-green-600 text-4xl mb-3" />,
      number: 12500,
      label: "Total Users",
      suffix: "+",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-green-600 text-4xl mb-3" />,
      number: 28000,
      label: "Issues Resolved",
      suffix: "+",
    },
    {
      id: 3,
      icon: <FaEllipsisH className="text-yellow-500 text-4xl mb-3" />,
      number: 1200,
      label: "Pending Issues",
      suffix: "+",
    },
  ];

  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* --- Section Header --- */}
        <h2
          data-aos="fade-down"
          className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4  leading-tight"
        >
          Together We <span className="text-primary">Make Change</span>
        </h2>

        <p
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-center text-base text-base-content/70 max-w-2xl mx-auto pt-3 pb-6"
        >
          We're proud to serve thousands of users, helping communities report
          issues and create positive change every day.
        </p>

        {/* --- Stats Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {stats.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="flex flex-col items-center justify-center p-6 bg-base-100 rounded-2xl border-l-4 border-primary/40 shadow-md  hover:border-primary  transform transition-all  hover:shadow-xl duration-300"
            >
              <div className="text-4xl mb-2">{item.icon}</div>

              <h3 className="text-3xl md:text-4xl font-bold mb-1">
                <CountUp
                  end={item.number}
                  duration={5}
                  separator=","
                  suffix={item.suffix}
                />
              </h3>

              <p className="font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
