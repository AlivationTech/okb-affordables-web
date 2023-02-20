import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Common/Navbar';
import LoginImage from './Common/LoginImage';
import styles from "./css/login.module.css"



function ForgotPassword(props) {
    return (
        <div className={styles.container}>
            <LoginImage />
            <div className={styles.content}>
                <Navbar />
                <div className={styles.loginForm}>
                    <h1>Recover Password</h1>
                    <p>Praesent luctus tortor faucibus gravida laoreet. Cras ut sapien sed mauris imperdiet finibus.</p>
                    <form>
                        <div className={styles.formControl}>
                            <label>
                                Email<span>*</span>

                            </label>
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className={styles.formButton}>
                            <button>Reset</button>
                        </div>
                        <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
                    </form>

                </div>


            </div>


        </div>
    );
}

export default ForgotPassword;