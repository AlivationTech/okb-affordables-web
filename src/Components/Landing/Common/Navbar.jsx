import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom"

import styles from './css/navbar.module.css'

import Logo from '../../../Assets/bigLogo.jpg'

function Navbar(props) {
    const [toggle, setToggle] = useState(false)

    const toggleSidebar = () => {
        setToggle(!toggle)
    }
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />

            </div>
            <div className={styles.toggler} onClick={toggleSidebar}>
                <i className="fa fa-bars"></i>
            </div>

            <ul className={toggle ? styles.sidelinks : styles.navlinks}>
                <div className={styles.close} onClick={toggleSidebar}>
                    <i className='fa fa-close'></i>
                </div>
               
                <NavLink to="/"
                
                style={({ isActive }) =>
                (isActive ? {  color: "#00CCFF"} : { border: "none" })}> <li>Home</li></NavLink>
                <NavLink to="/AboutUs" 
                    style={({ isActive }) =>
                        (isActive ? {   color: "#00CCFF" } : { border: "none" })}><li>About us</li></NavLink>
                <NavLink to="/Property" 
                    style={({ isActive }) =>
                        (isActive ? { color: "#00CCFF" } : { border: "none" })}>
                <li>Properties</li></NavLink>
                <NavLink to="/Contact"  style={({ isActive }) =>
                        (isActive ? {   color: "#00CCFF" } : { border: "none" })}><li>Contact</li></NavLink>
               
            
                <NavLink to ="/Agent" 
                    style={({ isActive }) =>
                        (isActive ? {   color: "#00CCFF" } : { border: "none" })}>
                <li>Agent</li>
                </NavLink>
                <Link to="/login" 
                 ><li>Login</li></Link>
                <Link to="/signup"><li><button>Register</button></li></Link>
            </ul>

        </div>
    );
}

export default Navbar;