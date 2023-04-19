import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { toast } from "react-toastify";
import config from "../core/config/config";
import { IsNullEmptyOfUndefined, ValidateEmail } from "../core/interactiveforms";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [address, setAddress] = useState("");
  const [remainingSeconds, setRemainingSeconds] = useState(15);

  let inputElement = React.useRef(null);

  const submitHandler = async (e) => {
    const data = {
      FullName: name,
      Email: email,
      Mobile: phone,
      Password: password,
      Address:address
    };
    if(!ValidateData(data))
      return;
    service
      .post(UrlConstant.Signup, JSON.stringify(data))
      .then((resp) => {
        if (resp.status === 200) {
          if (resp.data.Status) {
            toast.success(resp.data.Message, config.ToastConfig);
            OnUserCreated();
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

  const ValidateData =(data)=>{
    let modifiedObj = {...data, ConfirmPassword: cfPassword};
    let KeysObject = Object.keys(modifiedObj);
   for (let index = 0; index < KeysObject.length; index++) {
    const element = modifiedObj[KeysObject[index]];
    if(IsNullEmptyOfUndefined(element)){
      toast.error(`${KeysObject[index]} is required.`, config.ToastConfig);
      return false;
    }
   }
   if(data.Mobile.length < 10 || data.Mobile.length > 12 || isNaN(data.Mobile)){
      toast.error(`Invalid phone.`, config.ToastConfig);
      return false;
   }
   if(!ValidateEmail(data.Email)){
      toast.error(`Invalid Email.`, config.ToastConfig);
      return false;
   }
   if(password !==cfPassword){
    toast.error(`Password and Confirm Password should match`, config.ToastConfig);
      return false;
   }
   return true;
  }

  const OnUserCreated = ()=>{
    inputElement.click();
    let time = 15;
    let interval = setInterval(() => {
      if(time === 1){
        clearInterval(interval);
        window.location.href = "/login";
        ClearData();
      }
      else{
        time = time - 1;
        setRemainingSeconds(time);
      }
    }, 1000);
    
  }

  const cancelHanlder = async (e) =>{
    window.location.reload();
  }

  const ClearData=()=>{
    setName("");
    setEmail("");
    setPassword("");
    setCfPassword("");
    setPhone("");
    setAddress("");
  }

  useEffect(()=>{
    ClearData();
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
            <input
              className="my-2"
              type="text"
              placeholder="Address"
              value={address}
              onChange={e => setAddress(e.target.value)}
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
              <button
                className="d-none"
                type="button"
                id="bsModalButton"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                ref={ref=> inputElement = ref}
              >
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
      {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  User Created
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body ">
                <div className="my-2">
                  <table>
                    <tr><td>Name</td><td className="text-start">{name}</td></tr>
                    <tr><td>Email</td><td className="text-start">{email}</td></tr>
                    <tr><td>Phone</td><td className="text-start">{phone}</td></tr>
                    <tr><td>Address</td><td className="text-start">{address}</td></tr>
                    <tr>
                      <td colSpan={2}>
                        You will be automatically redirected to Login page in {remainingSeconds} secs
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="text-end mt-4 px-4">
                  <button type="button"  data-bs-dismiss="modal" aria-label="Close" className="btn btn-outline-danger" onClick={()=>{window.location.href ="/login"}}>
                    Redirect Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SignUp;
