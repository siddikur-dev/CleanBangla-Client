import React from "react";

const ReportIssueForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Build FormData from the submitted form
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Report submitted:", data);
  };
  return (
    <div className="container mx-auto flex items-center justify-center p-4">
      <div className="bg-base-100 shadow-xl rounded-xl w-full max-w-3xl p-8">
        <h1 className="text-3xl heading-font md:text-4xl font-bold text-center pb-5 ">
          Report a New Issue
        </h1>
        <p className="text-sm text-center mb-6">
          Help us keep our community clean. Fill out the details below.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              className="w-full p-2 rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
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
              className="w-full p-2 rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
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
              className="w-full p-2 rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
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
              className="w-full p-2 rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
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
              className="w-full p-2 rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
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
              className="w-full p-2 rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
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
              value="user@example.com"
              readOnly
              className="w-full p-2 rounded border border-border-light dark:border-border-dark bg-background-light/50 dark:bg-background-dark/50 text-muted-light dark:text-muted-dark cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary cursor-pointer rounded hover:bg-primary/90 transition"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssueForm;
