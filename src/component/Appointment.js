import React, { useRef } from "react";
import { useState } from "react";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { toast } from "react-toastify";
import config from "../core/config/config";
import { useEffect } from "react";
import { Get12HrsFormat, RandomString, ValidateAllFields } from "../core/interactiveforms";

function Appointment() {
  const [imageSrc, setImageSrc] = useState("");
  const [adminAvailableTimes, setAdminAvailableTimes] = useState([]);
  let modalButton = useRef(null);

  const ValidateAndSubmit = (isSubmit) => {
    const {
      Uid, Name, Age, Gender, Vaccinated, Color, Breed, Details, PhotoFile, DateFrom, DateTo, TimeFrom, TimeTo
    } = document.forms[0];
    const Category =  document.getElementsByName("Category");
    const dataToSend = {
      Category:Array.prototype.slice.call(Category).find(x=>x.checked).value,
      Name:Name.value,
      Color:Color.value,
      Age:Age.value,
      Breed:Breed.value,
      Uid:Uid.value,
      PhotoFile:PhotoFile.files[0],
      Details:Details.value,
      DateFrom:DateFrom.value,
      TimeFrom:TimeFrom.value,
      DateTo:DateTo.value,
      TimeTo:TimeTo.value,
      Gender:Array.prototype.slice.call(Gender).find(x=>x.checked).value,
      Vaccinated:Array.prototype.slice.call(Vaccinated).find(x=>x.checked).value,
      Photo: imageSrc
    };

    if(!ValidateAllFields(dataToSend))
      return;

    if(PhotoFile.files.length < 1){
      toast.error("Please update photo.", config.ToastConfig);
      return;
    }

    if(dataToSend.DateFrom === dataToSend.DateTo){
      toast.error("From and To dates should be different.", config.ToastConfig);
      return;
    }

    if(dataToSend.DateFrom > dataToSend.DateTo){
      toast.error("From date should be earlier than To date.", config.ToastConfig);
      return;
    }

    if(isSubmit===true){
      service
        .postformdata(UrlConstant.Admin_AddRequest, dataToSend)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Request created successfully.", config.ToastConfig);
            setTimeout(() => {
              window.location.href = "/customer/myrequests";
            }, 1500);
          } else {
            toast.error("Error saving request.", config.ToastConfig);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error saving request.", config.ToastConfig);
        });
    }
    else{
      modalButton.click();
    }
  };

  const ClearInput = () => {
    document.forms[0]["PhotoFile"].value = null;
    setImageSrc("");
  };

  const OnImageUpload = (ev) => {
    const [file] = ev.target.files;
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const GetAvailableTimings = () => {
    service
      .get(UrlConstant.Customer_OffTimingsAdmin(1)) //admin id is always 1
      .then((response) => {
        if (response.status === 200) {
          setAdminAvailableTimes(response.data);
        } else {
          toast.error(
            "Failed to load admin available Timings",
            config.ToastConfig
          );
        }
      })
      .catch((error) => {
        toast.error(
          "Failed to load admin available Timings",
          config.ToastConfig
        );
        console.log(error);
      });
  };

  useEffect(() => {
    GetAvailableTimings();
  }, []);

  return (
    <>
      <div className="container my-3 py-4">
        <p className="display-6 my-4 pb-2">
          Create the <span className="text-danger"> Appointment</span>{" "}
        </p>
        <hr />
        <div className="d-flex justify-content-center mt-5">
          <div className="pet-radio-inputs my-3 col-md-12">
            <label className="pet-radio">
              <input type="radio" name="Category" checked value="Dog" />
              <span className="name">Dog</span>
            </label>
            <label className="pet-radio">
              <input type="radio" name="Category" value="Cat" />
              <span className="name">Cat</span>
            </label>
            
          </div>
        </div>
        <div className="container form-box">
          <form className=" row my-5">
            <div className="col-md-6 mb-3 my-4 text-start">
              <label htmlFor="petname" className="form-label">
                Pet Name
              </label>
              <input
                type="text"
                className="form-control"
                id="petname"
                name="Name"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-6 my-2 d-flex flex-row align-items-center pt-4">
            <input type="hidden" name="Uid" value={RandomString(5)}></input>
              <label className="form-check-label mt-3" htmlFor="petGender">
                Gender :
              </label>
              <div className="col-md-2  mx-5 mt-3">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Gender"
                    id="petGenderMale"
                    value="male"
                    checked
                  />
                  <label className="form-check-label" htmlFor="petGenderMale">
                    Male
                  </label>
                </div>
              </div>
              <div className="col-md-2  mt-3">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Gender"
                    id="petGenderFemale"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="petGenderFemale">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3 my-4 text-start">
              <label htmlFor="petcolor" className="form-label">
                Pet color
              </label>
              <input
                type="text"
                className="form-control"
                id="petcolor"
                name="Color"
                placeholder=""
                required
              />
            </div>

            <div
              className="form-check col-md-6 my-3 px- d-flex flex-row align-items-center pt-4"
              style={{ paddingLeft: "12px" }}
            >
              {/* <input className="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault"></input> */}
              <label
                className="form-check-label mt-3"
                htmlFor="flexCheckDefault"
              >
                Vaccinated :
              </label>

              <div className="form-check form-check-inline mt-3">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="Vaccinated"
                  checked
                  id="petVaccinatedTrue"
                  value="true"
                />
                <label className="form-check-label" htmlFor="petVaccinatedTrue">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline mt-3">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="Vaccinated"
                  id="petVaccinatedFalse"
                  value="false"
                />
                <label
                  className="form-check-label"
                  htmlFor="petVaccinatedFalse"
                >
                  No
                </label>
              </div>
            </div>

            <div className="col-md-6 my-4 text-start">
              <label htmlFor="age" className="form-label">
                {" "}
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="Age"
                required
              />
            </div>
            <div className="col-md-6 mb-3 my-4 text-start">
              <label htmlFor="petBreed" className="form-label">
                Breed
              </label>
              <input
                type="text"
                className="form-control"
                id="petBreed"
                name="Breed"
                placeholder=""
                required
              />
            </div>

            <div className="file-uploader border col-md-12 my-4 rounded-2">
              <div className="col-md-3 ">
                {imageSrc !== "" && (
                  <img
                    src={imageSrc}
                    className="img-thumbnail border-0 mx-0"
                    alt="..."
                  />
                )}
              </div>
              <div className="col-md-9 sub-file-uploder px-3 border-0 my-3">
                <div className=" d-flex justify-content-between">
                  <input
                    type="file"
                    className="form-control border"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    name="PhotoFile"
                    onChange={(evt) => {
                      OnImageUpload(evt);
                    }}
                    required
                  />
                  <button
                    className="btn btn-outline-secondary border-secondary "
                    type="button"
                    onClick={() => {
                      ClearInput();
                    }}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12 mb-3 my-4">
            <label htmlFor="Address" className="form-label">
              {" "}
              Address
            </label>
            <input type="text" className="form-control" id="Address" name="petAddress" required />
          </div> */}

            <div className="my-3 text-start ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Pet Details
              </label>
              <textarea
                className="form-control col-md-12"
                id="exampleFormControlTextarea1"
                name="Details"
                rows="3"
              ></textarea>
            </div>

            <p className="text-start my-4"> Pet Pick-Up and Drop:</p>
            <div className="col-md-6 my-3 text-start">
              <label htmlFor="dropDate" className="mx-0">
                {" "}
                From Date:
              </label>
              <input
                type="date"
                className="input-time mx-3"
                id="dropDate"
                name="DateFrom"
                required
              />
            </div>
            <div className="col-md-6 my-4 text-start">
              <label htmlFor="dropTime">From Time :</label>
              <input
                type="time"
                className="input-time mx-2"
                id="dropTime"
                name="TimeFrom"
                min="10:00"
                max="15:00"
                required
              />
            </div>
            <div className="col-md-6 my-3 text-start">
              <label htmlFor="pickDate" className="">
                To Date:
              </label>
              <input
                type="date"
                className="input-time mx-3"
                id="pickDate"
                name="DateTo"
                required
              />
            </div>

            <div className="col-md-4 my-4 text-start">
              <label htmlFor="pickupTime">To Time : </label>
              <input
                type="time"
                className="input-time mx-2"
                id="pickupTime"
                name="TimeTo"
                min="10:00"
                max="15:00"
                required
              />
            </div>

            <div className="col-md-8 d-grid gap-2 mx-auto my-5 d-flex">
              <button
                type="button"
                className="btn btn-primary w-45p"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Check Availability
              </button>
              <button
                type="button" onClick={()=> ValidateAndSubmit(false)}
                className="btn btn-primary w-45p"
              >
                Next
              </button>
              <button ref={el=> modalButton = el}
                type="button"
                className="btn btn-primary w-45p d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Open Modal
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.reload();
                }}
                className="btn btn-primary w-45p"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div>
          {/* modal availability*/}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Admin Available times
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body ">
                  <div className="my-2 height-60vh">
                    <table>
                      <tr>
                        <td>
                          <strong>Date</strong>
                        </td>
                        <td>
                          <strong>Available Time</strong>
                        </td>
                      </tr>
                      {adminAvailableTimes.length > 0 ? (
                        adminAvailableTimes.map((timing) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  {new Date(
                                    timing.Date.split(" ")[0]
                                  ).toDateString()}
                                </td>
                                <td>
                                  {timing.FullDay
                                    ? "No time available"
                                    : `${Get12HrsFormat(
                                        timing.TimeStart
                                      )} to ${Get12HrsFormat(timing.TimeEnd)}`}
                                </td>
                              </tr>
                            </>
                          );
                        })
                      ) : (
                        <>
                          <tr>
                            <td colSpan={2}>Not found</td>
                          </tr>
                        </>
                      )}
                    </table>
                  </div>
                  <div className="text-end mt-4 px-4">
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-3"
                      data-bs-dismiss="modal"
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Pricing */}
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModal1Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModal1Label">
                    Pricing
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body ">
                  <div className=" row m-5 d-flex flex-wrap my-5 py-5">
                    <div className="col-md-3 my-4 ">
                      <div className="card border-1">
                        <div className="card-body text-center ">
                          <h5 className="card-title fs-3 fw- mb-4">Standard</h5>
                          <p className="card-text">
                            {" "}
                            <strong>$40</strong> <sup>95</sup> per night
                          </p>
                          <p className="card-text"> + </p>
                          <p className="card-text">
                            {" "}
                            <strong>$13</strong> per day
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 my-4 ">
                      <div
                        className="card border-0"
                        style={{ backgroundColor: "rgb(255, 255, 222)" }}
                      >
                        <div className="card-body text-center">
                          <h5 className="card-title fs-3 fw- mb-4">Enhanced</h5>
                          <p className="card-text">
                            {" "}
                            <strong>$40</strong> <sup>95</sup> per night
                          </p>
                          <p className="card-text"> + </p>
                          <p className="card-text">
                            {" "}
                            <strong>$23.00</strong> per day
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 my-4 ">
                      <div
                        className="card border-0"
                        style={{ backgroundColor: " rgb(237, 237, 237)" }}
                      >
                        <div className="card-body text-center">
                          <h5 className="card-title fs-3 fw- mb-4">
                            Comprehensive
                          </h5>
                          <p className="card-text">
                            {" "}
                            <strong>$40</strong> <sup>95</sup> per night
                          </p>
                          <p className="card-text"> + </p>
                          <p className="card-text">
                            {" "}
                            <strong>$33.00</strong> per day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 my-4 ">
                      <div
                        className="card border-0 "
                        style={{ backgroundColor: " rgb(255, 225, 178)" }}
                      >
                        <div className="card-body text-center">
                          <h5 className="card-title fs-3 fw- mb-4">
                            All-Inclusive
                          </h5>
                          <p className="card-text">
                            {" "}
                            <strong>$40</strong> <sup>95</sup> per night
                          </p>
                          <p className="card-text"> + </p>
                          <p className="card-text">
                            {" "}
                            <strong>$13</strong> per day
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => {
                      ValidateAndSubmit(true);
                    }}
                    className="btn btn-outline-primary px-5"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
