import React from 'react';

//Component Imports
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import Header from './Common/Header';

//import resources
import Twitter from '../../Assets/twitter.png'
import Instagram from '../../Assets/instagram.png'
import Facebook from '../../Assets/facebook.png'
import Linkedin from '../../Assets/linkedin.png'


//import Styles
import styles from "./css/contact.module.css"

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Navbar />
                <Header title="Contact us" titleDescription={["We'd love to hear ", <br />, "from you"]} titleContent={["Have any question in mind or want to enquire? Please feel", <br />, " free to contact us through the form or the following details"]} description={<>
                    <h6>
                        Let's talk!
                    </h6>
                    <p>0700-OKB-HOMES   </p> <p>
                        Khadijat -  09062829850</p>
                    <hr />
                    <h6>Headoffice</h6>
                    <p>30 Lanre Awolokun street, Gbagada<br /> phase 2, Lagos</p>
                    <h6>Email Address</h6>
                    <p>info@okbffordables.ng</p>
                    <div className={styles.socialLink}>
                        <img src={Twitter} alt="twitter" />
                        <img src={Facebook} alt="facebook" />
                        <img src={Linkedin} alt="linkedin" />
                        <img src={Instagram} alt="instagram" />
                    </div>
                </>} />


            </div>
            <div className={styles.contactForm}>
                <div>
                    <h3>Contact Form</h3>
                    <p>Fill the form below and our admin will get in touch with you.</p>
                    <div className={styles.form}>
                        <h4> Applicant Details</h4>
                        <form>

                            <div className={styles.id}>
                                <div className={styles.formGroup}>
                                    <label htmlFor='name'>Name</label>
                                    <input type="text" name='name' placeholder='Full name' />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" name='email' placeholder='hi@example.com' />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor='number'>Phone Number</label>
                                    <input type="text" name='number' placeholder='+234 813 6567  891' />
                                </div>
                            </div>
                            <div className={styles.message}>
                                <div className={styles.formGroup}>
                                    <label htmlFor='message'>Message</label>
                                    <textarea type="text" name='meassge' placeholder='Type Here' />
                                </div>
                                <div className={styles.button}>
                                    <button>Send message</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Contact;