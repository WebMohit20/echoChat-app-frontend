import React,{ useState,useEffect} from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../errorPage/Error";
import "../../style/auth.css"
import { validator } from "../../utils/validators";

const AuthBox = ({isRegister,submit,loading,err})=>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        conPassword:""
      });
    const [error,setError] = useState(err)
    
    function handleSubmit(e){
        e.preventDefault();
        
        if(isRegister&&formData.password !== formData.conPassword){
            return setError(" Password not valid ");
        }
        if(isRegister && formData.name.length<3){
            return setError(" name must have 3 character ");
        }
        if(!validator({email:formData.email,password:formData.password})){
            return setError(" Invalid email and password ");
        }
        
        setError("");
        submit(formData);
        setFormData({
            name: "",
            email: "",
            password: "",
            conPassword:""
          })
    }
    
    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="auth-container">
          <h2 className="title">{isRegister ? "Register" : "Login"}</h2>
          {error && <ErrorMessage message={error} duration={5000} setError={setError} />}
          <form onSubmit={handleSubmit} className="auth-form">
            {isRegister  && (
                <div className="input-group">
                    <label htmlFor="username">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="username"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
            )}
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            {
                isRegister &&
               ( 
                <div className="input-group">
                    <label htmlFor="conPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="conPassword"
                        id="conPassword"
                        value={formData.conPassword}
                        onChange={handleChange}
                        required
                    />
              </div>
              )
            }
            <button 
                type="submit"
              disabled={loading}>
                {isRegister ? loading ? "Logging in...":"Register" :loading ? "Logging in...": "Login"}</button>
            {isRegister?
            <p 
                className="login"
            >
                Already have an acount ?{" "} 
                <Link

                    to="/login"
                >
                    Login
                </Link> 
            </p>:
            <p 
            className="register"
            >
            Don't have an acount ?{" "}   
            <Link 
                to="/register"
            >
                 Register
            </Link> 
            </p>
            }
          </form>
        </div>
      );
}

export default AuthBox;