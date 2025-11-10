import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useParams } from "react-router";

const IssueDetails = () => {
  const [detail, setDetail] = useState(null); // object, not array
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/recent-issues/${id}`).then((res) => {
      setDetail(res.data);
    });
  }, [id, axiosSecure]);

  if (!detail) {
    return <p className="text-center py-10">Loading issue details...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6  rounded-lg mt-8">
      {/* Image */}
      {detail.image && (
        <img
          src={detail.image}
          alt={detail.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-2xl font-bold mb-3">{detail.title}</h1>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 text-base-content/70 mb-4">
        <span className="flex items-center gap-1">
          <FaTag className="text-primary/80" /> {detail.category}
        </span>
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-warning" /> {detail.location}
        </span>
        <span className="flex items-center gap-1">
          <FaCalendarAlt className="text-info/90" />{" "}
          {new Date(detail.date).toLocaleDateString()}
        </span>
      </div>

      {/* Description */}
      <p className=" text-base-content/70 leading-relaxed ">
        {detail.description}
      </p>

      {/* Suggested Fix Budget */}
      {detail.amount && (
        <div className="py-5 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-base-content/70">
            Suggested Fix Budget:{" "}
            <span className="text-primary">৳{detail.amount}</span>
          </h3>
        </div>
      )}

      {/* CTA Button */}
      <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium transition">
        Pay Clean-Up Contribution
      </button>
    </div>
  );
};

export default IssueDetails;
