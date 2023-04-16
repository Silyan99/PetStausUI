import React from "react";
import { Link } from "react-router-dom";
import { loggedUser, logout } from "../core/authsecurity";

function Navbar(props) {
  const logouthandler = () => {
    logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <Link className=" me-3" to="/">
            <img src="../images/logo2.jpg" alt="" style={{ height: "40px" }} />
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
              
              {/* Visitor Section */}
              { !loggedUser.IsLoggedIn && 
              (<>
                <li className="nav-item"><Link className="nav-link text-center active " aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link text-center active " aria-current="page" to="/contact">Contact-Us</Link></li>
              </>)}

              {/* Admin Section */}
              {(loggedUser.IsLoggedIn && loggedUser.IsAdmin) &&
              (<>
                <li className="nav-item"><Link className="nav-link text-center active " aria-current="page" to="/admin/addofftimings">My Schedule</Link></li>
                <li className="nav-item"><Link className="nav-link text-center active " aria-current="page" to="/admin/pendingrequest">All Requests</Link></li>
              </>)}

              {/* Customer section */}
              {(loggedUser.IsLoggedIn && loggedUser.IsCustomer) &&
              (<>
                <li className="nav-item"><Link className="nav-link text-center active " aria-current="page" to="/customer/appointment">Appointments</Link></li>
                <li className="nav-item"><Link className="nav-link text-center active " aria-current="page" to="/customer/user">My Profile</Link></li>
                <li className="nav-item"><Link className="nav-link text-center active " aria-current="page" to="/customer/myrequests">My Requests</Link></li>                
              </>)}

            </ul>

            {/* User profile section or login */}
            {loggedUser.IsLoggedIn ? 
            (<>
              <Link className="no-link-underline">
                <span className="navbar-text mx-1 text-end">
                  {loggedUser.Username}
                  <span data-initials={loggedUser.Username.substr(0, 1)} className="initials"></span>
                </span>
              </Link>
              <Link className="nav-link text-center active text-danger" aria-current="page" onClick={logouthandler}>Logout</Link>
            </>) 
            : (
              <Link to="/login" className="no-link-underline">
                <span className="navbar-text mx-1 text-end">
                  Login
                  <img className="mx-3" src="../images/user.png" alt="user" role="button" style={{ height: "22px" }}/>
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
