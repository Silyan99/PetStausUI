import React, { useEffect, useState } from "react";
import * as service from "../core/service/service";
import { Link } from "react-router-dom";
import UrlConstant from "../constants/UrlConstant";
import config from "../core/config/config";
import { toast } from "react-toastify";
function MyRequests() {
  const [requests, setRequests] = useState([]);
  const GetAllRequests = () => {
    service
      .get(UrlConstant.Customer_AllRequests)
      .then((resp) => {
        if (resp.status === 200) {
          setRequests(resp.data);
        } else {
          toast.error("Error loading requests", config.ToastConfig);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error loading requests", config.ToastConfig);
      });
  };
  useEffect(() => {
    GetAllRequests();
  }, []);
  return (
    <>
      <div className="container">
        <p className="my-3 py-5 pb-2 display-6 mt-4">
          My <span className="text-danger">Requests</span>
        </p>
        <hr />
        <div className="table-box p-5 rounded-3">
          <table className="table1">
            <thead>
              <tr>
                <th className="fw-normal text-center">S.No</th>
                <th className="fw-normal text-center">Pet UID</th>
                <th className="fw-normal text-center">Pet Name</th>
                <th className="fw-normal text-center">Owner</th>
                <th className="fw-normal text-center">Pet Age</th>
                <th className="fw-normal text-center">Address</th>
                <th className="fw-normal text-center">Status</th>
                <th className="fw-normal text-center">Remark</th>
                <th className="fw-normal text-center">View</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                <>
                  {requests.map((x) => {
                    return (
                      <>
                        <tr>
                          <td className="py-4  text-center">1</td>
                          <td className="py-4  text-center">5726</td>
                          <td className="py-4  text-center">Shiro</td>
                          <td className="py-4  text-center">John Wick</td>
                          <td className="py-4  text-center">2 Years</td>
                          <td className="py-4  text-center">#465 st.6</td>
                          <td className="py-4  text-center">Pending</td>
                          <td className="py-4  text-center">-</td>
                          <td className="py-4  text-center">
                            <Link to={`/customer/petdetails/${x.PetId}`}>
                              <img
                                className="table-icon"
                                src="../images/view.png"
                                alt="view"
                              />
                            </Link>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </>
              ) : (
                <tr>
                  <td colSpan={9}>
                    <div className="text-center">No records</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="text-end my-5">
          <Link to={"/customer/appointment"}>
            <button className="btn btn-outline-success px-4 mx-3">
              Add new request
            </button>
          </Link>
          <button
            className="btn btn-outline-primary px-4 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Next
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                <button type="button" className="btn btn-outline-primary px-5">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyRequests;
