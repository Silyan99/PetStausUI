import React from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      <div className="container">
        <p className="display-6 my-5 text-center py-5">
          Greetings from our <span className="text-danger">Pet Stays</span>
        </p>
      </div>

      <div className="container mt-5 ">
        <div className="profile my-5">
          <div className="profile-pic">
            <img src="./images/user-dp.png" alt="Profile Picture" />
          </div>
          <div className="profile-info text-start mx-4">
            <h1 className="">John Wick</h1>
            <h5 className=" fw-normal my-4">johnwick05</h5>

            <p className="">
              Email : <span>john.wick@gmail.com</span>
            </p>

            <p>
              Phone :<span> 123-456-7890</span>
            </p>
          </div>
        </div>
        <div className="container text-start">
          <Link to={"/appointment"}>
            <button
              className="mx-5 px-5 py-2 btn btn-outline-primary my-3"
              type="button"
            >
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
