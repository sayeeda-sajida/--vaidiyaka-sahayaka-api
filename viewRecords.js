import { useNavigate } from "react-router-dom";
import DataDisplayComponent from "./registerDisplay";


export default function ViewRecords(){
    const navigate=useNavigate();
return(<div >
<DataDisplayComponent></DataDisplayComponent>
<button style={{width:"30%"}} onClick={()=>navigate('/AdminSuccess')}>back</button>
</div>
)}