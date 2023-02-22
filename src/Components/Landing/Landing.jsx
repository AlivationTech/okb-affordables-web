import React from 'react';

//import components

import Navbar from './Common/Navbar';
import Footer from './Common/Footer';

import styles from './css/landing.module.css'

function Landing(props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Navbar />
                <div className={styles.carousel}>
                    <div className={styles.carouselContent}>
                        <h1>
                            Buy a <span>great home</span> <br />
                            that perfect’s for you
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit eget ex sed velit pulvinar auctor.</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    );
}

export default Landing;
