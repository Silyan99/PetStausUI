import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Admin from "./component/Admin";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import User from "./component/User";
import Payment from "./component/Payment";
import PetDetails from "./component/PetDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/petdetails" element={<PetDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
