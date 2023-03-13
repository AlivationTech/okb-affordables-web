import React from 'react';

import styles from "../css/login.module.css"

import BigLogo from "../../../Assets/bigLogo.png"




function LoginImage(props) {
    return (
        <div className={styles.loginImage}>
            <div>
                <div className={styles.logo}>
                    <img src={BigLogo} alt="logo" />
                </div>
                <div className={styles.leftContent}>
                    <h1>A home perfect for you!</h1>
                    <p>Real estate service provider  with affordable <br /> and valuable properties perfect for you.</p>
                </div>

            </div>


        </div>
    );
}

export default LoginImage;