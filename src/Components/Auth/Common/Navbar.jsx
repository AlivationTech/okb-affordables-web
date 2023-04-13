import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/navbar.module.css'
import Arrow from "../../../Assets/back.png"


function Navbar(props) {
    return (
        <div className={styles.container}>
            <Link to ='/'>
            <img src={Arrow} alt="" />
            </Link>
            <ul className={styles.navlinks}>
                <li>Login</li>
                <li>Register</li>

            </ul>

        </div>
    );
}

export default Navbar;