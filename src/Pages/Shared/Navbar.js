import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      )}
      <li>
        {user ? (
          <button onClick={logout} className="btn btn-ghost">
            SignOut
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Purnoboti World
        </a>
      </div>
      <div className="navbar-center pl-12">
        <label
          htmlFor="dashboard-sidebar"
          tabIndex="1"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="navbar-end hidden lg:flex pr-10">
        <ul className="menu menu-horizontal p-0">{navItem}</ul>
      </div>
      
    </div>
  );
};

export default Navbar;
