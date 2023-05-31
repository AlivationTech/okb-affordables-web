import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Component Imports
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Landing from "./Components/Landing/Landing";
import PropertyDetails from "./Components/Landing/PropertyDetails";
import Agent from "./Components/Landing/Agent";
import AgentForm from "./Components/Landing/AgentForm";
import AboutUs from "./Components/Landing/AboutUs"
import PropertiesList from "./Components/Landing/PropertiesList";
import Contact from "./Components/Landing/Contact";
import Privacy from "./Components/Landing/PrivacyPolicy"
import Terms from "./Components/Landing/Terms"
import Dashboard from "./Components/Dashboard/Dashboard"
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
        <Route path="/Property/Details" element={<PropertyDetails/>}/>
        <Route path="/Agent" element={<Agent/>}/>
        <Route path="/Agent/Form" element={<AgentForm/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Property" element={<PropertiesList/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>

      </Routes>
    </Router>

  );
}

export default App;