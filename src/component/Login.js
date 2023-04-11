import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { useNavigate } from 'react-router-dom';
import base64 from 'base-64';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [tab, setTab] = useState("0");

  const clickHandler = async (e) => {
    e.preventDefault();
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
    service
      .post(UrlConstant.Login, data)
      .then((resp) => {
        if(resp.statusText === "OK")
        {
          setEmail("");
          setPassword("");
          setAdminEmail("");
          setAdminPassword("");
          localStorage.setItem("token",resp.data.Token);
          return navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
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
        <div className="display-6 my-5 text-center  ">log-In</div>
        <form className="m-5">
          <div className="input-box">
            <ul className="nav nav-tabs mb-5" id="myTab" role="tablist">
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
                  User
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
            </ul>
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
              <div
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
              </div>
            </div>

            <div className="d-grid gap-2 col-12 mx-auto mt-4">
              <button
                className="btn btn-primary"
                onClick={clickHandler}
                type="submit"
              >
                Log-In
              </button>
            </div>

            <Link
              className="mx-2 text-decoration-none d-grid gap-2 col-12 mx-auto mt-4"
              to={"/signup"}
            >
              <button className="btn btn-primary text-light">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
