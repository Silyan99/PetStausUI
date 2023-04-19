const UrlConstant = {
  Login: "/PetStays/Login",
  Signup: "/PetStays/SignUpUser",
  Admin_AllRequests: "/PetStays/GetAllRequest",
  Admin_PetDetail: (Id) => {
    return `/PetStays/GetRequest/${Id}`;
  },
  Admin_UpdatePetDetail: (id) => `/PetStays/Request/${id}`,
  Admin_SaveAvailability: "/PetStays/Availability",
  Admin_OffTimings: (Id) => {
    return `/PetStays/GetAvailability/${Id}`;
  },
  CustomerProfile: (id) => {
    return `/PetStays/GetUser/${id}`;
  },
  Customer_GetRequestDetailURL: (id) => {
    return `/PetStays/GetAllRequest/${id}`;
  },
  Admin_DeleteRequest: (id) => {
    return `/PetStays/DeleteRequest/${id}`;
  },
};

export default UrlConstant;
