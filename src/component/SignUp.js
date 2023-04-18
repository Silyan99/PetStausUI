import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { toast } from "react-toastify";
import config from "../core/config/config";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");

  const submitHandler = async (e) => {
    const data = {
      Email: email,
      Password: password,
      Name: name,
      Mobile: phone
    };
    service
      .post(UrlConstant.Signup, JSON.stringify(data))
      .then((resp) => {
        if (resp.status === 200) {
          setName("");
          setEmail("");
          setPassword("");
          setCfPassword("");
          setPhone("");
          if (resp.data.Status) {
            toast.success(resp.data.Message, config.ToastConfig);
            setTimeout(() => {
              window.location.href = "/login";
            }, 2500);
          }
          else{
            toast.error("Unable to create user.", config.ToastConfig);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancelHanlder = async (e) =>{
    window.location.reload();
  }

  useEffect(()=>{
    setName("");
    setEmail("");
    setPassword("");
    setCfPassword("");
    setPhone("");
  },[])

  return (
    <div className="d-flex justify-content-center align-items-center h-100 my-5">
      <div className="col-md-4 my-4">
        <div className="display-6 my-5 text-center">Sign-Up</div>

        <form action="" className="m-5 ">
          <div className="input-box">
            <input
              className="my-2"
              type="text"
              value={name}
              placeholder="Full-Name"
              onChange={e => setName(e.target.value)}
            />
            <input
              className="my-2"
              type="email"
              value={email}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="my-2"
              type="tel"
              value={phone}
              placeholder="Phone No"
              onChange={e => setPhone(e.target.value)}
            />
            <input
              className="my-2"
              type="password"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <input
              className="my-2"
              type="password"
              placeholder="Confirm-Password"
              value={cfPassword}
              onChange={e => setCfPassword(e.target.value)}
            />

            <div className="d-grid gap-2 col-12 mx-auto mt-4">
              <button
                className="btn btn-primary"
                type="button"
                onClick={submitHandler}
              >
                Submit
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={cancelHanlder}
              >
                Cancel
              </button>
            </div>

            <div className=" my-3 text-start">
              <p>
                Already have an account
                <Link className="mx-2 text-decoration-none" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
