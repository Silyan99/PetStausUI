import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
const TOKEN_KEY = "2BA07A8AB1F34B64AA87B1E61E142C26";
const AdminKey = "7NKBuMfwTM";
const CustomerKey = "wfZmflTyvR";

const ProtectedAdminRoute = () => {
  debugger
  var authToken = localStorage.getItem(TOKEN_KEY);
  if (!authToken) {
    return <Navigate to="/" />;
  }
  var decodedData = jwt_decode(authToken);
  if (decodedData) {
    let isAdmin =
      decodedData["AdminKey"] && decodedData["AdminKey"] === AdminKey;
    if (isAdmin) {
      return <Outlet />;
    }
  }
  return <Navigate to="/login/1" />;
};

const ProtectedCustomerRoute = () => {
  debugger
  var authToken = localStorage.getItem(TOKEN_KEY);
  if (!authToken) {
    return <Navigate to="/" />;
  }
  var decodedData = jwt_decode(authToken);
  if (decodedData) {
    let isUser =
      decodedData["CustomerKey"] && decodedData["CustomerKey"] === CustomerKey;
    if (isUser) {
      return <Outlet />;
    }
  }
  return <Navigate to="/login/0" />;
};

const authenticate = (data) => {
  localStorage.setItem(TOKEN_KEY, data.Token);
  let userData = jwt_decode(data.Token);
    let adminKey = userData["AdminKey"];
    let customerKey = userData["CustomerKey"];
    return {
      IsAdmin:adminKey === AdminKey,
      IsCustomer:customerKey === CustomerKey,
    };
};

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.location.reload();
};

const GetAuthToken=()=>localStorage.getItem(TOKEN_KEY);

const loggedUser = (function () {

  let userDetails = {
    IsLoggedIn:
      localStorage.getItem(TOKEN_KEY) !== undefined &&
      localStorage.getItem(TOKEN_KEY) !== null &&
      localStorage.getItem(TOKEN_KEY) !== "",
  };
  if (userDetails.IsLoggedIn) {
    let userData = jwt_decode(localStorage.getItem(TOKEN_KEY));
    let adminKey = userData["AdminKey"];
    let customerKey = userData["CustomerKey"];
    return {
      IsLoggedIn: userDetails.IsLoggedIn,
      IsAdmin:adminKey === AdminKey,
      IsCustomer:customerKey === CustomerKey,
      ...userData
    };
  } else {
    return userDetails;
  }
})();

export {
  ProtectedAdminRoute,
  ProtectedCustomerRoute,
  authenticate,
  logout,
  loggedUser,
  GetAuthToken
};
