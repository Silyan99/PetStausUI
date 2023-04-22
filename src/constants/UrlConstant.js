const UrlConstant = {
  Login: "/PetStays/Login",
  Signup: "/PetStays/SignUpUser",
  
  Admin_AllRequests: "/PetStays/GetAllRequest",
  Admin_AddRequest: `/PetStays/AddRequest`,
  Admin_OffTimings: (Id) => `/PetStays/GetAvailability/${Id}`,
  Admin_SaveAvailability: "/PetStays/Availability",
  Admin_DeleteAvailability: (id) => `/PetStays/DeleteAvailability/${id}`,
  Admin_PetDetail: (Id) => `/PetStays/GetRequest/${Id}`,
  Admin_UpdatePetDetail: (id) => `/PetStays/Request/${id}`,

  Customer_DeleteRequest: (id) => `/PetStays/DeleteRequest/${id}`,
  Customer_UpdateRequest: (id) => `/PetStays/UpdatePetRequest/${id}`,
  Customer_OffTimingsAdmin: (Id) => `/PetStays/GetAvailabilityForCustomer/${Id}`,
  Customer_AllRequests: `/PetStays/GetAllUserRequest`,
  Customer_GetRequestDetailURL: (id) => `/PetStays/GetRequest/${id}`,
  Customer_GetUserDetails: (id) => `/PetStays/GetUserById/${id}`,
};

export default UrlConstant;
