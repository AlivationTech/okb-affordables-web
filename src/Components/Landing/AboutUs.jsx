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
                <Header title="Know about us" titleDescription={["A real estate company ", <br />, "of prime properties."]} description={<>
                    <h6>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet nunc ut sem vitae. </h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p></>}
                />
                <div className={styles.imageContainer}>
                    <img src={dummyOne} alt="about us " />
                </div>

            </div>
            <div className={styles.aim}>
                <section>
                    <h5>our mission</h5>
                    <h3>We make the estates we save you <br /> some stress</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>

                </section>
                <section>
                    <h5>our Vision</h5>
                    <h3>Build more spacious living areas in a <br /> prime location.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>

                </section>

            </div>
            <div className={styles.content}>
            <section>
          <div className={styles.okbHomes}>
           
            <div className={styles.homeContent}>
                <h6>OUR JOURNEY to... </h6>
              <h2>
              Successful Projects
              </h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor orem<br/> ipsum dolor sit amet, consectetur.</p>
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