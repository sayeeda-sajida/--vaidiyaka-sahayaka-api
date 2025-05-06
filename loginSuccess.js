import React from "react";
import { useNavigate } from "react-router-dom";

export default function Success(){
    const navigate = useNavigate();
    return(
        <div className="container" >

<nav> <button style={{width : '60%'}} onClick={()=>navigate('/hospitals')}>Check here for Matched hospitals for your registered Disease</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button style={{width : '20%'}} onClick={()=>navigate('/profile')}>User Profile</button> &nbsp;&nbsp;&nbsp;&nbsp; <button style={{width : '10%'}}  onClick={()=>navigate('/login')}>Back</button></nav>  
<br/>    <br/>    <br/>   <h2>Logged In Successfully!!!</h2>
              <br/>    <br/>
         
        </div>
    )
}