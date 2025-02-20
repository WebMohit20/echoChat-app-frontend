import React from "react";
import AuthBox from "./AuthBox"

const Login = ()=>{
    function handleLogin(data){
        console.log(data)
    }
    return (
      <div>
        <AuthBox  
            submit={handleLogin}
        />
      </div>
    )
  }
  export default Login;