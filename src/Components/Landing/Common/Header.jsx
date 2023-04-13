import React from 'react';

import styles from './css/header.module.css'

import Dash from "../../../Assets/dash.png"

const Header = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
            <img src={Dash} alt="--"/>
            <h6>{props.title} </h6>
            </div>
         
            <div className={styles.mainContent}>
                <div className={styles.titleSection}>
                <h1>{props.titleDescription}</h1>
                <p>{props.titleContent}</p>
                </div>
              
                <div className={styles.description}>   
                  {props.description}

                </div>
            </div>
            
            
        </div>
    );
};

export default Header;