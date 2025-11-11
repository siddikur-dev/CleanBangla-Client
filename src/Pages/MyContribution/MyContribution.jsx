import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import { FaDownload, FaRegCalendarAlt } from "react-icons/fa";

const MyContribution = () => {
  const [contributions, setContributions] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch logged-in user's contributions
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/all-contributions?email=${user.email}`).then((res) => {
        setContributions(res.data);
      });
    }
  }, [user, axiosSecure]);

  // Download report
  const handleDownload = (item) => {
    const content = `
    Issue Title: ${item.issueTitle}
    Category: ${item.category}
    Amount Paid: ৳${item.amount}
    Date: ${new Date(item.date).toLocaleDateString()}
    Status: ${item.status}
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${item.issueTitle}-report.pdf`;
    link.click();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center">
        My <span className="text-primary">Contributions</span>
      </h2>

      {contributions.length === 0 ? (
        <div className="bg-base-200 p-12 rounded-xl text-center text-base-content/70 shadow-lg animate-fadeIn">
          ❌ No Contributions Yet <br />
          <span className="text-sm text-base-content/50 mt-2 inline-block">
            You haven’t supported any issue so far.
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((item) => (
            <div
              key={item._id}
              className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.issueTitle}
                </h3>
                <p className="text-sm text-base-content/70 capitalize mb-2">
                  Category:{" "}
                  <span className="text-primary">{item.category}</span>
                </p>
                <p className="text-base font-semibold text-primary mb-2">
                  Paid Amount: ৳{item.amount}
                </p>
                <p className="text-sm text-base-content/60 flex items-center gap-1">
                  <FaRegCalendarAlt />{" "}
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>

              <button
                onClick={() => handleDownload(item)}
                className="mt-4 w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <FaDownload /> Download Report
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyContribution;
