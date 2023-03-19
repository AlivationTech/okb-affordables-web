import React from 'react';


//component imports
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import Header from './Common/Header';

//resources imports
import dummyOne from '../../Assets/dummy.png'

import styles from './css/agent.module.css'

const Agent = () => {

    return (
        <div className={styles.container}>
           <div className={styles.content}>
                <Navbar />
                <Header title="Join our agents" titleDescription={["Be a part of our Agent ", <br />, "and earn incentives."]} description={<>
                    <h6>Join the largest community of agents, lorem ipsum dolor sit amet, consectetur adipiscing elit.  </h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p></>}
                />
                <div className={styles.imageContainer}>
                    <img src={dummyOne} alt="about us " />
                </div>

            </div>
            <div className={styles.aim}>
                <section>
                    <h5>BECOMING AN AGENT</h5>
                    <h3>We make the estates we save you <br /> some stress</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>

                </section>
                <section>
                    <h5>what you get</h5>
                    <h3>Build more spacious living areas in a <br /> prime location.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>

                </section>

            </div>
            <div className={styles.contactForm}>
                <div>
                    <h3>Agent form</h3>
                    <p>Fill the form below and our admin will get in touch with you.</p>
                    <div className={styles.form}>
                        <h4> Applicant Details</h4>
                        <form>
                            <div className={styles.formFlex}>
                            <div className={styles.formGroup}>
                                    <label htmlFor='title'>Title</label>
                                    <input type="text" name='title' placeholder='Select title' />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor='name'>Name</label>
                                    <input type="text" name='name' placeholder='Full name' />
                                </div>
                            </div>
                            <div className={styles.formFlex}>
                           
                                <div className={styles.formGroup}>
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" name='email' placeholder='hi@example.com' />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor='number'>Phone Number</label>
                                    <input type="text" name='number' placeholder='+234 813 6567  891' />
                                </div>
                            </div>
                            <div className={styles.formFlex}>
                            <div className={styles.formGroup}>
                                    <label htmlFor='city'>City</label>
                                    <input type="text" name='city' placeholder='Enter City' />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor='state'>State</label>
                                    <input type="text" name='state' placeholder='Enter State' />
                                </div>
                            </div>

                          
                            
                        </form>
                        
                    </div>
                    <div className={styles.button}>
                                    <button>Send message</button>
                                </div>

                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Agent;