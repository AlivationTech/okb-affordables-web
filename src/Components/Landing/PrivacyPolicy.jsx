import React from 'react';

//Component Imports
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import Header from './Common/Header';

//import Resources


//import Styles
import styles from "./css/Privacy.module.css"



const TermsCondition = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <Navbar />
            <h2>Privacy Policy</h2>
            <h4>Welcome to the OKB Affordables privacy policy. This policy explains how we collect, use, and protect
            your personal information.</h4>
            <div className={styles.termsContent}>
            <h3>Information Collection</h3>
            <p>We collect personal information when you create an account on our
                website or mobile app, when you purchase or participate in a project, or when you contact
                us for support or information. The information we collect may include your name, email
                address, phone number, mailing address, and payment information.</p>
            <h3>Use of Information</h3>
            <p>We use your personal information to provide our services to you,
                including processing transactions, communicating with you about your account or projects,
                and sending you marketing communications. We may also use your information to improve
                our services and comply with legal obligations.
            </p>
            <h3>Information Sharing</h3>
            <p>We may share your personal information with third-party service
                providers who assist us in providing our services to you. We may also share your information
                with our business partners for marketing purposes. We do not sell your personal
                information to third parties.
            </p>
            <h3>Security</h3>
            <p>We take reasonable steps to protect your personal information from unauthorized
                access, disclosure, or destruction. However, no method of transmission over the Internet or
                electronic storage is entirely secure, and we cannot guarantee the security of your
                information.
            </p>
            <h3>Data Retention</h3>
            <p>We retain your personal information for as long as necessary to provide our
                services to you and to comply with legal obligations.
            </p>
            <h3>Children's Privacy</h3>
            <p>Our website and mobile app are not intended for children under 18. We
                do not knowingly collect personal information from children under 18.
            </p>
            <h3>Your Rights</h3>
            <p>You can access, correct, and delete your personal information. You may also
                object to or restrict the processing of your information or request a copy in a structured,
                machine-readable format. Please get in touch with us to exercise these rights.
            </p>
            <h3>Changes to the Privacy Policy</h3>
            <p>We may update this privacy policy from time to time. We will
                notify you of any material changes to the policy by email or by posting a notice on our
                website or mobile app.
            </p>
            <h3>Contact Us</h3>
            <p> If you have any questions or concerns about our privacy policy or our use of your
                personal information, please contact us at 0700-OKB-HOMES.
            </p>
            <h5>Thank you for choosing OKB Affordables for your real estate needs.</h5>

            </div>
            
            </div>
            <Footer />
        </div>
    );
};

export default TermsCondition;