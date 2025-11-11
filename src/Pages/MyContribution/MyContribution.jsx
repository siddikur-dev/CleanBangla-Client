import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import { FaDownload, FaRegCalendarAlt } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const MyContribution = () => {
  const [contributions, setContributions] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 800, offset: 80 });
  }, []);

  // Fetch logged-in user's contributions
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/all-contributions?email=${user.email}`).then((res) => {
        setContributions(res.data);
      });
    }
  }, [user, axiosSecure]);

  // Download PDF report
  const handleDownload = (item) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Cleanup Contribution Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`Issue Title: ${item.issueTitle}`, 14, 35);
    doc.text(`Category: ${item.category}`, 14, 45);
    doc.text(`Description: ${item.description || "N/A"}`, 14, 55);
    doc.text(`Amount Paid: ৳${item.amount}`, 14, 65);
    doc.text(`Date: ${new Date(item.date).toLocaleDateString()}`, 14, 75);
    doc.text(`Status: ${item.status || "Completed"}`, 14, 85);

    doc.save(`${item.issueTitle}-report.pdf`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Typewriter Heading */}
      <div data-aos="zoom-in-up">
        <h2 className="text-3xl font-bold text-center">
          My
          <span className="text-primary">
            <Typewriter
              className
              words={[" Contributions", " Cleanup Support", " Payments"]}
              cursor
              loop={true}
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
      </div>

      {contributions.length === 0 ? (
        <div
          data-aos="fade-up"
          className="bg-base-200 p-12 rounded-xl text-center text-base-content/70 shadow-lg"
        >
          ❌ No Contributions Yet <br />
          <span className="text-sm text-base-content/50 mt-2 inline-block">
            You haven’t supported any issue so far.
          </span>
        </div>
      ) : (
        <div
          data-aos="fade-up"
          className="overflow-x-auto shadow-lg rounded-xl"
        >
          <table className="table w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th>Issue Title & Description</th>
                <th className="hidden sm:table-cell">Category</th>
                <th className="hidden sm:table-cell">Paid Amount</th>
                <th className="hidden sm:table-cell">Date</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {contributions.map((item) => (
                <tr
                  key={item._id}
                  data-aos="fade-up"
                  className="hover:bg-base-200 transition-all duration-300"
                >
                  <td>
                    <p className="font-semibold text-base">{item.issueTitle}</p>
                  </td>

                  {/* Hide in mobile */}
                  <td className="capitalize hidden sm:table-cell">
                    {item.category}
                  </td>
                  <td className="text-primary font-semibold hidden sm:table-cell">
                    ৳{item.amount}
                  </td>
                  <td className="flex items-center gap-2 hidden sm:table-cell">
                    <FaRegCalendarAlt className="text-primary" />
                    {new Date(item.date).toLocaleDateString()}
                  </td>

                  {/* Always visible */}
                  <td>
                    <button
                      onClick={() => handleDownload(item)}
                      className="bg-primary text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-primary/90 text-sm"
                    >
                      <FaDownload /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyContribution;
