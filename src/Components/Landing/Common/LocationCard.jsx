import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./css/location.module.css"
const LocationCard = (props) => { 
    const navigate = useNavigate()
    return (
        <div className={styles.container}         onClick={()=>navigate("/Property ", {
            state: {
              city: props.city
          }
          })}>
            <img src={props.locationImage} alt={props.locationTitle}/>
            <div className={styles.locationContent}>
                <h3>{props.locationTitle}</h3>
                <p>{props.projects}</p>
            
            </div>

            
        </div>
    );
};

export default LocationCard;