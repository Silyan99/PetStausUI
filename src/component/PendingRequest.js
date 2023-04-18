import React from "react";
import { Link } from "react-router-dom";
function PendingRequest() {
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
                  <Link to={"/admin/petdetails"}>
                    <img className="table-icon" src="../images/view.png" alt="view" />
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
