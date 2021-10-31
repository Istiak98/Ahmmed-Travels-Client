import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../Hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg sticky-top collapseOnSelect expand='lg' ">
      <div className="container-fluid hd">
        <a className="navbar-brand mx-5 " href="/">
          AHMED TRAVELS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent Nav_menu"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/home"
                activeClassName="selected"
              >
                HOME
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/allservice"
                activeClassName="selected"
              >
                ALL SERVICES
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/about"
                activeClassName="selected"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/contact"
                activeClassName="selected"
              >
                CONTACT
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/gallary"
                activeClassName="selected"
              >
                GALLARY
              </NavLink>
            </li> */}
            <li className="nav-item nav-text">Welcome :{user?.displayName}</li>{" "}
            <br />
            <img
              src={user?.photoURL}
              height="40px"
              style={{ borderRadius: "50%" }}
              width="40px"
              alt=""
              className="pull-left img-circle login"
            />
          </ul>
           

          <form className="d-flex flex-fill mx-5">
          {
            user.email&&
            <Link to="/myOrders">
              <button className="btn btn btn-outline-warning me-3">My Orders</button>
            </Link>
          }
          {
            user.email&&
            <Link to='/managerOrders'>
              <button className="btn btn btn-outline-warning me-3">Manage orders</button>
            </Link>
          }
          {
            user.email&&
            <Link to="/addTours">
              <button className="btn btn btn-outline-warning me-3">Add  New Tour</button>
            </Link>
          }
            {user.email ? (
              <button
                onClick={logOut}
                className="btn btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
                type=""
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <button
                  className="btn btn btn-outline-light position-absolute top-50 end-0 translate-middle-y mx-5"
                  type=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  Login
                </button>
              </NavLink>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
