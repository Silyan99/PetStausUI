import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <Link className=" me-3" to="/">
            <img src="./images/logo2.jpg" style={{ height: "40px" }} />
          </Link>
          <Link to="/" className="navbar-brand text-dark me-5">
            PET STAYS
          </Link>

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                {/*border-bottom  border-2 border-primary */}
                <Link
                  className="nav-link text-center active "
                  // text-primary
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-center active "
                  aria-current="page"
                  to="/user"
                >
                  Appointment
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link text-center active "
                  aria-current="page"
                  to="/contact"
                >
                  Contact-Us
                </Link>
              </li>
            </ul>
            <span className="navbar-text mx-1 text-end">
              Log-in/Sign-up
              <Link to={"/signup"}>
                <img
                  className="mx-3"
                  src="./images/user.png"
                  alt="user"
                  role="button"
                  style={{ height: "22px" }}
                />
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
