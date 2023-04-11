import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      Email: email,
      Password: password,
      Name: name,
      Mobile: phone
    };
    service
      .post(UrlConstant.Signup, data)
      .then((resp) => {
        if (resp.statusText === "OK") {
          setName("");
          setEmail("");
          setPassword("");
          setCfPassword("");
          setPhone("");
          console.log(resp.data.Message);
          return navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                type="submit"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>

            <div className=" my-3 text-start">
              <p>
                Have an account
                <Link className="mx-2 text-decoration-none" to={"/login"}>
                  log-in
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
