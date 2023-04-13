import React from "react";
import { Link } from "react-router-dom";
function AddOffTimings() {
    return (
        <>
            <div className="container">
                <p className="my-5 py-5 display-6 text-start">Add <span className="text-danger"> Off Timings</span></p>
                <div className="col-md-12 table-box d-flex flex-row justify-content-around flex-wrap">
                    <div className="col-md-3 ">
                        <div className="col-md-12 ">
                            <label htmlFor="addofftime " className="mx-0 my-5">
                                {" "}
                                Select Date :
                            </label>
                            <input
                                type="date"
                                className="input-time mx-3"
                                id="addofftime"
                                name="addofftime"
                                required
                            />
                        </div>
                        <div className="col-md-12 m-5 ">
                            <div className="form-check col-md-4 py-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    All Day Off
                                </label>
                            </div>
                            <div className="form-check col-md-4 py-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Select Time
                                </label>

                            </div>
                            <div className="col-md-12 py-5">
                                <label htmlFor="add-time"> start : </label>
                                <input
                                    type="time"
                                    className="input-time mx-2"
                                    id="time"
                                    name="add-time"

                                    required
                                />
                            </div>
                            <div className="col-md-12 pb-5">

                                <label htmlFor="add-time"> End : </label>
                                <input
                                    type="time"
                                    className="input-time mx-2"
                                    id="add-time"
                                    name="add-time"

                                    required
                                />
                            </div>

                            <div className="text-start">
                                <button className="btn btn-outline-success px-5">
                                    Save
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5 m-5 p-5">
                        <p className="mb-5 fs-4 text-start">Off  Times</p>
                        <table class="table py-5">
                            <thead >
                                <tr className="" >
                                    <td scope="col" className="p-3">Date</td>
                                    <td scope="col" className="p-3" colspan="2">Time</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3" scope="row">13-04-2023</td>
                                    <td className="p-3">10:30</td>
                                    <td className="p-3">12:30</td>

                                </tr>
                                <tr>
                                    <td className="p-3" scope="row">18-04-2023</td>
                                    <td className="p-3 text-danger" colspan="2">All day off</td>

                                </tr>
                                <tr>
                                    <td className="p-3" scope="row">15-04-2023</td>
                                    <td className="p-3">11:47</td>
                                    <td className="p-3">12:58</td>
                                </tr>
                                <tr>
                                    <td className="p-3" scope="row">15-04-2023</td>
                                    <td className="p-3">11:47</td>
                                    <td className="p-3">12:58</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </>
    )
}
export default AddOffTimings