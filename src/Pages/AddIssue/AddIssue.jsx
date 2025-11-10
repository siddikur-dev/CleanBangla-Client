import React from "react";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useNavigate } from "react-router";

const ReportIssueForm = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  //   Add Issue Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Build FormData from the submitted form
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const newIssue = { ...data, date: new Date(), status: "ongoing" };
    console.log(newIssue);
    axiosSecure.post("/all-issues", newIssue).then((data) => {
      if (data.data.insertedId) {
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
      <div className="shadow-md hover:shadow-xl  rounded-xl w-full max-w-3xl px-8 my-10 ">
        <h1 className="text-3xl font-bold text-center mt-12">
          Report a New Issue
        </h1>
        <p className="text-center text-base text-base-content/70 max-w-2xl mx-auto pt-3 pb-5">
          Help us keep our community clean. Fill out the details below.
        </p>

        <form className="space-y-4 pb-6" onSubmit={handleSubmit}>
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
              className="w-full p-2 rounded border        "
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
              className="w-full p-2 rounded border"
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
              className="w-full p-2 rounded border        "
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
              className="w-full p-2 rounded border        "
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
              className="w-full p-2 rounded border        "
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
              className="w-full p-2 rounded border        "
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
              className="w-full p-2 rounded border    /50 /50 text-muted-light dark:text-muted-dark cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary cursor-pointer rounded hover:bg-primary/90 transition text-white"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssueForm;
