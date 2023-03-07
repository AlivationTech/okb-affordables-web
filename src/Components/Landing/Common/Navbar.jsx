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
                <li>Home</li>
                <li>About us</li>
                <li>Products</li>
                <li>Contact</li>
                <li>Agent</li>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li><button>Register</button></li></Link>
            </ul>

        </div>
    );
}

export default Navbar;