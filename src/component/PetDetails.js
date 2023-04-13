import React from "react";
function PetDetails() {
    return (
        <>
            <p className="text-start m-5 px-5 pt-5 display-5">Pet <span className="text-danger">Details</span></p>


            <div className="container d-flex flex-row flex-wrap justify-content-center">

                <div
                    className="container col-md-11 mx-2 my-5  d-flex flex-row flex-wrap justify-content-evenly mt-5"
                    style={{ maxWidth: "80vw" }}
                >

                    <div className="col-md-6 d-flex justify-content-center align-item-center ">
                        <img
                            src="images/500-2.jpg"
                            className="img-fluid rounded"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-6 text-start my-1">
                        <div className="card-body">
                            <p className="h4 fw-normal m-3 ">
                                Pet Name : <span className="text-danger"> Shiro</span>
                            </p>
                            <p className="h6 m-3 ">
                                UID : <span> 20730392</span>
                            </p>
                            <p className="h6 m-3 ">
                                Category : <span> Dog</span>
                            </p>
                            <p className="h6 m-3">
                                Breed : <span> Pug </span>
                            </p>

                            
                            <p className="h6 m-3 ">
                                Color : <span>Brown</span>
                            </p>
                            <p className="h6 m-3">
                                Gender : <span>Female</span>
                            </p>
                            <p className="h6 m-3">
                                Vaccinated : <span>yes</span>
                            </p>
                            <p className="h6 m-3">
                                Age : <span>3y</span>
                            </p>
                            <p className="h6 m-3">
                                Address : <span>16526 street 5</span>
                            </p>
                            <p className="h6 m-3">
                                Pick-Up : <span>At : 11:00 From : 05-04-2023 To : 10-04-2023</span>
                            </p>
                            <p className=" m-3">
                                <strong> Details : </strong><span>Shiro has sharp teeth so that it can eat flesh very easily,
                                    It is a very clever animal and is very useful in catching thieves.
                                    It runs very fast, barks loudly and attacks the strangers.</span>
                            </p>




                            <p className="card-text mx-3 mt-4">
                                <button type="button" className="btn btn-outline-primary ">
                                    Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Delete
                                </button>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Request</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body ">
                            <div className="my-2">
                                Are you sure you want to delete your Request?
                            </div>
                            <div className="text-end mt-4 px-4">
                                <button type="button" className="btn btn-outline-primary mx-3">Cencle</button>
                                <button type="button" className="btn btn-outline-danger">Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default PetDetails