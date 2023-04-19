import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as service from "../core/service/service";
import { toast } from "react-toastify";
import config from "../core/config/config";
import UrlConstant from "../constants/UrlConstant";
import { Get12HrsFormat, IsNullEmptyOfUndefined } from "../core/interactiveforms";

function Admin() {
  const { id } = useParams();

  const [petDetails, setPetDetails] = useState({});

  const [rejectReason, setRejectReason] = useState("");
  const [pendingReason, setpendingReason] = useState("");

  const GetPetDetails = (id) => {
    service
      .get(UrlConstant.Admin_PetDetail(id))
      .then((response) => {
        if (response.status === 200) {
          setPetDetails(response.data);
        } else {
          toast.error("Failed to load Details", config.ToastConfig);
        }
      })
      .catch((err) => {
        toast.error("Failed to load Details", config.ToastConfig);
      });
  };

  const SetStatus = (requestStatus, reason) => {
    service
      .put(UrlConstant.Admin_UpdatePetDetail(id), {
          IsPaymentDone: petDetails.IsPaymentDone,
          Status: requestStatus.toLowerCase(),
          Remarks:
            requestStatus.toLowerCase() === "pending" ||
            requestStatus.toLowerCase() === "rejected"
              ? reason
              : ""
      })
      .then((response) => {
        if (response.status === 200) {
          setPetDetails(response.data);
          toast.success(`Request ${requestStatus.toLowerCase()}`,config.ToastConfig);
          setTimeout(() => {
            window.location.href = "/admin/pendingrequest";
          }, 1000);
        } else {
          toast.error("Failed to update request", config.ToastConfig);
        }
      })
      .catch((err) => {
        toast.error("Failed to update request", config.ToastConfig);
      });
  };

  useEffect(() => {
    if(!IsNullEmptyOfUndefined(id))
    GetPetDetails(id);
  }, [id]);

  return (
    <div className="container">
      <p className="my-4 py-5 display-6">
        Pending <span className="text-danger"> Requests</span>
      </p>
      <hr />
      <div className="container d-flex flex-row flex-wrap justify-content-center mt-5">
        <div
          className="container col-md-11 mx-2 my-5  d-flex flex-row flex-wrap justify-content-evenly"
          style={{ maxWidth: "80vw" }}
        >
          <div className="pet-image col-md-6 d-flex justify-content-center align-item-center ">
            <img
              src={`/../images/${petDetails.Photo || (petDetails.Category && petDetails.Category.toLowerCase()==="dog" ? "default_dog.png":"default_cat.png")}`}
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-md-6 text-start my-0">
            <div className="card-body">
              <p className="h4 fw-normal m-3 ">
                Pet Name :{" "}
                <span className="text-danger"> {petDetails.Name}</span>
              </p>
              <p className="h6 m-3 ">
                UID : <span>{petDetails.Uid}</span>
              </p>
              <p className="h6 m-3 ">
                Category : <span> {petDetails.Category}</span>
              </p>
              <p className="h6 m-3">
                Breed : <span> {petDetails.Breed}</span>
              </p>
              <p className="h6 m-3 ">
                Color : <span>{petDetails.Color}</span>
              </p>
              <p className="h6 m-3">
                Gender : <span>{petDetails.Gender}</span>
              </p>
              <p className="h6 m-3">
                Vaccinated :{" "}
                <span>{petDetails.Vaccinated === true ? "Yes" : "No"}</span>
              </p>
              <p className="h6 m-3">
                Age : <span>{petDetails.Age}</span>
              </p>
              <p className="h6 m-3">
              <strong> Owner Details: </strong> <span>{petDetails.OwnerName}</span>
              </p>
              <p className="h6 m-3">
                Address : <span>{petDetails.Address}</span>
              </p>
              <p className="h6 m-3">
                Drop :{" "}
                <span>
                  {new Date(petDetails.Date).toDateString() +
                    " " +
                    Get12HrsFormat(petDetails.TimeFrom)}
                </span>
              </p>
              <p className="h6 m-3">
                {/* Set PickUp/Drop Date  todo*/}
                Pick-Up :{" "}
                <span>
                  {new Date(petDetails.Date).toDateString() +
                    " " +
                    Get12HrsFormat(petDetails.TimeTo)}
                </span>
              </p>
              <p className="h6 m-3">
                Details :
                <span> {petDetails.Details}</span>
              </p>

              <p className="card-text mx-3 mt-4">
                <button
                  type="button"
                  className="btn btn-outline-success mx-1"
                  onClick={() => SetStatus("Approve")}
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger dropdown-toggle mx-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" onClick={()=>{setRejectReason("")}}
                >
                  Reject
                </button>
                <div className="dropdown-menu">
                  <div className="px-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Remarks
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      value={rejectReason}
                      onChange={(ev)=>setRejectReason(ev.target.value)}
                      rows="3"
                    ></textarea>
                    <div className="text-end">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm my-2 w-100"
                        onClick={() => SetStatus("Rejected", rejectReason)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-primary dropdown-toggle mx-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={()=>{setpendingReason("")}}
                >
                  Pending
                </button>
                <div className="dropdown-menu">
                  <div className="px-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Remarks
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={pendingReason}
                      onChange={(ev)=>setpendingReason(ev.target.value)}
                    ></textarea>
                    <div className="text-end">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm my-2 w-100 "
                        onClick={() => SetStatus("Pending", pendingReason)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                {/* <button type="button" className="btn btn-outline-secondary mx-1">
                                            Costmer
                                        </button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
