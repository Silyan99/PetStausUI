import React from "react";
import { Link } from "react-router-dom";

function Appointment() {
  return (
    <>
      <div className="container my-3 py-5">
        <p className="display-6 my-4 pb-4">
          Create the <span className="text-danger"> Appointment</span>{" "}
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <div className="pet-radio-inputs my-3 col-md-12">
            <label className="pet-radio">
              <input type="radio" name="petCategory" checked value="Dog" />
              <span className="name">Dog</span>
            </label>
            <label className="pet-radio">
              <input type="radio" name="petCategory" value="Cat" />
              <span className="name">Cat</span>
            </label>
          </div>
        </div>
        {/* <div className="col-md-12 ">
          <label htmlFor="inputEmail4" className="form-label">
            Number of pets that would like to bring to the daycare
          </label>
          <input
            type="number"
            className="mx-2 input-time"
            id="inputEmail4"
            required
          />
        </div> */}
        <div className="container  form-box">
          <form className=" row my-5">
            <div className="col-md-6 mb-3 my-4 text-start">
              <label htmlFor="petname" className="form-label">
                Pet Name
              </label>
              <input
                type="text"
                className="form-control"
                id="petname"
                name="petname"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-6 my-2 d-flex flex-row align-items-center pt-4">
              <label className="form-check-label mt-3" htmlFor="petGender">
                Gender :
              </label>
              <div className="col-md-2  mx-5 mt-3">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="petGender"
                    id="petGenderMale"
                    value="male"
                    checked
                  />
                  <label className="form-check-label" htmlFor="petGenderMale">
                    Male
                  </label>
                </div>
              </div>
              <div className="col-md-2  mt-3">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="petGender"
                    id="petGenderFemale"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="petGenderFemale">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3 my-4 text-start">
              <label htmlFor="petcolor" className="form-label">
                Pet color
              </label>
              <input
                type="text"
                className="form-control"
                id="petcolor"
                name="petColor"
                placeholder=""
                required
              />
            </div>

            <div
              className="form-check col-md-6 my-3 px- d-flex flex-row align-items-center pt-4"
              style={{ paddingLeft: "12px" }}
            >
              {/* <input className="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault"></input> */}
              <label
                className="form-check-label mt-3"
                htmlFor="flexCheckDefault"
              >
                Vaccinated
              </label>

              <div className="form-check form-check-inline mt-3">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="petVaccination"
                  id="petVaccinatedTrue"
                  value="true"
                />
                <label className="form-check-label" htmlFor="petVaccinatedTrue">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline mt-3">
                <input
                  className="form-check-input mx-1"
                  type="radio"
                  name="petVaccination"
                  id="petVaccinatedFalse"
                  value="false"
                />
                <label
                  className="form-check-label"
                  htmlFor="petVaccinatedFalse"
                >
                  No
                </label>
              </div>
            </div>

            <div className="col-md-6 my-4 text-start">
              <label htmlFor="age" className="form-label">
                {" "}
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="Age"
                required
              />
            </div>
            <div className="col-md-6 mb-3 my-4 text-start">
              <label htmlFor="petBreed" className="form-label">
                Breed
              </label>
              <input
                type="text"
                className="form-control"
                id="petBreed"
                placeholder=""
                required
              />
            </div>

            <div className="file-uploader border col-md-12 my-4 rounded-2">
              <div className="col-md-1 ">
                <img
                  src="../images/200-4.jpg"
                  class="img-thumbnail border-0 mx-0"
                  alt="..."
                />
              </div>
              <div className="col-md-11 sub-file-uploder px-3 border-0 my-3">
                <div className=" d-flex justify-content-between">
                  <input
                    type="file"
                    className="form-control border"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    name="petPhoto"
                    required
                  />
                  <button
                    className="btn btn-outline-secondary border-secondary "
                    type="button"
                    id="inputGroupFileAddon04"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12 mb-3 my-4">
            <label htmlFor="Address" className="form-label">
              {" "}
              Address
            </label>
            <input type="text" className="form-control" id="Address" name="petAddress" required />
          </div> */}

            <div className="my-3 text-start ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Pet Details
              </label>
              <textarea
                className="form-control col-md-12"
                id="exampleFormControlTextarea1"
                name="petDetail"
                rows="3"
              ></textarea>
            </div>

            <p className="text-start my-4"> Pet Pick-Up and Drop Date:</p>
            <div className="col-md-4 my-3 text-start">
              <label htmlFor="dropDate" className="mx-0">
                {" "}
                From Date:
              </label>
              <input
                type="date"
                className="input-time mx-3"
                id="dropDate"
                name="dropDate"
                required
              />
            </div>
            <div className="col-md-6 my-4 text-start">
              <label htmlFor="dropTime">From Time :</label>
              <input
                type="time"
                className="input-time mx-2"
                id="dropTime"
                name="dropTime"
                min="10:00"
                max="15:00"
                required
              />
            </div>
            <div className="col-md-4 my-3 text-start">
              <label htmlFor="pickDate" className="">
                To Date:
              </label>
              <input
                type="date"
                className="input-time mx-3"
                id="pickDate"
                name="pickDate"
                required
              />
            </div>

            <div className="col-md-4 my-4 text-start">
              <label htmlFor="pickupTime">To Time : </label>
              <input
                type="time"
                className="input-time mx-2"
                id="pickupTime"
                name="pickupTime"
                min="10:00"
                max="15:00"
                required
              />
            </div>
            <Link to={"/myrequests"}>
              <div className=" col-md-6 d-grid gap-2 mx-auto my-5">
                <button type="submit" className="btn btn-primary">
                  Next
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Appointment;
