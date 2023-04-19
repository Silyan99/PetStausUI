import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import config from "../core/config/config";
import { loggedUser } from "../core/authsecurity";
import { toast } from "react-toastify";

function User() {
  const [user, setUser] = useState({});
  const GetUserDetails = () => {
    service
      .get(UrlConstant.Customer_GetRequestDetailURL(loggedUser.Id))
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
        }
        else{
            toast.error("Failed to load Pet details", config.ToastConfig);
        }
      })
      .catch((error) => {
        toast.error("Failed to load Pet details", config.ToastConfig);
        console.log(error);
      });
  };

  useEffect(() => {
    GetUserDetails();
  }, []);

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
            <img src="../images/user-dp.png" alt="Profile" />
          </div>
          <div className="profile-info text-start mx-4">
            <h1 className="">{user.FullName}</h1>
            {/* todo */}
            <h5 className=" fw-normal my-4">johnwick05</h5>

            <p className="">
              Email : <span>{user.Email}</span>
            </p>

            <p>
              Phone :<span> {user.Mobile}</span>
            </p>
          </div>
        </div>
        <div className="container text-start">
          <Link to={"/customer/appointment"}>
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
