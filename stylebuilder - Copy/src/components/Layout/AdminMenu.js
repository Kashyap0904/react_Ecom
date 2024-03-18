import React from "react";
import { NavLink } from "react-router-dom";
//import CreateCategory from "../../pages/Admin/CreateCategory";
const AdminMenu = () => {
  return (
    <>
      <div className="card text-center">
        <div className="list-group dashboard-menu">
          <div className="card-header">
            <h4>Admin Panel</h4>
          </div>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users 
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
