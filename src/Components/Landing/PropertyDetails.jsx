import React from 'react';
import { Link } from 'react-router-dom';

//component imports
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import styles from "./css/property.module.css"

//Resoure Imports 
import Apply from "../../Assets/apply.png"
import Back from "../../Assets/back.png"
import Bath from "../../Assets/bath.png"
import Bed from "../../Assets/bed.png"
import Send from "../../Assets/send.png"
import Video from "../../Assets/video-icon.png"
import Home from "../../Assets/home.png"
import Love from "../../Assets/love.png"
import Share from "../../Assets/share.png"
import Slot from "../../Assets/slot.png"
import Tick from "../../Assets/tick.png"
import PropertyImage from "../../Assets/propertyone.png"

const PropertyDetails = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <Navbar/>
            <div className={styles.header}>
                <Link to ="/"><span><img src={Back} alt ="<"/> Back</span></Link>
                <h1>Irawo Estate</h1>
                <div className={styles.headerContent}>
                    <p>7, Abimbola cresent, Irawo Ikorodu Lagos</p>
                    <div className={styles.buttons}>
                        <button>
                            <img src ={Share} alt =""/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src ={Love} alt =""/>
                            <span>Favorite</span>
                        </button>
                    </div>
                </div>
                <div className={styles.propertyContent}>
                <div className={styles.leftContent}>
                    <div className={styles.mainImage}>
                        <img src={PropertyImage} alt ="Property"/>
                    </div>
                    <ul className={styles.highlights}>
                        <li>
                            <p>Bedrooms</p>
                            <h6><img src={Bed} alt ="bed"/> <span>2</span></h6>
                        </li>
                        <li>
                            <p>Bedrooms</p>
                            <h6><img src={Bath} alt ="bath"/> <span>2</span></h6>
                        </li>
                        <li>
                            <p>Bedrooms</p>
                            <h6><img src={Slot} alt ="icon"/> <span>40 slots available</span></h6>
                        </li>
                        <li>
                            <p>Bedrooms</p>
                            <h6><img src={Tick} alt ="icon"/> <span>4 bedroom terrace duplex</span></h6>
                        </li>
                    </ul>
                    <section className={styles.about}>
                        <h2>About this Property</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex sed velit pulvinar auctor. Curabitur sed iaculis ante. Duis imperdiet sodales nibh, non cursus augue venenatis quis. Pellentesque venenatis finibus arcu, id dictum lorem faucibus quis. Suspendisse eget convallis libero. Vivamus quis sapien vel elit finibus dictum. Vestibulum velit massa, varius in cursus sed, posuere non ipsum. In non lacus libero. Sed congue consequat erat, a auctor augue auctor id. Nam vitae lorem non metus rhoncus pharetra sed vel neque.</p>
                        
                    </section>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.images}>
                    <img src={PropertyImage} alt ="Property"/>
                    <img src={PropertyImage} alt ="Property"/>
                        
                    </div>
                    <section className={styles.action}>
                        <h6>Price</h6>
                        <h3>N24,400,000 <span>/unit</span></h3>
                        <button><img src={Apply} alt =""/> <span>Apply now</span></button>
                        <div className={styles.divide}/>
                      
                        <h4>Schedule inspection</h4>
                        <div className={styles.buttons}>
                        <button><img src={Home} alt =""/> <span>In person</span></button>
                        <button><img src={Video} alt =""/> <span>Virtual</span></button>
                        </div>
                        <button className={styles.request}><img src={Send} alt =""/> <span>Send Request</span></button>
                        <h6>It’s free, with no obligation － cancel anytime.</h6>

                    </section>
                </div>
                
                </div>
              
            </div>
            </div>
            <Footer/>
     
            
        </div>
    );
};

export default PropertyDetails;