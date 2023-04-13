import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Common/Navbar';
import LoginImage from './Common/LoginImage';
import styles from "./css/login.module.css"


function Login(props) {
    return (
        <div className={styles.container}>
            <LoginImage />

            <div className={styles.content}>
                <Navbar />
                <div className={styles.loginForm}>
                    <h1>Welcome Back!</h1>
                    <p>Praesent luctus tortor faucibus gravida laoreet. Cras ut sapien sed mauris imperdiet finibus.</p>
                    <form>
                        <div className={styles.formControl}>
                            <label>
                                Email<span>*</span>

                            </label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className={styles.formControl}>
                            <label>
                                Password<span>*</span>

                            </label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className={styles.extra}>
                            <label>

                                <input type="checkbox" />
                                Remember me?
                            </label>

                            <Link to="/forgotpassword">Forgot Password?</Link>
                        </div>
                        <div className={styles.formButton}>
                            <button>Login</button>
                        </div>
                        <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
                        <Link to='/'><p>Return to Homepage</p></Link>
                    </form>

                </div>


            </div>


        </div>
    );
}

export default Login;