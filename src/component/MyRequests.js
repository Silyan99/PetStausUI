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
                {/* <th className="fw-normal text-center">Owner</th> */}
                <th className="fw-normal text-center">Pet Age</th>
                {/* <th className="fw-normal text-center">Address</th> */}
                <th className="fw-normal text-center">Status</th>
                <th className="fw-normal text-center">Remark</th>
                <th className="fw-normal text-center">View</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                <>
                  {requests.map((x,i) => {
                    return (
                      <>
                        <tr>
                          <td className="py-4  text-center">{i+1}</td>
                          <td className="py-4  text-center">{x.Uid}</td>
                          <td className="py-4  text-center">{x.Name}</td>
                          {/* <td className="py-4  text-center">owner</td> */}
                          <td className="py-4  text-center">{x.Age} Yrs</td>
                          {/* <td className="py-4  text-center">{x.Address}</td> */}
                          <td className="py-4  text-center">{x.Status}</td>
                          <td className="py-4  text-center">{x.Remarks}</td>
                          <td className="py-4  text-center">
                            <div className="table-icon">
                            <Link to={`/customer/petdetails/${x.PetId}`}>
                              <img className="table-icon"
                                src="../images/view.png"
                                alt="view"
                              />
                            </Link>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </>
              ) : (
                <tr >
                  <td colSpan={9} className="no-records">
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
        </div>

        
      </div>
    </>
  );
}
export default MyRequests;
