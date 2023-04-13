import React from "react";
import { Link } from "react-router-dom";
function PendingRequest() {
  return (
    <>
      <div className="container">
        <p className="my-5 py-5 display-6 text-start">
          Pending <span className="text-danger"> Requests</span>
        </p>

        <div className="table-box p-5 rounded-3 scroll">
          <table class="table table-hover text-start align-middle">
            <thead className="admin-table">
              <tr>
                <th className="fw-normal h5 pb-5 px-3" scope="col">
                  PET
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
                  View Request
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-3">
                  <div className="table-pic">
                    <img src="./images/200-5.jpg" alt="view" />
                  </div>
                </td>
                <td className="py-4 px-3">5465</td>
                <td className="py-4 px-3">Shiro</td>
                <td className="py-4 px-3">John Wick</td>
                <td className="py-4 px-3">3 Year</td>
                <td className="py-4 px-3">164 St No. 9</td>
                <td className="py-4 px-3 text-primary">Pending</td>
                <td className="py-4 px-3">-</td>
                <td className="py-4 px-3">
                  <Link to={"/admin"}>
                    <div className="table-icon">
                      <img src="./images/view.png" alt="view" />
                    </div>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default PendingRequest;
