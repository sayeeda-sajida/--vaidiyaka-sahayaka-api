import React from "react";
import {  Route, Routes } from "react-router-dom";
import Register from "./registerPage";
import Home from "./home";
import Login from "./login";
import Success from "./loginSuccess";
import Hospitals from "./hospitals";
import Rsuccess from "./registerSuccess";
import Admin from "./Adminpage";
import Asuccess from "./AdminSuccess";
import ForgetPassword from "./forgetPassword";
import ViewRecords from "./viewRecords";
import UserProfile from "./UserProfile";

function App() {
  return(<div><Routes>
<Route path="/Register" element={<Register></Register>}></Route>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/login" element={<Login></Login>}></Route>
<Route path="/lsuccess" element={<Success></Success>}></Route>
<Route path="/hospitals" element={<Hospitals></Hospitals>}></Route>
<Route path="/successregister" element={<Rsuccess></Rsuccess>}></Route>
<Route path="/AdminSuccess" element={<Asuccess></Asuccess>}></Route>
<Route path="/adminpage" element={<Admin></Admin>}></Route>
<Route path="/forgetpassword" element={<ForgetPassword></ForgetPassword>}></Route>
<Route path="/viewRecords" element={<ViewRecords></ViewRecords>}></Route>
<Route path="/profile" element={<UserProfile></UserProfile>}></Route>
</Routes>
  </div>

  )
}
export default App;
