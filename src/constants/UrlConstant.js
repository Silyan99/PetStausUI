const UrlConstant = {
  Login: "/PetStays/Login",
  Signup: "/PetStays/SignUpUser",
  Admin_AllRequests: "/PetStays/GetAllRequest",
  Admin_SaveAvailability: "/PetStays/Availability",
  Admin_DeleteRequest: (id) => `/PetStays/DeleteRequest/${id}`,
  Admin_DeleteAvailability: (id) => `/PetStays/DeleteAvailability/${id}`,
  Admin_PetDetail: (Id) => `/PetStays/GetRequest/${Id}`,
  Admin_UpdatePetDetail: (id) => `/PetStays/Request/${id}`,
  Admin_AddRequest: `/PetStays/AddRequest`,
  Admin_OffTimings: (Id) => `/PetStays/GetAvailability/${Id}`,
  Customer_OffTimingsAdmin: (Id) => `/PetStays/GetAvailabilityForCustomer/${Id}`,
  Customer_AllRequests: `/PetStays/GetAllUserRequest`,
  CustomerProfile: (id) => `/PetStays/GetUser/${id}`,
  Customer_GetRequestDetailURL: (id) => `/PetStays/GetRequest/${id}`,
  Customer_GetUserDetails: (id) => `/PetStays/GetUserById/${id}`,
};

export default UrlConstant;
