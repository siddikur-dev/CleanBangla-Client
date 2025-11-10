import React from "react";
import { FaTrash, FaHammer, FaBuilding, FaRoad } from "react-icons/fa";

const RecentComplainCard = () => {
  const categoriesButton = [
    {
      name: "Garbage",
      icon: <FaTrash />,
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Illegal Construction",
      icon: <FaBuilding />,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Broken Public Property",
      icon: <FaHammer />,
      color: "bg-blue-100 text-blue-700",
    },
    { name: "Road Damage", icon: <FaRoad />, color: "bg-red-100 text-red-700" },
  ];
  return (
    <div className="container mx-auto">
      {/* 4 category card */}
      <section className="py-10 px-6 bg-base-100">
        <h2 className="text-3xl font-bold text-center mt-12 pb-3">
          Report Community Issues
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pb-5">
          {categoriesButton.map((cat, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl shadow-md hover:scale-105 transition-all duration-300 ${cat.color}`}
            >
              <div className="text-4xl">{cat.icon}</div>
              <span className="font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentComplainCard;
