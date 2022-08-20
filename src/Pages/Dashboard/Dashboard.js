import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
           <li>
                 {admin ? <>
                  <Link to="/dashboard/user">All Users</Link>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                  <Link to="/dashboard/manageProduct">ManageProduct</Link>
                 </> :  <Link to="/dashboard/myReview">Give Review</Link> }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
