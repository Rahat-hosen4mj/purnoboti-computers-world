
import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        localStorage.removeItem('accessToken')
        signOut(auth);
       
      };
  
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      <li>
      {
          user ? <button onClick={logout} className="btn btn-ghost">SignOut</button> :  <Link to="/login">Login</Link>
        }
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 ">
      <div className="navbar text-white text-base-400">
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
              className="menu menu-compact dropdown-content mt-3 py-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link className="text-2xl px-5 font-medium" to="/">
            Computers World
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItem}</ul>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
