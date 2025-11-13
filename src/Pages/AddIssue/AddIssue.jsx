import React from "react";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useNavigate } from "react-router";
import SectionHeader from "../../Component/Shared/SectionHeader";
import { Typewriter } from "react-simple-typewriter";

const ReportIssueForm = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Add Issue Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Build FormData from the submitted form
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Coerce amount to number and include reporter email
    const payload = {
      ...data,
      amount: data.amount ? Number(data.amount) : 0,
      email: user?.email || data.email || "",
      date: new Date().toISOString(),
      status: "ongoing",
    };

    axiosSecure.post("/all-issues", payload).then((res) => {
      if (res.data?.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Issue has been reported",
          showConfirmButton: false,
          timer: 1200,
        });
        navigate("/issues");
      }
    });
  };
  return (
    <div className="container mx-auto flex items-center justify-center bg-base-100 ">
      {/* Helmet Title */}
      <title>Add Issue - CleanBangla</title>
      <div className="shadow-lg hover:shadow-xl rounded-xl w-full max-w-3xl px-6 sm:px-8 md:px-10 my-10 bg-white dark:bg-base-200 ring-1 ring-black/5">
        <div className="pt-10 pb-4">
          <SectionHeader
            as="h1"
            title={
              <>
                Report a
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">
                  <Typewriter
                    words={[
                      " New Issue",
                      " Problem",
                      " Your Community Clean",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1800}
                  />
                </span>
              </>
            }
            description="Help us keep our community clean. Fill out the details below so volunteers and officials can act faster."
            titleProps={{
              className: "text-2xl sm:text-3xl font-extrabold text-center",
            }}
            descProps={{
              className:
                "text-center text-base text-base-content/70 max-w-2xl mx-auto mt-3",
            }}
          />
        </div>

        <form className="space-y-4 pb-6 px-2 sm:px-0" onSubmit={handleSubmit}>
          {/* Issue Title */}
          <div>
            <label className="block text-sm mb-1" htmlFor="title">
              Issue Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g., Large garbage pile on the main road"
              className="w-full p-3 rounded-lg border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm mb-1" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-3 rounded-lg border border-base-300 focus:outline-none"
              defaultValue="Garbage"
            >
              <option>Garbage</option>
              <option>Illegal Construction</option>
              <option>Broken Public Property</option>
              <option>Road Damage</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm mb-1" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter street name or landmark"
              className="w-full p-3 rounded-lg border border-base-300 focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Provide a detailed description of the issue."
              className="w-full p-3 rounded-lg border border-base-300 focus:outline-none"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm mb-1" htmlFor="image">
              Photo URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              placeholder="Paste image link here"
              className="w-full p-3 rounded-lg border border-base-300 focus:outline-none"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm mb-1" htmlFor="amount">
              Amount [Suggested Fix Budget]
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="0.00"
              className="w-full p-3 rounded-lg border border-base-300 focus:outline-none"
              step="0.01"
              min="0"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email || ""}
              readOnly
              aria-readonly="true"
              className="w-full p-3 rounded-lg border border-base-300 bg-base-200 text-muted cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary cursor-pointer rounded-lg hover:bg-primary/90 transition text-white font-medium"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssueForm;
