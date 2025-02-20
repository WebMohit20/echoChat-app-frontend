import React from "react";
import AuthBox from "./AuthBox"
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import { loginUser } from "../../redux/features/authSlice";



const Login = ()=>{
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  function handleLogin(data){
    console.log(data)
    dispatch(loginUser({ userDetails: data ,navigate}));
  }
  return (
    <div>
      <AuthBox  
          submit={handleLogin}
          loading = {loading}
          err = {error}
      />
    </div>
  )
  }
  export default Login;