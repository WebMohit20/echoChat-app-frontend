import AuthBox from "./AuthBox"
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import { registerUser } from "../../redux/features/authSlice";


 const Register = ()=>{
  const {loading,error} = useSelector(state=>state.auth)
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  function handleRegister(data){
    dispatch(registerUser({userDetails:data,navigate}))
  }
  return (
    <div>
      <AuthBox 
        isRegister={true} 
        submit = {handleRegister}
        loading = {loading}
        err = {error} 
      />
      
    </div>
  )
}
export default Register;
