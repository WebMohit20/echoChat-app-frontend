import { useEffect, useState } from "react";
import "../../style/error.css";
const ErrorMessage = ({ message, duration,setError }) => {
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("")
       
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  

  return <div className={"error-message"}>{message}</div>;
};

export default ErrorMessage;
