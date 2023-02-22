import React from 'react';
import { Link } from 'react-router-dom';


import Navbar from './Common/Navbar';
import LoginImage from './Common/LoginImage';
import styles from "./css/login.module.css"



function Register(props) {
    return (
        <div className={styles.container}>
            <LoginImage />
            <div className={styles.content}>
                <Navbar />
                <div className={styles.loginForm}>
                    <h1>Create Account</h1>
                    <p>Praesent luctus tortor faucibus gravida laoreet. Cras ut sapien sed mauris imperdiet finibus.</p>
                    <form>
                        <div className={styles.formControl}>
                            <label>
                                Full<span>*</span>

                            </label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className={styles.formControl}>
                            <label>
                                Email<span>*</span>

                            </label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className={styles.formControl}>
                            <label>
                                Password    <span>*</span>

                            </label>
                            <input type="password" placeholder="Password" />
                        </div>

                        <div className={styles.formButton}>
                            <button>Register</button>
                        </div>
                        <p>Already  have an account? <Link to="/login">Sign in</Link></p>
                    </form>

                </div>


            </div>


        </div>
    );
}

export default Register;