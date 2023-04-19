import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { useNavigate } from "react-router-dom";
import base64 from "base-64";
import { toast } from "react-toastify";
import { authenticate, loggedUser } from "../core/authsecurity";
import config from "../core/config/config";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [tab, setTab] = useState("0");

  const clickHandler = async (e) => {
    let data = {
      Email: "",
      Password: "",
    };
    if (tab === "0") {
      data.Email = email;
      data.Password = base64.encode(password);
    } else if (tab === "1") {
      data.Email = adminEmail;
      data.Password = base64.encode(adminPassword);
    }
    if (data.Email === "" || data.Password === "") {
      toast.error(
        "Email and password are required fields.",
        config.ToastConfig
      );
      return;
    }
    service
      .post(UrlConstant.Login, data)
      .then((resp) => {
        if (resp.status === 200) {
          toast.success("Login Successful!", config.ToastConfig);
          let user= authenticate(resp.data);
          let redirectURL = "/customer/myrequests";
          debugger
          if (user.IsAdmin) {
            redirectURL = "/admin/pendingrequest";
          }
          const loginRedirect = new Promise((resolve) =>
            setTimeout(() => {
              window.location.href = redirectURL;
            }, 3500)
          );
          setTimeout(() => {
            toast.promise(loginRedirect, {
              pending: "Redirecting you to Home page",
            });
          }, 1000);
        } else {
          toast("Unable to login. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid username or password", config.ToastConfig);
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      });
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setAdminEmail("");
    setAdminPassword("");
  }, [tab]);

  return (
    <div className="d-flex justify-content-center align-items-center h-100 my-5">
      <div className="col-md-4">
        <div className="display-6 my-5 text-center  ">Login</div>
        <hr></hr>
        <form className="m-5">
          <div className="input-box">
            {/* <ul className="nav nav-tabs mb-5" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                  onClick={() => setTab("0")}
                >
                  Customer
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                  onClick={() => setTab("1")}
                >
                  Admin
                </button>
              </li>
            </ul> */}
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <input
                  className="my-2"
                  value={email}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="my-2"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="1"
              >
                <input
                  className="my-2"
                  type="email"
                  placeholder="Admin-Email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
                <input
                  className="my-2"
                  type="password"
                  placeholder="Password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
              </div> */}
            </div>

            <div className="d-grid gap-2 col-12 mx-auto mt-4">
              <button
                className="btn btn-primary"
                onClick={() => clickHandler()}
                type="button"
              >
                Login
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.location.reload();
                }}
                type="button"
              >
                Cancel
              </button>
            </div>

            <div className=" my-3 text-start">
              <p>
                Need an account?
                <Link className="mx-2 text-decoration-none" to={"/signup"}>
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
