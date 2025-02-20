import { useEffect, useState } from "react";
import "../../style/error.css";
const ErrorMessage = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
       
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
