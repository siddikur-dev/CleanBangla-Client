import React from "react";

const IssueCard = ({ issue }) => {
  const { title, category, location, description, image, amount, status } =
    issue;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300  border border-gray-100  ">
      {/* --- Issue Image --- */}
      <div className="h-52 bg-gray-100 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Overlay status badge */}
        <div className="absolute top-3 right-3  text-white text-xs font-medium px-2 py-1 rounded-full">
          {status}
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>

        {/* Category & Location in compact format */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <span className="text-gray-500 font-medium w-20">Category:</span>
            <span className="text-gray-800">{category}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 font-medium w-20">Location:</span>
            <span className="text-gray-800">{location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Amount and Action Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="text-left">
            <span className="text-gray-500 text-sm font-medium">Amount</span>
            <div className="text-xl font-bold text-green-600">৳ {amount}</div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
