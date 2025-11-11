import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Typewriter } from "react-simple-typewriter";
import IssueCard from "../IssueCard/IssueCard";

const Allissues = () => {
  const axiosSecure = useAxiosSecure();
  const [issues, setIssues] = useState([]);

  // get all issues
  useEffect(() => {
    axiosSecure.get("/all-issues").then((data) => {
      setIssues(data.data);
    });
  }, [axiosSecure]);
  return (
    <div className="container mx-auto ">
      {/* Helmet title */}
      <title>All Issues - CleanBangla</title>
      {/* --- Section Title --- */}
      <div data-aos="fade-right">
        <h2 className="text-3xl font-bold text-center mt-12">
          Discover & Support{" "}
          <span className="text-primary">
            <Typewriter
              words={["Reported Issues", "Local Problems", "Community Efforts"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>

      {/* --- Short Description under title --- */}
      <div data-aos="fade-left">
        <p className="text-center text-base-content/70 max-w-2xl mx-auto pt-3 pb-5">
          Explore all the ongoing issues reported by citizens. You can view
          details, track their status, and stay informed about community
          improvements.
        </p>
      </div>
      {/* --- Issue Cards Grid --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
        {/* Loop through all issues and render IssueCard for each */}
        {issues.map((issue) => (
          <IssueCard issue={issue} key={issue._id}></IssueCard>
        ))}
      </div>
    </div>
  );
};

export default Allissues;
