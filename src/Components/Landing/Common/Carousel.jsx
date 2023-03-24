import React from 'react';
import { useNavigate } from 'react-router-dom';

//import css 
 import styles from './css/carousel.module.css'

const Carousel = (props) => {
    const navigate = useNavigate()
    return (
     
        <div className={props.carousel}>
            <div className={styles.carouselContent}>
            <div className={styles.carouselHeader}>
                {props.carouselHeader}
            </div>
            <div className={styles.carouselTextContent}>{props.carouselTextContent}</div>
            {props.button}
 
            </div>
     
        </div>

    );
};

export default Carousel;