import React, { useEffect, useState } from "react";
import { FaTrash, FaBuilding, FaHammer, FaRoad } from "react-icons/fa";
import useAxiosSecure from "../../hook/useAxiosSecure";
import RecentComplaintsCards from "./RecentComplaintsCards";

const RecentComplaints = () => {
  const categories = [
    {
      id: 1,
      name: "Garbage",
      icon: <FaTrash />,
      bg: "bg-green-100",
      text: "text-primary",
      description: "Report garbage accumulation or unclean areas.",
    },
    {
      id: 2,
      name: "Illegal Construction",
      icon: <FaBuilding />,
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      description: "Report any unauthorized construction activities.",
    },
    {
      id: 3,
      name: "Broken Public Property",
      icon: <FaHammer />,
      bg: "bg-blue-100",
      text: "text-blue-700",
      description: "Report broken benches, lights, or other public assets.",
    },
    {
      id: 4,
      name: "Road Damage",
      icon: <FaRoad />,
      bg: "bg-red-100",
      text: "text-red-700",
      description: "Report potholes, cracks, or damaged roads.",
    },
  ];
  const [recentIssues, setRecentIssues] = useState([]);
  const axiosSecure = useAxiosSecure();
  // fetch recent 6 issues
  useEffect(() => {
    axiosSecure.get("/recent-issues").then((data) => {
      setRecentIssues(data.data);
    });
  }, [axiosSecure]);

  return (
    <div className="container mx-auto bg-base-200">
      <section className="py-10 px-6 ">
        {/* Title */}
        <div data-aos="zoom-in-right">
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-12 pb-3">
            Report Community Issues
          </h2>
        </div>

        {/* Description */}
        <div data-aos="zoom-in-left">
          <p className="text-center text-base text-base-content/70 max-w-2xl mx-auto pt-3 pb-5">
            Select a category to view or report issues. Explore different types
            of community problems easily.
          </p>
        </div>

        {/* Category Cards */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1700"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl shadow-md 
                  transform transition-all duration-300 ${cat.bg} hover:scale-105 hover:shadow-lg `}
              >
                <div className={`text-4xl ${cat.text}`}>{cat.icon}</div>
                <h3 className="font-semibold text-center">{cat.name}</h3>
                <p className="text-sm text-center ">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Recent Complaints six card */}
      <div data-aos="fade-up-left" className="mt-24">
        <h2 className="text-3xl font-bold text-center mt-12">
          Our Recent Complaints
        </h2>
      </div>
      <div data-aos="fade-up-right">
        <p className="text-center text-base text-base-content/70 max-w-2xl mx-auto pt-3 pb-5">
          Explore the latest issues reported by the community. Stay informed and
          track ongoing complaints effectively.
        </p>
      </div>
      {/* Recent issues */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
        {recentIssues.map((issue) => (
          <RecentComplaintsCards
            issue={issue}
            key={issue._id}
          ></RecentComplaintsCards>
        ))}
      </div>
    </div>
  );
};

export default RecentComplaints;
