import React from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      <div className="container m-5 ">
        <p className="display-6 my-5 text-start py-5">Greetings from our Pet Stays</p>
      </div>

      <div className="container mt-5 ">
        <div className="profile my-5">
          <div className="profile-pic">
            <img src="./images/user-dp.png" alt="Profile Picture" />
          </div>
          <div className="profile-info text-start">
            <h1 className="mx-4">John Wick</h1>
            <p className="mx-4">johnwick05</p>
            <ul>
              <li>
                <strong>Email:</strong> <span>john.wick@gmail.com</span>
              </li>
              <li>
                <strong>Phone:</strong> <span> 123-456-7890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header " id="flush-headingOne">
              <button
                className="accordion-button collapsed border border-primary my-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Book an Appointment
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-start">
                <div className="row my-5 d-flex flex-wrap">
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

                <div className="pet-radio-inputs my-5 ">
                  <label className="pet-radio">
                    <input type="radio" name="radio" checked />
                    <span className="name">Dog</span>
                  </label>
                  <label className="pet-radio">
                    <input type="radio" name="radio" />
                    <span className="name">Cat</span>
                  </label>
                </div>

                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Number of pets that would like to bring to the daycare
                  </label>
                  <input
                    type="number"
                    className="mx-2 input-time"
                    id="inputEmail4"
                    required
                  />
                </div>

                <p className="display-6 my-5">Create the appointment. </p>

                <form className="row  my-5 ">

                  <div className="col-md-6 mb-3 my-4">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Pet Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3 my-4">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Pet color
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="form-check col-md-6 my-3 px-1 d-flex flex-row align-items-center"
                  >
                    {/* <input class="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault"></input> */}
                    <label
                      className="form-check-label "
                      htmlFor="flexCheckDefault"
                    >
                      Vaccinated
                    </label>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input mx-1" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input mx-1" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                    </div>


                  </div>
                  <div className="col-md-6 my-2 d-flex flex-row align-items-center">
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Gender :
                    </label>
                    <div className="col-md-2 my-2 mx-5">

                      <div className="form-check ">


                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Male
                        </label>
                      </div>
                    </div>
                    <div className="col-md-2 my-2">
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 my-4">
                    <label htmlFor="age" className="form-label">
                      {" "}
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3 my-4">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Breed
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-md-12 mb-3 my-4">
                    <label htmlFor="Address" className="form-label">
                      {" "}
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Address"
                      required
                    />
                  </div>

                  <div className="input-group my-4">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      required
                    />
                    <button
                      className="btn btn-outline-secondary border-secondary"
                      type="button"
                      id="inputGroupFileAddon04"
                    >
                      Upload
                    </button>
                  </div>
                  <div class="my-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Pet Details</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>

                  <p> Pet Pick-Up Date:</p>
                  <div className="col-md-6 my-3 ">
                    <label htmlFor="pickup-date-from " className="mx-0">
                      {" "}
                      From :
                    </label>
                    <input
                      type="date"
                      className="input-time mx-3"
                      id="pickup-date-from"
                      name="pickup-date-from"
                      required
                    />
                  </div>
                  <div className="col-md-6 my-3 ">
                    <label htmlFor="pickup-date-to" className="mx-3" >
                      To :
                    </label>
                    <input
                      type="date"
                      className="input-time"
                      id="pickup-date-to"
                      name="pickup-date-to"
                      required
                    />
                  </div>

                  <div className="col-md-8 my-4">
                    <label htmlFor="delivery-time">Pet Pick-Up Time : </label>
                    <input
                      type="time"
                      className="input-time mx-2"
                      id="delivery-time"
                      name="delivery-time"
                      min="10:00"
                      max="15:00"
                      required
                    />
                  </div>
                  <Link to={"/petdetails"} className="col-md-6 d-grid gap-2 mx-auto my-5">
                    <button type="button" className="btn btn-primary">
                      View Requests
                    </button>
                  </Link>
                  <div className=" col-md-6 d-grid gap-2 mx-auto my-5">
                    <button type="submit" className="btn btn-primary">
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
