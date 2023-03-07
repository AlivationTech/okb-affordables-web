import React from 'react';
import { Link } from 'react-router-dom';

//import components

import Navbar from './Common/Navbar';
import Footer from './Common/Footer';

import dummyImage from '../../Assets/dummy-one.png'
import dummyTwo from '../../Assets/carousel-background.png'
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
                <section>
                    <h1>Hot Offers Today</h1>
                    <div className={styles.dailyOffers}>
                        <div className={styles.imageContainer}>
                            <img src={dummyImage} alt="illustration" />
                        </div>
                        <div className={styles.dailyContent}>
                            <h5>The Preferred Choice for Home Buyers and Investors</h5>
                            <p>Spacious 5 bedroom terrace</p>
                            <span>NGN 380 000</span>
                            <p>Our mission is to be the foremost real estate service provider in Nigeria and beyond. Our most valuable asset is our team members. Through their expertise, we acquire, develop, and manage multifamily communities.</p>

                        </div>
                    </div>
                </section>
                <section>
                    <div className={styles.offer}>
                        <div className={styles.offerContent}>
                            <h1>The perfect way to get
                                best property</h1>
                            <p>varius in cursus sed, posuere non ipsum. In non lacus libero. Sed congue consequat erat, a auctor augue auctor id. Nam vitae lorem non metus rhoncus pharetra sed vel neque. Praesent luctus tortor faucibus gravida laoreet. Cras ut sapien sed mauris imperdiet finibus vel in velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="/">Learn more</Link>
                        </div>
                        <div className={styles.offerImage}>
                            <img src={dummyTwo} alt='offers' />
                        </div>
                    </div>


                </section>

            </div>
            <section className={styles.inspection}>
                <div>
                    <h6>Free Bus</h6>
                    <h3>Need to check up our sites</h3>
                </div>
                <button>Schedule Inspection</button>
            </section>
            <div className={styles.content}>
                <section>
                    <h1>Our Featured Properties</h1>
                    <div className={styles.featuredProp}>
                        <div className={styles.prop}>
                            <div className={styles.propImage}>
                                <img src={dummyTwo} alt={"property"} />
                            </div>
                            <div className={styles.propContent}>
                                <div className={styles.propHeader}>
                                    <h3>BETHEL ESTATE</h3>
                                    <h5><span>N67,000.00</span>/unit</h5>
                                </div>
                                <div className={styles.propDescription}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nam eget ex sed adipiscing elit nam eget ex sed.</p>
                                    <ul className={styles.propDescriptionList}>
                                        <li>
                                            <p>Bed: <span>03</span></p>
                                            <p>Bathroom: <span>03</span></p>
                                        </li>
                                        <li>
                                            <p>Room: <span>03</span></p>
                                            <p>Parking space: <span>03</span></p>
                                        </li>
                                    </ul>
                                    <button>View Details</button>
                                </div>
                            </div>

                        </div>
                        <div className={styles.prop}>
                            <div className={styles.propImage}>
                                <img src={dummyTwo} alt={"property"} />

                            </div>
                            <div className={styles.propContent}>
                                <div className={styles.propHeader}>
                                    <h3>BETHEL ESTATE</h3>
                                    <h5><span>N67,000.00</span>/unit</h5>
                                </div>
                                <div className={styles.propDescription}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nam eget ex sed adipiscing elit nam eget ex sed.</p>
                                    <ul className={styles.propDescriptionList}>
                                        <li>
                                            <p>Bed: <span>03</span></p>
                                            <p>Bathroom: <span>03</span></p>
                                        </li>
                                        <li>
                                            <p>Room: <span>03</span></p>
                                            <p>Parking space: <span>03</span></p>
                                        </li>
                                    </ul>
                                    <button>View Details</button>
                                </div>
                            </div>

                        </div>
                        <div className={styles.prop}>
                            <div className={styles.propImage}>
                                <img src={dummyTwo} alt={"property"} />
                            </div>
                            <div className={styles.propContent}>
                                <div className={styles.propHeader}>
                                    <h3>BETHEL ESTATE</h3>
                                    <h5><span>N67,000.00</span>/unit</h5>
                                </div>
                                <div className={styles.propDescription}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nam eget ex sed adipiscing elit nam eget ex sed.</p>
                                    <ul className={styles.propDescriptionList}>
                                        <li>
                                            <p>Bed: <span>03</span></p>
                                            <p>Bathroom: <span>03</span></p>
                                        </li>
                                        <li>
                                            <p>Room: <span>03</span></p>
                                            <p>Parking space: <span>03</span></p>
                                        </li>
                                    </ul>
                                    <button>View Details</button>
                                </div>
                            </div>

                        </div>


                    </div>

                </section>
            </div>
            <Footer />


        </div>
    );
}

export default Landing;
