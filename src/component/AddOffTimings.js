import React, { useEffect, useState } from "react";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { loggedUser } from "../core/authsecurity";
import { toast } from "react-toastify";
import config from "../core/config/config";
import { Get12HrsFormat, IsNullEmptyOfUndefined } from "../core/interactiveforms";
import { Link } from "react-router-dom";
function AddOffTimings() {
  const [offTimings, setOffTimingsList] = useState([]);

  const [currentSelectedItem, setCurrentSelectedItem] = useState({});

  const OnDeleteClick = () => {
    // currentSelectedItem.Id;//todo
    toast.success(`${new Date(currentSelectedItem.Date).toDateString()} deleted.`,config.ToastConfig);
    setTimeout(() => {
        window.location.reload();
    }, 1000);
  };

  const GetOffTimings = () => {
    service
      .get(UrlConstant.Admin_OffTimings(loggedUser.Id))
      .then((response) => {
        if (response.status === 200) {
          setOffTimingsList(response.data);
        } else {
          toast.error("Failed to load OffTimings", config.ToastConfig);
        }
      })
      .catch((error) => {
        toast.error("Failed to loading OffTimings", config.ToastConfig);
        console.log(error);
      });
  };

  const SaveClickHanlder = () => {
    const { offtimeDay, flexRadioDefault, addtimestart, addtimeend } =
      document.forms[0];
    let offtimetype = "";
    if (flexRadioDefault[0].checked) {
      offtimetype = flexRadioDefault[0].value;
    } else if (flexRadioDefault[1].checked) {
      offtimetype = flexRadioDefault[1].value;
    }
    let data = {
      Date: offtimeDay.value,
      TimeStart: offtimetype !== "day" ? `${addtimestart.value}:00` : "00:00:00",
      TimeEnd: offtimetype !== "day" ? `${addtimeend.value}:00` : "00:00:00",
      FullDay: offtimetype === "day",
      AdminId: loggedUser.Id,
    };
    if (!ValidateInputData(data)) {
      return;
    }

    service
      .post(UrlConstant.Admin_SaveAvailability, data)
      .then((response) => {
        if (response.status === 200) {
          if(response.data.Status){
            toast.error("Timings saved.", config.ToastConfig);
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
          else{
            toast.error(response.data.Message, config.ToastConfig);  
          }
        } else {
          toast.error("Failed to Save OffTimings", config.ToastConfig);
        }
      })
      .catch((error) => {
        toast.error("Failed to Save OffTimings", config.ToastConfig);
        console.log(error);
      });
  };

  const ValidateInputData = (data) => {
    let requiredValidationFailed = IsNullEmptyOfUndefined(data.Date) ||  (data.FullDay !== true && (IsNullEmptyOfUndefined(data.TimeStart) || IsNullEmptyOfUndefined(data.TimeEnd)));

    if (requiredValidationFailed) {
      toast.error(
        `Date ${data.FullDay ? "is" : ", Start and End time are"} required.`,
        config.ToastConfig
      );
      return false;
    }

    if (data.FullDay===false && (
      Date.parse(`${data.Date} ${data.TimeStart}`) >
      Date.parse(`${data.Date} ${data.TimeEnd}`))
    ) {
      toast.error(
        `Start time cannot be greater than End time.`,
        config.ToastConfig
      );
      return false;
    }

    if (data.FullDay===false && (
      Date.parse(`${data.Date} ${data.TimeStart}`) <
        Date.parse(`${data.Date} 10:00:00`) ||
      Date.parse(`${data.Date} ${data.TimeEnd}`) >
        Date.parse(`${data.Date} 15:00:00`))
    ) {
      toast.error(
        "Available time should be between 10:00 to 15:00",
        config.ToastConfig
      );
      return false;
    }

    return true;
  };

  

  useEffect(() => {
    GetOffTimings();
  }, []);

  return (
    <>
      <div className="container">
        <p className="my-4 pb-2 py-5 display-6">
          Add <span className="text-danger">Off Timings</span>
        </p>
        <hr></hr>
        <p>Note: By default all days are available between 10:00 AM to 03:00 PM</p>
        <form>
          <div className="col-md-12 table-box d-flex flex-row justify-content-around flex-wrap py-2">
            <div className="col-md-3">
              <div className="col-md-12 ">
                <label htmlFor="offtimeDay" className="mx-0 my-3">
                <strong>Select Date :</strong>
                </label>
                <input
                  type="date"
                  className="input-time mx-3"
                  id="addofftime"
                  name="offtimeDay"
                  required
                />
              </div>
              <div className="col-md-12 m-5 ">
                <div className="form-check col-md-4 py-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={"day"}
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    All Day Off
                  </label>
                </div>
                <div className="form-check col-md-4 py-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={"time"}
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Select Time
                  </label>
                </div>
                <div className="col-md-12 py-5">
                  <label htmlFor="addtimestart"> <strong>Start Time : </strong></label>
                  <input
                    type="time"
                    className="input-time mx-2"
                    id="add-time-start"
                    name="addtimestart"
                    required
                  />
                </div>
                <div className="col-md-12 pb-5">
                  <label htmlFor="add-time-end"> <strong>End Time:</strong> </label>
                  <input
                    type="time"
                    className="input-time mx-2"
                    id="add-time-end"
                    name="addtimeend"
                    required
                  />
                </div>

                <div className="text-start">
                  <button
                    className="btn btn-outline-success px-5"
                    type="button"
                    onClick={() => SaveClickHanlder()}
                  >
                    Save
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-primary px-5"
                    type="button"
                    onClick={() => {
                      window.history.back();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5 mx-5 mt-1 pt-1 p-5 border-left-light">
              <p className="mb-4 fs-4">Off Times(2 weeks)</p>
              <hr/>
              <table className="table py-5">
                <thead>
                  <tr className="">
                    <td scope="col" className="p-3 fw-500">
                      Date
                    </td>
                    <td scope="col" className="p-3 fw-500" colSpan="3">
                      Time
                    </td>
                    <td scope="col" className="p-3">
                      
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {offTimings && offTimings.length > 0 ? (
                    offTimings.map((offTiming, i) => {
                      return (
                        <>
                          <tr key={i}>
                            <td className="p-3" scope="row" key={1}>
                              {new Date(offTiming.Date).toDateString()}
                            </td>
                            {offTiming.FullDay === true ? (
                              <>
                                <td
                                  className="p-3 text-danger border-left-light"
                                  colSpan="3"
                                  key={2}
                                >
                                  All day off
                                </td>
                                <td className="border-left-light">
                                  <div className="table-icon" title="Delete">
                                    <Link data-bs-toggle="modal" data-bs-target="#exampleModal"
                                      onClick={() =>{
                                        setCurrentSelectedItem(offTiming);
                                    }}
                                    >
                                      <img
                                        src="../images/delete.png"
                                        alt="view"
                                      />
                                    </Link>
                                  </div>
                                </td>
                              </>
                            ) : (
                              <>
                                <td className="p-3 border-left-light">
                                 {Get12HrsFormat(offTiming.TimeStart)}
                                </td>
                                <td className="p-3">
                                 to
                                </td>
                                <td className="p-3">
                                 {Get12HrsFormat(offTiming.TimeEnd)}
                                </td>
                                <td className="border-left-light">
                                  <div className="table-icon" title="Delete">
                                    <Link data-bs-toggle="modal" data-bs-target="#exampleModal"
                                      onClick={() =>
                                        setCurrentSelectedItem(offTiming)
                                      } 
                                    >
                                      <img
                                        src="../images/delete.png"
                                        alt="view"
                                      />
                                    </Link>
                                  </div>
                                </td>
                              </>
                            )}
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <tr>
                        <td colSpan={2}>No data found</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </form>
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
                  Delete Timing
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
                  Are you sure you want to delete your Request?
                </div>
                <div className="text-end mt-4 px-4">
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => OnDeleteClick()}
                  >
                    Delete
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
export default AddOffTimings;
