import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { TbLogout2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  // Show loader during auth loading
  if (loading) {
    return (
      <div className="flex justify-center my-3">
        <BeatLoader color="rgba(232, 89, 79, 1)" />
      </div>
    );
  }

  // Handle Logout function
  const signOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-200 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Logo */}
        <NavLink
          to="/"
          className="text-3xl logo-font font-bold flex items-center gap-1"
        >
          <span className="text-primary">CleanBangla</span>{" "}
          <img
            className="w-8 border rounded-full bg-primary"
            src="/logo.png"
            alt="logo"
          />
        </NavLink>

        {/* Middle: Menu Items */}
        <div className="hidden lg:flex gap-5 items-center">
          <NavLink
            to="/"
            className="text-base font-medium text-base-content hover:text-primary/75"
          >
            Home
          </NavLink>

          <NavLink
            to="/issues"
            className="text-base font-medium text-base-content hover:text-primary/75"
          >
            All Issues
          </NavLink>

          {user && (
            <>
              <NavLink
                to="/add-issue"
                className="text-base font-medium text-base-content hover:text-primary/75"
              >
                Add Issues
              </NavLink>
              <NavLink
                to="/my-issues"
                className="text-base font-medium text-base-content hover:text-primary/75"
              >
                My Issues
              </NavLink>
              <NavLink
                to="/my-contribution"
                className="text-base font-medium text-base-content hover:text-primary/75"
              >
                My Contribution
              </NavLink>
            </>
          )}
        </div>

        {/* Right: Theme + Auth */}
        <div className="hidden md:flex gap-3 items-center">
          <ThemeToggle />

          {user ? (
            <div className="relative group">
              {/* Profile Image */}
              <img
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                }
                alt={user.displayName}
                className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer transition-all duration-200"
              />

              {/* Hover Menu */}
              <div className="absolute right-0 mt-2 w-40 bg-base-100 border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-200 origin-top-right z-50">
                <button
                  onClick={() => navigate("/profile")}
                  className="flex items-center gap-2 px-4 py-2 w-full hover:bg-base-200 text-left"
                >
                  <FaUser /> Profile
                </button>
                <button
                  onClick={signOut}
                  className="flex items-center gap-2 px-4 py-2 w-full hover:bg-base-200 text-left text-red-500"
                >
                  <TbLogout2 /> Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn btn-primary btn-outline duration-300"
              >
                Login
              </Link>
              <Link to={"/register"} className="btn btn-primary duration-300">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu (unchanged) */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="hover:text-primary/75 hover:bg-base-200">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/issues"
                className="hover:text-primary/75 hover:bg-base-200"
              >
                All Issues
              </NavLink>
            </li>
            {user && (
              <>
                <NavLink
                  to="/add-issue"
                  className="hover:text-primary/75 hover:bg-base-200"
                >
                  Add Issues
                </NavLink>
                <NavLink
                  to="/my-issues"
                  className="hover:text-primary/75 hover:bg-base-200"
                >
                  My Issues
                </NavLink>
                <NavLink
                  to="/my-contribution"
                  className="hover:text-primary/75 hover:bg-base-200"
                >
                  My Contribution
                </NavLink>
                <NavLink
                  to="/profile"
                  className="hover:text-primary/75 hover:bg-base-200"
                >
                  Profile
                </NavLink>
                <button
                  onClick={signOut}
                  className="btn btn-primary text-white w-full mt-2"
                >
                  <TbLogout2 /> Logout
                </button>
              </>
            )}
            {!user && (
              <>
                <Link
                  to={"/login"}
                  className="btn btn-primary btn-outline w-full mt-2"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="btn btn-primary w-full mt-2"
                >
                  Register
                </Link>
              </>
            )}
            <ThemeToggle />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
