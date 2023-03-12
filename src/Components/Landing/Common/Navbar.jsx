import React, { useState } from 'react';
import { Link } from "react-router-dom"

import styles from './css/navbar.module.css'

import Logo from '../../../Assets/bigLogo.png'

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
                <Link to="/"> <li>Home</li></Link>
                <Link to="/"><li>About us</li></Link>
                <Link to="/">
                <li>Products</li></Link>
                <Link to="/"><li>Contact</li></Link>
               
            
                <Link to ="/">
                <li>Agent</li>
                </Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li><button>Register</button></li></Link>
            </ul>

        </div>
    );
}

export default Navbar;