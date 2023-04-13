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
            <h2>Terms & Condition</h2>
            <h4>Welcome to OKB Affordables, a Nigerian real estate company that offers construction and real
                estate services. The following terms and conditions govern our website and mobile app use.</h4>
            <div className={styles.termsContent}>
            <h3>Acceptance of Terms</h3>
            <p>You may use our website and mobile app to view
                properties, join projects, and purchase real estate services. You may not use our website or
                mobile app for any unlawful purpose, including but not limited to fraud, hacking, or
                spamming.</p>
            <h3>Use of the Website and Mobile App</h3>
            <p>You may need to create an account to use certain features of our website
                and mobile app. You agree to provide accurate and complete information when creating an
                account and keep your account information current. You are responsible for maintaining the
                confidentiality of your account information and all activities under your account.
            </p>
            <h3>User Accounts</h3>
            <p>We may share your personal information with third-party service
                providers who assist us in providing our services to you. We may also share your information
                with our business partners for marketing purposes. We do not sell your personal
                information to third parties.
            </p>
            <h3>Property Listings</h3>
            <p>We strive to provide accurate and up-to-date information about our
                properties, but we do not guarantee the accuracy or completeness of any listing. We reserve
                the right to modify or remove any listing at anytime and for any reason.
            </p>
            <h3>Intellectual Property</h3>
            <p>The OKB Affordables website and mobile app, including all content and
                software, are protected by copyright, trademark, and other laws. You may not reproduce,
                distribute, or modify any content or software without our prior written consent.

            </p>
            <h3>Disclaimer of Warranties</h3>
            <p>We make no representations or warranties about the suitability,
                reliability, availability, timeliness, or accuracy of our website or mobile app. We disclaim all
                warranties, express or implied, including but not limited to warranties of merchantability,
                fitness for a particular purpose, and non-infringement.
            </p>
            <h3>Limitation of Liability</h3>
            <p>We will not be liable for any damages arising out of or in connection
                with the use of our website or mobile app, including but not limited to direct, indirect,
                incidental, special, or consequential damages.

            </p>
            <h3>Indemnification</h3>
            <p>You agree to indemnify and hold us harmless from any claim or demand,
                including reasonable attorneys' fees, arising from your use of our website or mobile app or
                violating these terms and conditions.
            </p>
            <h3>Modification of Terms</h3>
            <p> We reserve the right to modify these terms and conditions at any
                time and without prior notice. Your continued use of our website or mobile app after any
                modification constitutes your acceptance of the words.
            </p>
            <h3>Governing Law</h3>
            <p> These terms and conditions are governed by the laws of Nigeria. Any dispute
                arising out of or in connection with these terms and conditions shall be resolved by the
                courts of Nigeria.
            </p>
            <h5>Thank you for choosing OKB Affordables for your real estate needs.</h5>

            </div>
            
            </div>
            <Footer />
        </div>
    );
};

export default TermsCondition;