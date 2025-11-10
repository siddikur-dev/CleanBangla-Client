import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hook/useAuth";

const MyIssues = () => {
  const [issues, setIssues] = useState([]);

  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/my-issues?email=${user.email}`).then((res) => {
        setIssues(res.data);
      });
    }
  }, [user, axiosSecure]);

  const handleUpdate = (issue) => {
    setSelectedIssue(issue);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (issue) => {
    setSelectedIssue(issue);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    await axiosSecure.delete(`/issues/${selectedIssue._id}`);
    setIssues(issues.filter((i) => i._id !== selectedIssue._id));
    setIsDeleteModalOpen(false);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedIssue = {
      title: form.title.value,
      category: form.category.value,
      amount: form.amount.value,
      description: form.description.value,
      status: form.status.value,
    };
    await axiosSecure.put(`/issues/${selectedIssue._id}`, updatedIssue);
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Reported <span className="text-primary">Issues</span>
      </h2>

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow-md">
        <table className="table w-full">
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Amount (৳)</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue, index) => (
              <tr key={issue._id} className="hover:bg-base-200">
                <td>{index + 1}</td>
                <td>{issue.title}</td>
                <td>{issue.category}</td>
                <td>{issue.amount}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      issue.status === "ongoing"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>
                <td className="flex gap-3">
                  <button
                    onClick={() => handleUpdate(issue)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(issue)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {isUpdateModalOpen && (
        <div
          onClick={() => setIsUpdateModalOpen(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Update Issue</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                defaultValue={selectedIssue?.title}
                placeholder="Title"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="category"
                defaultValue={selectedIssue?.category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="amount"
                defaultValue={selectedIssue?.amount}
                placeholder="Amount"
                className="input input-bordered w-full"
              />
              <textarea
                name="description"
                defaultValue={selectedIssue?.description}
                placeholder="Description"
                className="textarea textarea-bordered w-full"
              />
              <select
                name="status"
                defaultValue={selectedIssue?.status}
                className="select select-bordered w-full"
              >
                <option value="ongoing">Ongoing</option>
                <option value="ended">Ended</option>
              </select>

              <button type="submit" className="btn btn-primary w-full mt-2">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div
          onClick={() => setIsDeleteModalOpen(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-xl w-full max-w-sm text-center"
          >
            <h3 className="text-lg font-semibold mb-2">Confirm Deletion</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete “{selectedIssue?.title}”?
            </p>
            <div className="flex justify-center gap-3">
              <button onClick={confirmDelete} className="btn btn-error btn-sm">
                Delete
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="btn btn-outline btn-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyIssues;
