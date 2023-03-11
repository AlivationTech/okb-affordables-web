import React from 'react';

import styles from "./css/location.module.css"
const LocationCard = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.locationImage} alt={props.locationTitle}/>
            <div className={styles.locationContent}>
                <h3>{props.locationTitle}</h3>
                <p>{props.projects}</p>
            </div>

            
        </div>
    );
};

export default LocationCard;