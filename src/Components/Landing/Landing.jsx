import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//import components

import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Carousel from "./Common/Carousel";
import LocationCard from "./Common/LocationCard";
import PropertyCard from "./Common/PropertyCard";
import Testimonials from "./Common/Testimonals";
import PrinciplesCard from "./Common/PrinciplesCard";
import {GET} from "../Services/Backend"

//resource imports
import dummyImage from "../../Assets/dummy-one.png";
import Kosofe from "../../Assets/kosofe.png";
import Abuja from "../../Assets/abuja.png";
import Lekki from "../../Assets/lekki.png";
import Offer from "../../Assets/offer.png";
import Agent from "../../Assets/agent.png"
import HomeIcon from "../../Assets/home-icon.png"
import VideoIcon from "../../Assets/video-icon.png"
import FinSpec from "../../Assets/finSpec.png"
import Fmbn from "../../Assets/fmbn.png"
import Hssl from "../../Assets/hssl.png"
import Tfl from "../../Assets/tfl.png"
import Whatsapp from "../../Assets/whatsapp.png"

import styles from "./css/landing.module.css";

function Landing() {
  const navigate = useNavigate()
  const [mainCarousel, setMainCarousel] = useState(false);
  const [yellowRoof, setYellowRoof] = useState(true);
  const [testimony1, setTestimoy1] = useState(true)
  const [testimony2, setTestimoy2] = useState(false)
  const [allProperties, setAllProperties] = useState([])

  const toggleCarousel = () => {
    setMainCarousel(!mainCarousel);
    setYellowRoof(!yellowRoof);

  };
  const toggleTestimony = () => {
    setTestimoy1(!testimony1)
    setTestimoy2(!testimony2)
  }
const getAllProperties = async ()=>{

  try {
    const response = await GET("/project/user/all-project?page=0&size=10")
    setAllProperties(response.data.data.projects)


}
catch (err) {
    return err.response
}
}
  useEffect(() => {
    setTimeout(() => {
      toggleCarousel();
      toggleTestimony();
    }, 10000);
    getAllProperties()
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Navbar />
        <section style={{ marginTop: "1em" }}>
          <Carousel
            carousel={
              mainCarousel ? styles.hideContent : styles.carouselContent
            }
            carouselHeader={
              <h1>
                Buy a <span>great home </span>
                <br />
                that perfect’s for you.
              </h1>
            }
            carouselTextContent={
              <p>
                We are Committed to Providing and Ensuring a <br />
                Smooth and Hassle-Free Real Estate Experience
              </p>
            }
             button={
              <button className={styles.button}
               onClick={()=>navigate("/Property")}>View Projects</button>
             }
           
          />

          <Carousel
            carousel={yellowRoof ? styles.hideContent : styles.yellowRoof}
            carouselHeader={
              <h1>
                Find your dream <br />
                home at <span>Yellow Roof.</span>
              </h1>
            }
            carouselTextContent={
              <p>
                An elegantly designed 3-bedroom apartments,
                <br /> featuring a spacious living areas in a prime location.
              </p>
            }
            button={
              <button className={styles.button}
               onClick={()=>navigate("/Property/Details", {state:{
                id:"640ed519ac55ef4a93a574f1" }
              }) }>View Details</button>
             }
           
          />
          <div className={styles.carouselButton}>
            <div
              onClick={toggleCarousel}
              className={mainCarousel ? styles.inactive : styles.activeCarousel}
            ></div>
            <div
              onClick={toggleCarousel}
              className={yellowRoof ? styles.inactive : styles.activeCarousel}
            ></div>
          </div>
        </section>
        <div className={styles.whatsapp}>
        <a href="https://wa.link/t6dzp6" target="_blank" rel="noreferrer" > 
          <section>
            <div className={styles.chat}>
              <h3>Hi I'm Khadijat</h3>
              <p>I can give you more information</p>
            </div>
          <img src={Whatsapp} alt ="whatsapp"/>
          </section>
        </a>
        </div>

        <section>
          <h1>Explore Project Locations</h1>
          <p className={styles.contentText}>
            Apartments tailored to your standards with everything you need. ...
            .
          </p>
          <div className={styles.locations}>
            <LocationCard
              locationImage={Kosofe}
              locationTitle={"Kosofe, Lagos"}
              projects={"2 Projects"}
              city ={"&city=kosofe"}
      
            />
            <LocationCard
              locationImage={Lekki}
              locationTitle={"Lekki, Lagos"}
              projects={"1 Projects"}
              city ={"&city=lekki"}
            />
            <LocationCard
              locationImage={Abuja}
              locationTitle={"Kuje, Abuja"}
              projects={"1 Projects"}
              city ={"&city=kuje"}
            />
          </div>
        </section>
      </div>
 
      <section className={styles.propertySection}>
        <div className={styles.property}>
          <h2>Listed Properties</h2>
          <div className={styles.propertyList}>
            {allProperties.map((property)=>
                  <PropertyCard
                  propertyImage={property.imageUrl.featuredImage                  }
                  propertyTitle={property.name}
                  propertyDescription="3 Bedroom Detached Terrace Duplex"
                  propertyDetails={
                    <ul>
                      <li>{property.projectHighlight.numberOfBedRooms} Bed</li> <li>{property.projectHighlight.areaOfSite}sqm</li>
                    </ul>
                  }
                  addressContent={property.address}
                  price="N 15 million outright payment"
                  priceDets="Payment 2: 19 million (12 million equity, 7 million mortgage)"
                  viewDetails ={()=>navigate("/Property/Details", {state:{
                    id: property.id }
                  }) }
                 
                />
            )

            }
           
          </div>
        </div>
      </section>
      <div className={styles.content}>
        <section>
          <div className={styles.offer}>
            <div className={styles.offerContent}>
              <h3>Hot Offer for Today</h3>

              <h6>3 Bedroom Bungalow Ensuite</h6>
              <h1>N 15,000,000</h1>
              <p>
                The Preferred Choice for Home Buyers and Investors. Our mission
                is to be the foremost real estate service provider in Nigeria
                and beyond. Our most valuable asset is our team members. Through
                their expertise, we acquire, develop, and manage multifamily
                communities.
              </p>
              <button  onClick={()=>navigate("/Property/Details", {state:{
                id:"640ed519ac55ef4a93a574f1" }
              }) }>Buy More</button>
            </div>
            <div className={styles.offerImage}>
              <img src={Offer} alt="offers" />
            </div>
          </div>
        </section>
      </div>
      <section className={styles.inspection}>
        <div>
          <h6>Free Bus</h6>
          <h3>Need to check up our sites</h3>
        </div>
        <button><a href="https://forms.gle/ToV3VNk2vF6HMQCs9" target="_blank" rel="noreferrer" >Schedule Inspection</a></button>
      </section>
      <div className={styles.content}>
        <section>
          <div className={styles.okbHomes}>
            <div className={styles.homeImage}>
              <img src={dummyImage} alt="home" />
            </div>
            <div className={styles.homeContent}>
              <h3>
                OKB AFFORDABLES
                <br />
                Real Estate Limited
              </h3>
              <p>
                We are a real estate development and investment company in
                Nigeria dedicated to providing the most accessible real estate
                solutions in Africa with the highest possible industry
                standards.
              </p>
              <p>
                We are one of the fastest-growing real estate companies in
                Nigeria with an interest in the residential and retail sectors.
                The company presently has its core operations in Lagos with
                extension plans to other parts of Nigeria and Africa.
              </p>
              <div className={styles.learnMore} style={{cursor: "pointer"}}onClick={()=>navigate("/AboutUs")}>
                <h2 >Learn More</h2>
                <div className={styles.border}></div>
              </div>
         
            </div>
          </div>
        </section>
        <section>
          <div className={styles.testimonals}>
            <h3>What our clients say about us</h3>
            <h1>Testimonials</h1>
          </div>
          <div className={testimony1 ? styles.showContent : styles.hideContent}>
            <Testimonials content="I couldn't believe it when I found out that I could own my own home with such flexible payment options. Thanks to OKB Affordables, I was able to finally make my dream of owning a home come true. The entire process was seamless and the team was always available to answer my questions. I couldn't be happier with my new home!" sender="Ajayi Oluwadamilola" location="Irawo Estate" />
          </div>
          <div className={testimony2 ? styles.showContent : styles.hideContent}>
            <Testimonials content="As a first-time homebuyer, I was nervous about the process and didn't think I could afford a quality home. But OKB Affordables made the entire process so easy and stress-free. From the moment I contacted them, they listened to my needs and helped me find the perfect home that fit my budget. Their flexible payment options made it possible for me to finally own my own home. I would highly recommend this real estate company to anyone looking for affordable and quality housing in Nigeria.!" sender="Ifechukuwu Moses" location="Irawo Estate" />
          </div>
          <div className={styles.carouselButton}>
            <div
              onClick={toggleTestimony}
              className={testimony1 ? styles.inactive : styles.activeCarousel}
            ></div>
            <div
              onClick={toggleTestimony}
              className={testimony2 ? styles.inactive : styles.activeCarousel}
            ></div>
          </div>
        </section>
        <section>
          <div className={styles.agent}>
            <div className={styles.agentImage}>
              <div className={styles.stickyTop}>
                <img src={VideoIcon} alt ="video-icon"/>
                <div>
                  <h4>Become an Agent</h4>
                  <p>Join our team of talented agents</p>
                </div>

              </div>
              <img className ={styles.image}src ={Agent} alt ="agent"/>
              <div className={styles.stickyBottom}>
            
                <div>
                  <h4>Earn exciting incentives</h4>
                  <p>for selling a certain number of units.</p>
                </div>
                <img src={HomeIcon} alt ="home-icon"/>
              </div>
            </div>
            <div className={styles.agentContent}>
          
              <h2>Join our team of talented and motivated agents</h2>
              <p>You can earn exciting incentives for selling a certain number of units or properties, including bonuses, vacation packages, and even luxury cars! Contact us today to learn more about this exciting opportunity.</p>
               <button className={styles.button} onClick={()=> navigate("/Agent/Form")}>Join Now</button>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.partners}>
            <h2>Trusted by over 100 partners all over the <br/>country</h2>
            <p>We take great pride in our reputation as a trusted real estate developer through partners who trust us to provide affordable<br/> and quality housing options to their clients.</p>
            <div className={styles.partnersList}>
              <img src ={FinSpec} alt ="partner-logo"/>
              <img src ={Fmbn} alt ="partner-logo"/>
              <img src ={Hssl} alt ="partner-logo"/>
              <img src ={Tfl} alt ="partner-logo"/>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.principle}>
            <h2>
            Our Principles
            </h2>
            <p>We rely on these six principles to inform how we operate and serve our clients. Together, these <br/>principles inform the most valuable asset we possess: culture.</p>
            <div className={styles.principlesList}>
              <PrinciplesCard container={styles.light} header ="QUALITY" content ="We prioritize the delivery of quality workmanship and materials in all aspects of out operations, from design to construction to customer service. "/>
              <PrinciplesCard container={styles.dark} header ="INTEGRITY" content ="We ensure that we always act with integrity in our dealings with clients, suppliers, and other stakeholders.  "/>
              <PrinciplesCard container={styles.light} header ="SAFETY" content ="We prioritise safety in all our operations, including worker safety and the safety of customers and the public. "/>
              <PrinciplesCard container={styles.dark} header ="SUSTAINABILITY" content ="We strive to minimise our environmental impact and promote sustainability in its operations. "/>
              <PrinciplesCard container={styles.light} header ="CUSTOMER SERVICE" content ="We prfioritize customer service and satisfaction, and make every effort to meet or exceed customer expectations.er service. "/>
              <PrinciplesCard container={styles.dark} header ="INNOVATION" content ="We embrace innovation and stay up-to-date with the latest industry trends and technologies."/>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
