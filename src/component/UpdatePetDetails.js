import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { toast } from "react-toastify";
import config from "../core/config/config";
import { Get12HrsFormat, GetTimeForTimeControl } from "../core/interactiveforms";
function UpdatePetDetails() {
  let { id } = useParams();
  const [Details, setDetails] = useState("");

  const [Name,setName]=useState("");
  const [Uid,setUid]=useState("");
  const [Gender,setGender]=useState("");
  const [Category,setCategory]=useState("");
  const [Vaccinated,setVaccinated]=useState(false);
  const [Breed,setBreed]=useState("");
  const [Color,setColor]=useState("");
  const [Age,setAge]=useState(0);
  const [DateFrom,setDateFrom]=useState("");
  const [TimeFrom,setTimeFrom]=useState("");
  const [DateTo,setDateTo]=useState("");
  const [TimeTo,setTimeTo]=useState("");
  const [Photo,setPhoto]=useState("");
  
  const GetRequestDetails = () => {
    service
      .get(UrlConstant.Customer_GetRequestDetailURL(id))
      .then((response) => {
        if (response.status === 200) {
            // setDetails(response.data);
            setName(response.data.Name);
            setAge(response.data.Age);
            setBreed(response.data.Breed);
            setGender(response.data.Gender);
            setVaccinated(response.data.Vaccinated);
            setCategory(response.data.Category);
            setColor(response.data.Color);
            setDateFrom(response.data.DateFrom);
            setDateTo(response.data.DateTo);
            setTimeFrom(response.data.TimeFrom);
            setTimeTo(response.data.TimeTo);
            setUid(response.data.Uid);
            setDetails(response.data.Details);
            setPhoto(response.data.Photo);
        }
        else{
            toast.error("Failed to load Pet details", config.ToastConfig);
        }
      })
      .catch((error) => {
        toast.error("Failed to load Pet details", config.ToastConfig);
        console.log(error);
      });
  };

  const OnUpdateClick = ()=>{
    service.put(UrlConstant.Customer_UpdateRequest(id)).then(response=>{
        if (response.status === 200) {
            toast.success("Request deleted", config.ToastConfig);
            setTimeout(() => {
              window.location.href = "/customer/myrequests";
          }, 2000);
        }
        else{
          toast.error("Failed to delete Pet details", config.ToastConfig);
        }

    }).catch(err=>{
        toast.error("Failed to delete Pet details", config.ToastConfig);
        console.log(err);
    });
  }

  useEffect(() => {
      GetRequestDetails(); 
  },[]);

  return (
    <>
      <div className="container">
        <p className="m-5 px-5 pt-5 display-5">
          Pet <span className="text-danger">Details</span>
        </p>
        <hr></hr>
        <div className="container d-flex flex-row flex-wrap justify-content-center">
          <div
            className="container col-md-11 mx-2 my-4 d-flex flex-row flex-wrap justify-content-evenly mt-5"
            style={{ maxWidth: "80vw" }}
          >
            <div className="col-md-6 d-flex justify-content-center align-item-center ">
            <img
              src={`${config.BaseUrl}${Photo || (Category && Category.toLowerCase()==="dog" ? "default_dog.png":"default_cat.png")}`}
              className="img-fluid rounded"
              alt="..."
            />
            </div>
            <div className="col-md-6 text-start my-1">
              <div className="card-body">
                <p className="h4 fw-normal m-3 ">
                  Pet Name :  <input type="text" onChange={(ev)=>{ setName(ev.target.value) }} className="form-control" id="petname" value={Name} name="Name" placeholder="" required />
                </p>
                <p className="h6 m-3 ">
                  UID : <span> {Uid}</span>
                </p>
                <p className="h6 m-3 ">
                  Category : <input type="text" onChange={(ev)=>{ setCategory(ev.target.value) }} className="form-control" id="petname" value={Category} name="Category" placeholder="" required />
                </p>
                <p className="h6 m-3">
                  Breed : <input type="text" className="form-control" onChange={(ev)=>{ setBreed(ev.target.value) }} id="petname" value={Breed} name="Breed" placeholder="" required />
                </p>

                <p className="h6 m-3 ">
                  Color : <input type="text" className="form-control" onChange={(ev)=>{ setColor(ev.target.value) }} id="petname" name="Color" value={Color} placeholder="" required />
                </p>
                <p className="h6 m-3">
                  Gender : <input className="form-check-input" type="radio" onClick={(ev)=>{ setGender("male") }} name="Gender" id="petGenderMale" value="male" checked={Gender==="male"} checked />
                  <label className="form-check-label" htmlFor="petGenderMale">
                    Male
                  </label>&nbsp;
                  <input className="form-check-input" type="radio" name="Gender" onClick={(ev)=>{ setGender("female") }} id="petGenderFemale" value="female" checked={Gender==="female"} />
                  <label className="form-check-label" htmlFor="petGenderFemale">
                    Female
                  </label>
                </p>
                <p className="h6 m-3">
                  Vaccinated : <input
                    className="form-check-input"
                    type="radio"
                    name="Vaccinated"
                    id="vaccinatedYes"
                    value="true"
                    onClick={(ev)=>{ setVaccinated(true) }}
                    checked={Vaccinated ===true}
                  />
                  <label className="form-check-label" htmlFor="vaccinatedYes">
                    Yes
                  </label>&nbsp;
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Vaccinated"
                    id="vaccinatedNo"
                    value="false"
                    onClick={(ev)=>{ setVaccinated(false) }}
                    checked={Vaccinated ===false}
                  />
                  <label className="form-check-label" htmlFor="vaccinatedNo">
                    No
                  </label>
                </p>
                <p className="h6 m-3">
                  Age : <input type="number" className="form-control" id="age" name="Age" onChange={(ev)=>{ setAge(ev.target.value) }} value={Age} required />
                </p>
                <p className="h6 m-3">
                    Drop On : <input type="date" className="input-time mx-3" id="dropDate" name="DateFrom" onChange={(ev)=>{ setDateFrom(ev.target.value) }} value={DateFrom} required />
                  <span><input type="time" className="input-time mx-2" id="dropTime" name="TimeFrom" min="10:00" max="15:00" onChange={(ev)=>{ setTimeFrom(ev.target.value) }} value={GetTimeForTimeControl(TimeFrom)} required /></span>
                </p>
                <p className="h6 m-3">
                    Pick-Up : <input type="date" className="input-time mx-3" id="pickUpDate"  value={DateTo} name="DateTo" onChange={(ev)=>{ setDateTo(ev.target.value) }} required />,
                    <span><input type="time" className="input-time mx-2" id="pickUpTime" name="TimeTo" min="10:00" onChange={(ev)=>{ setTimeTo(ev.target.value) }} value={GetTimeForTimeControl(TimeTo)} max="15:00" required /></span>
                </p>
                <p className=" m-3">
                  <strong> Details : </strong>
                  <textarea className="form-control col-md-12" value={Details} onClick={(ev)=>{ setDetails(ev.target.value) }} id="exampleFormControlTextarea1" name="Details" rows="3" ></textarea>
                </p>
                <p className="card-text mx-3 mt-4">
                  <button type="button" onClick={()=>{OnUpdateClick();}} className="btn btn-outline-primary ">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Cancel
                  </button>
                  <Link
                    type="button"
                    className="btn btn-outline-primary"
                    to={`/customer/petdetails/${id}`}
                  >
                    Back
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatePetDetails;
