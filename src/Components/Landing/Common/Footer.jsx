import React from 'react';

import styles from './css/footer.module.css'

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
                    <li><span><img src={Phone} alt="facebook" /></span>08168743267</li>
                    <li> <span><img src={Email} alt="facebook" /></span>okb@affordables.com</li>
                    <li> <span><img src={Tag} alt="facebook" /></span>7 Lanre Awolokun street, Gbagada phase 2, Lagos</li>

                </ul>
                <ul className={styles.contact}>
                    <h3>Links</h3>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Agents</li>
                    <li>FaQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>

                </ul>
                <ul className={styles.affordables}>
                    <h3>The Affordables</h3>
                    <li>OKB Affordables is a real estate company that provides affordable housing options with flexible payment plans. Our mission is to make homeownership more accessible and affordable for everyone. Contact us today to learn more about our services and find your perfect home.</li>
                    <div className={styles.socialLink}>
                    <a href="" target="_blank" rel="noreferrer" ><img src={Twitter} alt="twitter" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100077621514621" target="_blank" rel="noreferrer" > <img src={Facebook} alt="facebook" /></a>
                    <a href="https://www.linkedin.com/in/okb-affordables-90246a223/" target="_blank" rel="noreferrer" ><img src={Linkedin} alt="linkedin" /></a>
                    <a href="https://www.instagram.com/okbaffordables/" target="_blank" rel="noreferrer" >  <img src={Instagram} alt="instagram" /></a>
                    </div>

                </ul>
            </div>
            <div className={styles.copy}>
                <p>OKB 2023 @ All Right Reserved</p>
            </div>

        </div>
    );
}

export default Footer;