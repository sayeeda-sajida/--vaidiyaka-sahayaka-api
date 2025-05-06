import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword(){
    const navigate = useNavigate();
    const [userName , setUserName] = useState("")
    const [email,setEmail]=useState("")
    const [passsword,setPasssword]=useState("")
    const [error , setError] = useState("")
const handleChange=(e)=>{
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "userName") setUserName(value);
    if (name === "passsword") setPasssword(value);

}
const handleSubmit=(e)=>{

}

    return(
        <div className="container">
      
      <div className="container">
        <table>
            <tbody>
                <tr>
                    <td colSpan={2} align="center"><h2>Reset Password</h2> </td>
                </tr>
                <tr>
                    <td>
                        Enter UserName :
                    </td>
                    <td> <input type="text" name="username" id="username" required onChange={handleChange}></input></td>
                </tr>
                <tr>
                    <td>
                      Enter Registered E-mail :
                    </td>
                    <td>
                        <input type="email" name="email" id="email" onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                      Enter New Password :
                    </td>
                    <td>
                        <input type="password" name="password" id="password" onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                      Confirm Password :
                    </td>
                    <td>
                        <input type="password" name="cpassword" id="cpassword" onChange={handleChange} />
                    </td>
                </tr>
                
                <tr><td>  <button onClick={()=>navigate('/login')}>back</button></td>
                    <td>
                      <button onClick={handleSubmit}>Update password</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} align="center">{error && <h3 style={{color : "green"}}>{error}</h3>}</td>
                </tr>
            </tbody>
        </table>

      </div>
        </div>
    )
}