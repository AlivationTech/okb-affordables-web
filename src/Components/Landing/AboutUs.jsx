import React from 'react';

//Component Imports
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import Header from './Common/Header';

//import Resources
import dummyOne from '../../Assets/dummy.png'
import FinSpec from "../../Assets/finSpec.png"
import Fmbn from "../../Assets/fmbn.png"
import Hssl from "../../Assets/hssl.png"
import Tfl from "../../Assets/tfl.png"

//import Styles
import styles from "./css/about.module.css"



const AboutUs = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <Navbar />

                <Header title="KNOW ABOUT US" titleDescription={["A real estate company ", <br />, "of prime properties."]} description={<>
                    <h6>OKB Affordables is the largest indigenous real estate development company providing affordable
                    mortgage brokerage services and sustainable social housing for African low- and middle-income
                    earners. </h6>
                    <p>OKB Affordables has embarked on numerous development projects, in partnership with the Federal
                      Mortgage Bank of Nigeria (FMBN), since 2013. We have established ourselves as a brand with
                      demonstrated integrity in the construction industry through our laudable community development
                      and socially targeted real estate projects.</p></>}
                />
                <div className={styles.imageContainer}>
                    <img src={dummyOne} alt="about us " />
                </div>

            </div>
            <div className={styles.aim}>
                <section>
                    <h5>OUR MISSION</h5>
                    <h3>To provide affordable housing <br /> for Nigerians</h3>
                    <p>We understand that buying or selling a property can be complex and time-consuming, so we strive
                        to make it as easy and convenient for our clients as possible. We offer flexible scheduling, online
                        tools and resources, and personalized services to meet our client’s unique needs and preferences.
                    </p>

                </section>
                <section>
                    <h5>OUR VISION</h5>
                    <h3>Leaders in exceptional yet <br /> affordable real estate.</h3>
                    <p>We aim to become the leading provider of exceptional real estate services by leveraging the latest
                      technologies and innovative practices to deliver unparalleled value to our clients. We strive to create
                      a culture of excellence that fosters collaboration, integrity, and a commitment to exceeding our
                      client’s expectations. We aim to build lasting relationships with our clients and become their trusted
                      advisors for all their real estate needs, delivering results that positively impact their lives
                      and communities.</p>

                </section>

            </div>
            <div className={styles.content}>
            <section>
          <div className={styles.okbHomes}>
           
            <div className={styles.homeContent}>
                <h6>OUR JOURNEY TO... </h6>
              <h2>
              Successful Projects
              </h2>
              <p>
              Our journey to successful real estate projects has been one of dedication, hard work, and a
              commitment to excellence. We have faced challenges, but with each obstacle, we have learned and
              grown. Through careful planning, attention to detail, and a focus on delivering value to our clients,
              we've achieved success in the real estate industry.
              </p>
              <div className={styles.stats}>
                <div>
                    <h3>
                    34+
                    </h3>
                    <p>Properties sold</p>
                </div>
                <div>
                    <h3>
                    400+
                    </h3>
                    <p>Customers</p>
                </div>
                <div>
                    <h3>
                    100+
                    </h3>
                    <p>Registered Agents</p>
                </div>
              </div>
            </div>
            <div className={styles.homeImage}>
              <img src={dummyOne} alt="home" />
            </div>
          </div>
        </section>
        <section>
          <div className={styles.partners}>
            <h2>Trusted by over 10,000 partners all over the <br/>country</h2>
            <p>We take great pride in our reputation as a trusted real estate developer through partners who trust
              us to provide their clients with affordable and quality housing options</p>
            <div className={styles.partnersList}>
              <img src ={FinSpec} alt ="partner-logo"/>
              <img src ={Fmbn} alt ="partner-logo"/>
              <img src ={Hssl} alt ="partner-logo"/>
              <img src ={Tfl} alt ="partner-logo"/>
            </div>
          </div>
        </section>
                </div>
            <Footer />
        </div>
    );
};

export default AboutUs;