import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { TbLogout2 } from "react-icons/tb";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  // Show Loader when auth state is loading
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
    // Main Navbar Container
    <div className="navbar bg-base-200 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left side - Logo and Site Name */}
        <NavLink
          to="/"
          className="text-3xl logo-font font-bold flex items-center gap-1"
        >
          <span className="text-primary">CleanBangla</span>{" "}
          <img
            src="../../../public/Logo.png"
            alt=""
            className="w-8 rounded-full"
          />
        </NavLink>

        {/* Middle Section - Menu Items for large screen */}
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

          {/* Menu Items for logged-in user */}
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

        {/* Right side - Theme toggle and Auth buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <ThemeToggle></ThemeToggle>

          {/* If user logged in */}
          {user ? (
            <div className="flex items-center gap-3">
              {/* Profile Image with Hover Name */}
              <div
                className="relative flex items-center justify-center cursor-pointer group"
                onClick={() => navigate("/profile")}
              >
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                  }
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 transition-all duration-200"
                />
                <span className="absolute top-full mt-1 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {user.displayName}
                </span>
              </div>

              {/* Logout Button */}
              <button
                onClick={signOut}
                className="btn btn-primary text-white hover:font-semibold duration-300"
              >
                <TbLogout2 />
                Logout
              </button>
            </div>
          ) : (
            // If user not logged in
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

        {/* Mobile Dropdown Menu */}
        <div className="dropdown dropdown-end md:hidden">
          {/* Dropdown Toggle Button */}
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

          {/* Dropdown Menu Items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* Home */}
            <li>
              <NavLink
                to="/"
                className="text-base-content hover:text-primary/75 hover:bg-base-200"
              >
                Home
              </NavLink>
            </li>

            {/* All Issues */}
            <li>
              <NavLink
                to="/issues"
                className="text-base-content hover:text-primary/75 hover:bg-base-200"
              >
                All Issues
              </NavLink>
            </li>

            {/* Menu for logged-in users */}
            {user && (
              <li>
                <NavLink
                  to="/add-issue"
                  className="text-base-content hover:text-primary/75 hover:bg-base-200"
                >
                  Add Issues
                </NavLink>
                <NavLink
                  to="/my-issues"
                  className="text-base-content hover:text-primary/75 hover:bg-base-200"
                >
                  My Issues
                </NavLink>
                <NavLink
                  to="/my-contribution"
                  className="text-base-content hover:text-primary/75 hover:bg-base-200"
                >
                  My Contribution
                </NavLink>
                <NavLink
                  to="/profile"
                  className="text-base-content hover:text-primary/75 hover:bg-base-200"
                >
                  Profile
                </NavLink>
              </li>
            )}

            {/* Theme Toggle inside dropdown */}
            <ThemeToggle></ThemeToggle>

            {/* Auth Buttons */}
            <li>
              {user ? (
                <button
                  onClick={signOut}
                  className="btn btn-primary text-white duration-300 mt-2"
                >
                  <TbLogout2 />
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="btn btn-primary btn-outline w-full mt-2 duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="btn btn-primary w-full mt-2 duration-300"
                  >
                    Register
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
