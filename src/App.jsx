import { Route,Routes } from "react-router-dom";
import "./style/root.css"
import Login from "./components/authPages/Login";
import Register from "./components/authPages/Register";
import Dashboard from "./components/dashboardPage/Dashboard";


const App = ()=>{

  return (
    <div >
      <Routes>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
    </div>
  )  
}

export default App
