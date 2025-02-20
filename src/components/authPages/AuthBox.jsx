import React,{ useState,useEffect} from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../errorPage/Error";
import "../../style/auth.css"

const AuthBox = ({isRegister,submit})=>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        conPassword:""
      });
    const [error,setError] = useState("")
    useEffect(()=>{
        
    },[formData])
    function handleSubmit(e){
        e.preventDefault();
        if(formData.email){

        }
        if(formData.password.length<6){
            return setError("Password must be at least 6 character");
        }
        if(isRegister&&formData.password !== formData.conPassword){
            return setError(" Password not valid ");
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
          {error && <ErrorMessage message={error} duration={5000} />}
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
            <button type="submit" >{isRegister ? "Register" : "Login"}</button>
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