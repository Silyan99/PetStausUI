import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Admin from "./component/Admin";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import User from "./component/User";
import PetDetails from "./component/PetDetails";
import Appointment from "./component/Appointment";
import MyRequests from "./component/MyRequests";
import PendingRequest from "./component/PendingRequest";
import AddOffTimings from "./component/AddOffTimings";
import { ProtectedAdminRoute, ProtectedCustomerRoute } from "./core/authsecurity";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin/" element={<ProtectedAdminRoute/>}>
            <Route path="addofftimings" element={<AddOffTimings />}></Route>
            <Route path="pendingrequest" element={<PendingRequest />}></Route>
            <Route path="editrequest/:id" element={<Admin />}></Route>
          </Route>
          <Route path="/customer/" element={<ProtectedCustomerRoute/>}>
            <Route path="petdetails/:id" element={<PetDetails />}></Route>
            <Route path="user" element={<User />}></Route>
            <Route path="appointment" element={<Appointment />}></Route>
            <Route path="myrequests" element={<MyRequests />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
