import React, { useState, useEffect } from "react";

//import components

import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Carousel from "./Common/Carousel";
import LocationCard from "./Common/LocationCard";
import PropertyCard from "./Common/PropertyCard";
import Testimonials from "./Common/Testimonals";
//resource imports

import dummyImage from "../../Assets/dummy-one.png";
import Kosofe from "../../Assets/kosofe.png";
import Abuja from "../../Assets/abuja.png";
import Lekki from "../../Assets/lekki.png";
import PropertyOne from "../../Assets/propertyone.png";
import PropertyTwo from "../../Assets/propertytwo.png";
import PropertyThree from "../../Assets/propertythree.png";
import PropertyFour from "../../Assets/propertyfour.png";
import Offer from "../../Assets/offer.png";

import styles from "./css/landing.module.css";

function Landing() {
  const [mainCarousel, setMainCarousel] = useState(true);
  const [yellowRoof, setYellowRoof] = useState(false);
  const [testimony1, setTestimoy1] = useState(true)
  const [testimony2, setTestimoy2] = useState(false)
  const toggleCarousel = () => {
    setMainCarousel(!mainCarousel);
    setYellowRoof(!yellowRoof);

  };
  const toggleTestimony = ()=>{
    setTestimoy1(!testimony1)
    setTestimoy2(!testimony2)
  }

  useEffect(() => {
    setTimeout(() => {
      toggleCarousel();
      toggleTestimony();
    }, 5000);
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Navbar />
        <section style={{marginTop:"1em"}}>
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

        <section>
          <h1>Explore Project Locations</h1>
          <p className={styles.contentText}>
            Apartments tailored to your standards with everything you need. ...
            .
          </p>
          <div className={styles.locations}>
            <LocationCard
              locationImage={Kosofe}
              locationTitle={"Kosofe Lagos"}
              projects={"2 Projects"}
            />
            <LocationCard
              locationImage={Lekki}
              locationTitle={"Lekki Lagos"}
              projects={"2 Projects"}
            />
            <LocationCard
              locationImage={Abuja}
              locationTitle={"Abuja"}
              projects={"1 Projects"}
            />
          </div>
        </section>
      </div>

      <section className={styles.propertySection}>
        <div className={styles.property}>
          <h2>Listed Properties</h2>
          <div className={styles.propertyList}>
            <PropertyCard
              propertyImage={PropertyOne}
              propertyTitle="JARMAL GARDENS, LEKKI."
              propertyDescription="3 Bedroom Detached Terrace Duplex"
              propertyDetails={
                <ul>
                  <li>3 Bed</li> <li>48,445.87sqm</li>
                </ul>
              }
              addressContent="Okene Street, off Alhaji Ganiyu Street, Owode"
              price="N 34 million (15 million outright payment)"
              priceDets="Payment 2: 19 million (12 million equity, 7 million mortgage)"
            />
            <PropertyCard
              propertyImage={PropertyTwo}
              propertyTitle="JARMAL GARDENS, LEKKI."
              propertyDescription="3 Bedroom Detached Terrace Duplex"
              propertyDetails={
                <ul>
                  <li>3 Bed</li> <li>48,445.87sqm</li>
                </ul>
              }
              addressContent="Okene Street, off Alhaji Ganiyu Street, Owode"
              price="N 34 million (15 million outright payment)"
              priceDets="Payment 2: 19 million (12 million equity, 7 million mortgage)"
            />
            <PropertyCard
              propertyImage={PropertyThree}
              propertyTitle="JARMAL GARDENS, LEKKI."
              propertyDescription="3 Bedroom Detached Terrace Duplex"
              propertyDetails={
                <ul>
                  <li>3 Bed</li> <li>48,445.87sqm</li>
                </ul>
              }
              addressContent="Okene Street, off Alhaji Ganiyu Street, Owode"
              price="N 34 million (15 million outright payment)"
              priceDets="Payment 2: 19 million (12 million equity, 7 million mortgage)"
            />
            <PropertyCard
              propertyImage={PropertyFour}
              propertyTitle="JARMAL GARDENS, LEKKI."
              propertyDescription="3 Bedroom Detached Terrace Duplex"
              propertyDetails={
                <ul>
                  <li>3 Bed</li> <li>48,445.87sqm</li>
                </ul>
              }
              addressContent="Okene Street, off Alhaji Ganiyu Street, Owode"
              price="N 34 million (15 million outright payment)"
              priceDets="Payment 2: 19 million (12 million equity, 7 million mortgage)"
            />
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
              <button>Buy More</button>
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
        <button>Schedule Inspection</button>
      </section>
      <div className={styles.content}>
        <section>
          <div className={styles.okbHomes}>
            <div className={styles.homeImage}>
              <img src={dummyImage} alt="home" />
            </div>
            <div className={styles.homeContent}>
              <h3>
                OKB HOMES
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
              <div className={styles.learnMore}>
                <h2>Learn More</h2>
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
        <div className={testimony1 ? styles.showContent: styles.hideContent}>
        <Testimonials  content="I couldn't believe it when I found out that I could own my own home with such flexible payment options. Thanks to OKB Affordables, I was able to finally make my dream of owning a home come true. The entire process was seamless and the team was always available to answer my questions. I couldn't be happier with my new home!" sender ="Ajayi Oluwadamilola" location="Irawo Estate"/>
          </div>
          <div className={testimony2 ? styles.showContent: styles.hideContent}>
          <Testimonials content="As a first-time homebuyer, I was nervous about the process and didn't think I could afford a quality home. But OKB Affordables made the entire process so easy and stress-free. From the moment I contacted them, they listened to my needs and helped me find the perfect home that fit my budget. Their flexible payment options made it possible for me to finally own my own home. I would highly recommend this real estate company to anyone looking for affordable and quality housing in Nigeria.!" sender ="Ifechukuwu Moses" location="Irawo Estate"/>
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
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
