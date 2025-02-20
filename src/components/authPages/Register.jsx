import AuthBox from "./AuthBox"
import {Link} from "react-router-dom"
 const Register = ()=>{
    function handleRegister(data){
      console.log(data)
    }
  return (
    <div>
      <AuthBox 
        isRegister={true} 
        submit = {handleRegister} 
      />
      
    </div>
  )
}
export default Register;
