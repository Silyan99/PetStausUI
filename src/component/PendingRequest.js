import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { toast } from "react-toastify";
import config from "../core/config/config";

function PendingRequest() {
  const [requests, setRequests] = useState([]);
  const GetAllRequests = () => {
    service
      .get(UrlConstant.Admin_AllRequests)
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
        <p className="my-4 py-5 display-6">
          Pending <span className="text-danger">Requests</span><hr/>
        </p>
        
        <div className="table-box p-5 rounded-3 scroll">
         
          <table className="table1">
            <thead>
              <tr>
                <th className="fw-normal text-center" >S No.</th>
                <th className="fw-normal text-center" >Pet UID</th>
                <th className="fw-normal text-center" >Pet Name</th>
                <th className="fw-normal text-center" >Owner</th>
                <th className="fw-normal text-center" >Pet Age</th>
                <th className="fw-normal text-center" >Address</th>
                <th className="fw-normal text-center" >Status</th>
                <th className="fw-normal text-center" >Remark</th>
                <th className="fw-normal text-center" >View</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                <>
                  {requests.map((x) => {
                    return (
                      <>
                        <tr>
                          <td className="py-4 px-3">
                            <div className="table-pic">
                              <img src={`${config.BaseUrl}${x.Photo || (x.Category.toLowerCase()==="dog"?"default_dog.png":"default_cat.png")}`} alt="view" />
                            </div>
                          </td>
                          <td className="py-4 px-3">{x.Uid}</td>
                          <td className="py-4 px-3">{x.Name}</td>
                          <td className="py-4 px-3">{x.OwnerId}</td>
                          <td className="py-4 px-3">{x.Age}yrs</td>
                          {/* todo */}
                          <td className="py-4 px-3">{x.Address}</td>
                          {/* todo */}
                          <td className="py-4 px-3 text-primary">{x.Status}</td>
                          <td className="py-4 px-3">{x.Remarks}</td>
                          <td className="py-4 px-3">
                            <Link to={`/admin/editrequest/${x.PetId}`}>
                              <div className="table-icon">
                                <img src="../images/view.png" alt="view" />
                              </div>
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
      </div>
    </>
  );
}
export default PendingRequest;
