import React, { useEffect, useState } from 'react';


//component imports
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import Header from './Common/Header';

//resources imports
import dummyOne from '../../Assets/dummy.png'

import styles from './css/agent.module.css'

const Agent = () => {

    const [formData, setFormData] = useState({
        title : '',
        fullname : '',
        phonenumber:'',
        emailaddress:'',
        state :'',
        city: ''

    })
    
    const handleChange =(e)=>{
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
        console.log(formData)
    }

      const handleSubmit = (e) => {
       e.preventDefault()
     console.log(formData);
        setFormData({
            ...formData, [e.target.name] : ''
        })
        
    try {
        let res =  fetch("http://localhost:3000/api/v1/agent/user/save",{
            method : "POST",
            mode:'cors',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(formData)

        })
        console.log(formData)
    } catch (error) {
        console.log(error)
        
    }

      };
   



    return (
        <div className={styles.container}>
           <div className={styles.content}>
                <Navbar />
                <Header title="Join our agents" titleDescription={["Be a part of our Agent ", <br />, "and earn incentives."]} description={<>
                    <h6>If you are interested in joining the OKB Affordables team as a real estate agent, we welcome
                        you to apply.</h6>
                    <p>Our company is committed to providing affordable housing solutions to
                        Nigerians, and we believe that our agents play a critical role in achieving this goal.If you meet these qualifications and are interested in becoming an OKB Affordables agent,
                        please fill out our online application form. We will review your application and get in touch
                        with you as soon as possible</p></>}
                />
                <div className={styles.imageContainer}>
                    <img src={dummyOne} alt="about us " />
                </div>

            </div>
            <div className={styles.aim}>
                <section>
                    <h5>BECOMING AN AGENT</h5>
                    <h3>We make the estates we save you <br /> some stress</h3>
                    <p>We offer a range of incentives to help our agents achieve their goals and grow their business.
                        Some of the incentives we offer include: Sales bonuses, Referral bonuses,
                        Performancebonuses and Training and development bonuses.We believe that these incentives help motivate our
                        agents and encourage them to go above and beyond for their clients. If you are interested 
                        in joining our team and earning these incentives, please fill out our online application form today.</p>
                </section>
                <section>
                    <h5>WHAT YOU GET</h5>
                    <h3>A wide range of benefits and resources to help you succeed in your role</h3>
                    <p>Here are just a few of the things you can expect: Access to a wide range of affordable
                        housing solutions, Marketing and advertising support, Training and professional
                        development and Competitive compensation.</p>
                </section>

            </div>
            <div className={styles.contactForm}>
                <div>
                    <h3>Agent form</h3>
                    <p>Fill the form below and our admin will get in touch with you.</p>
                    <div className={styles.form}>
                        <h4> Agent Details</h4>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formFlex}>
                            <div className={styles.formGroup}>
                                    <label htmlFor='title'>Title</label>
                                    <input onChange={handleChange} value={formData.title} type="text" name='title' placeholder='Select title' />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor='name'>Name</label>
                                    <input onChange={handleChange} value={formData.fullname} type="text" name='fullname' placeholder='Full name' />
                                </div>
                            </div>
                            <div className={styles.formFlex}>
                           
                                <div className={styles.formGroup}>
                                    <label htmlFor='email'>Email</label>
                                    <input onChange={handleChange} value={formData.emailaddress} type="email" name='emailaddress' placeholder='hi@example.com' />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor='number'>Phone Number</label>
                                    <input onChange={handleChange} value={formData.phonenumber} type="text" name='phonenumber' placeholder='+234 813 6567  891' />
                                </div>
                            </div>
                            <div className={styles.formFlex}>
                            <div className={styles.formGroup}>
                                    <label htmlFor='city'>City</label>
                                    <input onChange={handleChange} value={formData.city} type="text" name='city' placeholder='Enter City' />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor='state'>State</label>
                                    <input onChange={handleChange} value={formData.state} type="text" name='state' placeholder='Enter State' />
                                </div>
                            </div>

                            <div className={styles.button}>
                                    <button>Send message</button>
                                </div>
                            
                        </form>
                        
                    </div>
                   

                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Agent;