import React from "react";
import PetData from "../sharedData/PetData";

function Admin() {
    return (
        <div>
            <p className="text-start m-5 px-5 pt-5 display-5">Pet Requests </p>
            {PetData.map(({ img, petname, uid, category, breed, color, gender, vaccinated, age, address, pickup, details }) => {
                return (
                    <div className="container d-flex flex-row flex-wrap justify-content-center mt-5">
                        <div
                            className="container col-md-11 mx-2 my-5  d-flex flex-row flex-wrap justify-content-evenly mt-5"
                            style={{ maxWidth: "80vw" }}
                        >

                            <div className="pet-image col-md-6 d-flex justify-content-center align-item-center " >
                                <img
                                    src={img}
                                    className="img-fluid rounded"
                                    alt="..."

                                />
                            </div>
                            <div className="col-md-6 text-start my-0">
                                <div className="card-body">
                                    <p className="h4 fw-normal m-3 ">
                                        Pet Name : <span className="text-danger"> {petname}</span>
                                    </p>
                                    <p className="h6 m-3 ">
                                        UID : <span>{uid}</span>
                                    </p>
                                    <p className="h6 m-3 ">
                                        Category : <span> {category}</span>
                                    </p>
                                    <p className="h6 m-3">
                                        Breed : <span> {breed} </span>
                                    </p>
                                    <p className="h6 m-3 ">
                                        Color : <span>{color}</span>
                                    </p>
                                    <p className="h6 m-3">
                                        Gender : <span>{gender}</span>
                                    </p>
                                    <p className="h6 m-3">
                                        Vaccinated : <span>{vaccinated}</span>
                                    </p>
                                    <p className="h6 m-3">
                                        Age : <span>{age}</span>
                                    </p>
                                    <p className="h6 m-3">
                                        Address : <span>{address}</span>
                                    </p>
                                    <p className="h6 m-3">
                                        Pick-Up : <span>{pickup}</span>
                                    </p>
                                    <p className=" m-3">
                                        <strong> Details : </strong><span>{details}</span>
                                    </p>

                                    <p className="card-text mx-3 mt-4">
                                        <button type="button" className="btn btn-outline-success mx-1 ">
                                            Approve
                                        </button>
                                        <button type="button" className="btn btn-outline-danger mx-1">
                                            Reject
                                        </button>
                                        <button type="button" className="btn btn-outline-primary dropdown-toggle mx-1"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Pending
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="px-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">Leave a Comment</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                <div className="text-end">
                                                <button type="button" class="btn btn-primary btn-sm my-2 w-100 ">Submit</button>
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
                );
            })}
        </div>
    );
}

export default Admin;
