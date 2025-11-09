import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import IssueCard from "../IssueCard/IssueCard";

const Allissues = () => {
  const axiosSecure = useAxiosSecure();
  const [issues, setIssues] = useState([]);
  console.log(issues);
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
      <h2 className="text-3xl font-bold text-center mt-12">
        All Reported Issues
      </h2>

      {/* --- Short Description under title --- */}
      <p className="text-center text-base text-base-content/70 max-w-2xl mx-auto pt-3 pb-5">
        Explore all the ongoing issues reported by citizens. You can view
        details, track their status, and stay informed about community
        improvements.
      </p>

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
