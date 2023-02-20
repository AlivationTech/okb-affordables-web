import React from 'react';

import styles from '../css/navbar.module.css'

function Navbar(props) {
    return (
        <div className={styles.container}>
            <ul className={styles.navlinks}>
                <li>Login</li>
                <li>Register</li>

            </ul>

        </div>
    );
}

export default Navbar;