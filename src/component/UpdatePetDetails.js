import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as service from "../core/service/service";
import UrlConstant from "../constants/UrlConstant";
import { toast } from "react-toastify";
import config from "../core/config/config";
import { GetTimeForTimeControl, ValidateAllFields } from "../core/interactiveforms";

function UpdatePetDetails() {

  const { id } = useParams();
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
  }

  const OnUpdateClick = ()=>{
    var data = {
      Id: parseInt(id),
      Category: Category,
      Uid: Uid,
      Name: Name,
      Age: Age,
      Gender: Gender,
      Vaccinated: Vaccinated,
      Color: Color,
      Breed: Breed,
      Details: Details,
      PhotoFile: new File(["foo"], "foo.txt", {
        type: "text/plain",
      }),
      Photo: "DummyPhoto",
      DateFrom: DateFrom,
      DateTo: DateTo,
      TimeFrom: `${TimeFrom.substring(0,5)}:00`,
      TimeTo: `${TimeTo.substring(0,5)}:00`
    }
    if (!ValidateAllFields(data)) {
      return;
    }

    if(DateFrom === DateTo){
      toast.error("From and To dates should be different.", config.ToastConfig);
      return;
    }

    if(DateFrom > DateTo){
      toast.error("From date cannot be greater than To date.", config.ToastConfig);
      return;
    }

    service.postformdata(UrlConstant.Customer_UpdateRequest(id), data).then(response=>{
        if (response.status === 200) {
          if(response.data.Status===true){
            toast.success("Request updated", config.ToastConfig);
            setTimeout(() => {
              window.location.href = "/customer/myrequests";
            }, 2000);
          }
          else{
            toast.error(response.data.Message, config.ToastConfig);
          }
        }
        else {
          toast.error("Failed to Update Pet details", config.ToastConfig);
        }

    }).catch(err=>{
        toast.error("Failed to Update Pet details", config.ToastConfig);
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
        <hr/>
        <div className="container d-flex flex-row flex-wrap justify-content-center container-1">
          <div
            className="container col-md-11 mx-2 my-4 d-flex flex-row flex-wrap justify-content-evenly mt-5 container-2"
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
              <div className="card-body ">
                <p className="h6 m-3 mb-4">
                  UID : <span> {Uid}</span>
                </p>
                <p className="h6 m-3 ">
                  Pet Name :  <input type="text" onChange={(ev)=>{ setName(ev.target.value) }} className="my-2 form-control" id="petname" value={Name} name="Name" placeholder="" required />
                </p>
                
                <p className="h6 m-3 ">
                  Category : <input type="text" onChange={(ev)=>{ setCategory(ev.target.value) }} className="my-2 form-control" id="petname" value={Category} name="Category" placeholder="" required />
                </p>
                <p className="h6 m-3">
                  Breed : <input type="text" className="my-2 form-control" onChange={(ev)=>{ setBreed(ev.target.value) }} id="petname" value={Breed} name="Breed" placeholder="" required />
                </p>

                <p className="h6 m-3 ">
                  Color : <input type="text" className="my-2 form-control" onChange={(ev)=>{ setColor(ev.target.value) }} id="petname" name="Color" value={Color} placeholder="" required />
                </p>
                <p className="h6 m-3 d-flex flex-row align-items-center">
                  Gender : 
                  <div className="m-3">
                  <input className="form-check-input mx-2" type="radio" onClick={(ev)=>{ setGender("male") }} name="Gender" id="petGenderMale" value="male" checked={Gender==="male"} />
                  <label className="form-check-label" htmlFor="petGenderMale">
                    Male
                  </label>
                  </div>
                  <div className="m-3">
                  <input className="form-check-input mx-2" type="radio" name="Gender" onClick={(ev)=>{ setGender("female") }} id="petGenderFemale" value="female" checked={Gender==="female"} />
                  <label className="form-check-label" htmlFor="petGenderFemale">
                    Female
                  </label>
                  </div>
                </p>
                <p className="h6 m-3 d-flex flex-row align-items-center">
                  Vaccinated : 
                  <div className="m-3">
                    <input
                    className="form-check-input"
                    type="radio"
                    name="Vaccinated"
                    id="vaccinatedYes"
                    value="true"
                    onClick={(ev)=>{ setVaccinated(true) }}
                    checked={Vaccinated ===true}
                  />
                  
                  
                  <label className="mx-2 form-check-label" htmlFor="vaccinatedYes">
                    Yes
                  </label>
                  </div>

                  <div className="m-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Vaccinated"
                    id="vaccinatedNo"
                    value="false"
                    onClick={(ev)=>{ setVaccinated(false) }}
                    checked={Vaccinated ===false}
                  />
                  
                  <label className="mx-2 form-check-label" htmlFor="vaccinatedNo">
                    No
                  </label>
                  </div>
                </p>
                <p className="h6 m-3">
                  Age : <input type="number" className="my-2 form-control" id="age" name="Age" onChange={(ev)=>{ setAge(ev.target.value) }} value={Age} required />
                </p>
                <p className="h6 mx-3 mt-4 d-flex flex-row align-items-center">
                    Drop On : 
                    <div >
                    <input type="date" className="input-time d-t" id="dropDate" name="DateFrom" onChange={(ev)=>{ setDateFrom(ev.target.value) }} value={DateFrom} required />
                  <span><input type="time" className="input-time  d-t" id="dropTime" name="TimeFrom" min="10:00" max="15:00" onChange={(ev)=>{ setTimeFrom(ev.target.value) }} value={GetTimeForTimeControl(TimeFrom)} required /></span>
                  </div>
                </p>
                <p className="h6 mx-3 my-4 d-flex flex-row align-items-center">
                    Pick-Up :
                    <div> 
                    <input type="date" className="input-time d-t" id="pickUpDate"  value={DateTo} name="DateTo" onChange={(ev)=>{ setDateTo(ev.target.value) }} required />
                    <span><input type="time" className="input-time  d-t" id="pickUpTime" name="TimeTo" min="10:00" onChange={(ev)=>{ setTimeTo(ev.target.value) }} value={GetTimeForTimeControl(TimeTo)} max="15:00" required /></span>
                    </div>
                </p>
                <p className="h6 m-3">
                  Details : 
                  <textarea className="form-control col-md-12 my-3" value={Details} onChange={(ev)=>{ setDetails(ev.target.value) }} id="exampleFormControlTextarea1" name="Details" rows="3" ></textarea>
                </p>
                <p className="card-text mx-3 mt-4">
                  <button type="button" onClick={()=>{OnUpdateClick();}} className="btn btn-outline-primary ">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger mx-2"
                    onClick={()=>{window.location.reload();}}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger mx-2"
                    onClick={()=>{window.history.back();}}
                  >
                    Back
                  </button>                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatePetDetails;
