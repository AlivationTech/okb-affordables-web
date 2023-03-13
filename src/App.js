import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Component Imports
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Landing from "./Components/Landing/Landing";
import PropertyDetails from "./Components/Landing/PropertyDetails";

//styles import
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/PropertyDetails" element={<PropertyDetails/>}/>
      </Routes>
    </Router>

  );
}

export default App;