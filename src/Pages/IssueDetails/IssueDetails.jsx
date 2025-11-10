import React, { useEffect, useState, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaMoneyBillWave,
} from "react-icons/fa";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

const IssueDetails = () => {
  const [detail, setDetail] = useState(null);
  const [contributors, setContributors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  // Fetch issue details
  useEffect(() => {
    axiosSecure.get(`/recent-issues/${id}`).then((res) => {
      setDetail(res.data);
    });
  }, [id, axiosSecure]);

  // Fetch contributors for this issue
  useEffect(() => {
    axiosSecure.get(`/all-contributions/${id}`).then((data) => {
      setContributors(data.data);
    });
  }, [id, axiosSecure]);

  // Outside click to close modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showModal &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContribution = Object.fromEntries(formData.entries());
    newContribution.issueId = id;

    axiosSecure.post("/all-contributions", newContribution).then((res) => {
      if (res.data.insertedId) {
        Swal.fire(
          "✅ Success!",
          "Contribution submitted successfully!",
          "success"
        );
        setShowModal(false);
      }
    });
  };

  if (!detail) {
    return <p className="text-center py-10">Loading issue details...</p>;
  }

  const totalCollected = contributors.reduce(
    (sum, c) => sum + parseFloat(c.amount || 0),
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      {/* Issue Card */}
      <div className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-base-300">
        {detail.image && (
          <img
            src={detail.image}
            alt={detail.title}
            className="w-full h-96 object-cover rounded-xl mb-6"
          />
        )}

        <h2 className="text-3xl font-bold text-base-content mb-3">
          {detail.title}
        </h2>

        <div className="flex flex-wrap items-center gap-4 text-base-content/70 pb-4 border-b border-base-300">
          <span className="flex items-center gap-1">
            <FaTag className="text-primary/80" /> {detail.category}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-warning" /> {detail.location}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-info/90" />
            {new Date(detail.date).toLocaleDateString()}
          </span>
        </div>

        <p className="text-base-content/70 leading-relaxed py-4">
          {detail.description}
        </p>

        {detail.amount && (
          <div className="py-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-base-content/80">
                Suggested Fix Budget:
              </h3>
              <span className="text-primary font-bold text-lg">
                ৳{detail.amount}
              </span>
            </div>
            <div className="bg-base-300 rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-700"
                style={{
                  width: `${
                    (totalCollected / detail.amount) * 100 > 100
                      ? 100
                      : (totalCollected / detail.amount) * 100
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-base-content/70 text-right">
              Collected: <b>৳{totalCollected}</b> / ৳{detail.amount}
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition"
          >
            <FaMoneyBillWave /> Pay Clean-Up Contribution
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm animate-fadeIn">
          <div
            ref={modalRef}
            className="bg-base-100 p-8 rounded-2xl w-full max-w-md shadow-xl relative animate-scaleIn"
          >
            <h2 className="text-xl font-bold mb-5 text-center text-primary">
              Contribute to Cleanup
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="hidden" name="issueTitle" value={detail.title} />

              <div>
                <label className="font-medium">Amount (৳)</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter amount"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Contributor Name"
                className="input input-bordered w-full"
                required
              />

              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />

              <input
                type="text"
                name="address"
                defaultValue={detail.location}
                placeholder="Address"
                className="input input-bordered w-full"
              />

              <textarea
                name="additional"
                defaultValue={detail.description}
                placeholder="Additional Info (optional)"
                className="textarea textarea-bordered w-full"
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary w-full text-white mt-3"
              >
                Submit Contribution
              </button>
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-2xl text-error hover:rotate-90 transition-transform"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Contributors */}
      <div className="bg-base-100 rounded-2xl shadow-md p-6 border border-base-300">
        <h3 className="text-xl font-semibold mb-4 text-base-content">
          Contributors ({contributors.length})
        </h3>

        {contributors.length === 0 ? (
          <div className="bg-base-200 p-6 rounded-xl text-center text-base-content/60">
            No contributions yet. Be the first to support this issue! 🌱
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <table className="table">
              <thead className="bg-base-300 sticky top-0">
                <tr className="text-base-content">
                  <th>Image</th>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {contributors.map((contribute, i) => (
                  <tr
                    key={i}
                    className="hover:bg-base-200 transition-colors duration-200"
                  >
                    <td>
                      <img
                        src={
                          contribute.image ||
                          "https://i.ibb.co/8Nf1Q1P/user.png"
                        }
                        alt={contribute.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="font-medium">{contribute.name}</td>
                    <td className="text-primary font-semibold">
                      ৳{contribute.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueDetails;
