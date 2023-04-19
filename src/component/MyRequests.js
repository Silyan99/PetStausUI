import React from "react";
import { Link } from "react-router-dom";
function MyRequests() {
  return (
    <>
      <div className="container">
        <p className="my-3 py-5 display-6">
          My <span className="text-danger">Requests</span>
        </p>
      <hr/>
        <div className="table-box p-5 rounded-3 scroll">
          <table className="table table-hover text-start">
            <thead>
              <tr>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  S.No
                </th>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  Pet UID
                </th>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  Pet Name
                </th>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  Owner
                </th>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  Pet Age
                </th>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  Address
                </th>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  Status
                </th>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  Remark
                </th>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-3">1</td>
                <td className="py-4 px-3">5465</td>
                <td className="py-4 px-3">Shiro</td>
                <td className="py-4 px-3">John Wick</td>
                <td className="py-4 px-3">3 Year</td>
                <td className="py-4 px-3">164 St No. 9</td>
                <td className="py-4 px-3 text-primary">Pending</td>
                <td className="py-4 px-3">-</td>
                <td className="py-4 px-3">
                  <Link to={"/petdetails"}>
                    <div className="table-icon">
                      <img src="../images/view.png" alt="view" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3">2</td>
                <td className="py-4 px-3">5465</td>
                <td className="py-4 px-3">Shiro</td>
                <td className="py-4 px-3">John Wick</td>
                <td className="py-4 px-3">3 Year</td>
                <td className="py-4 px-3">164 St No. 9</td>
                <td className="py-4 px-3 text-primary">Pending</td>
                <td className="py-4 px-3">-</td>
                <td className="py-4 px-3">
                  <Link to={"/petdetails"}>
                    <div className="table-icon">
                      <img src="../images/view.png" alt="view" />
                    </div>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3">3</td>
                <td className="py-4 px-3">5465</td>
                <td className="py-4 px-3">Shiro</td>
                <td className="py-4 px-3">John Wick</td>
                <td className="py-4 px-3">3 Year</td>
                <td className="py-4 px-3">164 St No. 9</td>
                <td className="py-4 px-3 text-primary">Pending</td>
                <td className="py-4 px-3">-</td>
                <td className="py-4 px-3">
                  <Link to={"/petdetails"}>
                    <div className="table-icon">
                      <img src="../images/view.png" alt="view" />
                    </div>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-end my-5">
        <Link to={"/customer/appointment"}>
          <button className="btn btn-outline-success px-4 mx-3">
            Add new request
          </button>
          </Link>
          <button className="btn btn-outline-primary px-4 " data-bs-toggle="modal" data-bs-target="#exampleModal">
            Next
          </button>
        </div>
        
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Pricing</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
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
                <button type="button" className="btn btn-outline-primary px-5">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyRequests;
