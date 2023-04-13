import React from 'react';

import styles from './css/footer.module.css'

import { Link } from 'react-router-dom';

//import resources
import Twitter from '../../../Assets/twitter-white.png'
import Instagram from '../../../Assets/instagram-white.png'
import Facebook from '../../../Assets/facebook-white.png'
import Linkedin from '../../../Assets/linkedin-white.png'
import Email from '../../../Assets/email.png'
import Tag from '../../../Assets/tag.png'
import Phone from '../../../Assets/phone.png'



function Footer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.contact}>
                    <h3>Contact</h3>
                    <li><span><img src={Phone} alt="facebook" /></span>070065246637</li>
                    <li><span><img src={Phone} alt="facebook" /></span>0700-OKB-HOMES</li>
                    <li> <span><img src={Email} alt="facebook" /></span>info@okbffordables.ng</li>
                    <li> <span><img src={Tag} alt="facebook" /></span>30 Lanre Awolokun street, Gbagada phase 2, Lagos</li>

                </ul>
                <ul className={styles.contact}>
                    <h3>Links</h3>
                    <Link to ="/Property"><li>Projects</li></Link>
                    <Link to ="/AboutUs"><li>About</li></Link>
                    <Link to ="/Agent"><li>Agents</li></Link>
                    <Link to='/Privacy'><li>Privacy Policy</li></Link>
                    <Link to='/Terms'><li>Terms and Conditions</li></Link>

                </ul>
                <ul className={styles.affordables}>
                    <h3>OKB Affordables</h3>
                    <li>OKB Affordables is a real estate company that provides affordable housing options with flexible payment plans. Our mission is to make homeownership more accessible and affordable for everyone. Contact us today to learn more about our services and find your perfect home.</li>
                    <div className={styles.socialLink}>
                    <a href="https://wa.link/t6dzp6" target="_blank" rel="noreferrer" > <img src={Twitter} alt="whatsapp" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100077621514621" target="_blank" rel="noreferrer" > <img src={Facebook} alt="facebook" /></a>
                    <a href="https://www.linkedin.com/in/okb-affordables-90246a223/" target="_blank" rel="noreferrer" ><img src={Linkedin} alt="linkedin" /></a>
                    <a href="https://www.instagram.com/okbaffordables/" target="_blank" rel="noreferrer" >  <img src={Instagram} alt="instagram" /></a>
                    </div>

                </ul>
            </div>
            <div className={styles.copy}>
                <p>OKB Affordables 2023 @ All Right Reserved</p>
            </div>

        </div>
    );
}

export default Footer;