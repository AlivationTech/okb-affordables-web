import React from 'react';

import styles from './css/footer.module.css'

function Footer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.contact}>
                    <h3>Contact</h3>
                    <li>08168743267</li>
                    <li>okb@affordables.com</li>
                    <li>7 Lanre Awolokun street, Gbagada phase 2, Lagos</li>

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

                </ul>
            </div>
            <div className={styles.copy}>
                <p>OKB 2023 @ All Right Reserved</p>
            </div>

        </div>
    );
}

export default Footer;