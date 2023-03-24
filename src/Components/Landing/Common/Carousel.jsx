import React from 'react';


//import css 
 import styles from './css/carousel.module.css'

const Carousel = (props) => {

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