import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

//component imports
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import styles from "./css/property.module.css"

//Resoure Imports 
import Apply from "../../Assets/apply.png"
import Back from "../../Assets/back.png"
import Bath from "../../Assets/bath.png"
import Bed from "../../Assets/bed.png"
import Send from "../../Assets/send.png"
import Video from "../../Assets/video-icon.png"
import Home from "../../Assets/home.png"
import Love from "../../Assets/love.png"
import Share from "../../Assets/share.png"
import Slot from "../../Assets/slot.png"
import Tick from "../../Assets/tick.png"

import { GET } from '../Services/Backend';

const PropertyDetails = () => {
    const [propertyDetail, setPropertyDetails] = useState({})
    const location = useLocation()
    const getPropertyDetail = async ()=>{

        try {
          const response = await GET(`/project/user/project/${location.state.id}`)
          setPropertyDetails(response.data.data)
          console.log(response.data.data)
         
         
      }
      catch (err) {
        return err.response
    }
    }
    useEffect(()=>{
       getPropertyDetail()
    })
    
     if (propertyDetail!=={}){
        return (
            <div className={styles.container}>
            <div className={styles.content}>
            <Navbar/>
            <div className={styles.header}>
                <Link to ="/"><span><img src={Back} alt ="<"/> Back</span></Link>
                <h1>{propertyDetail.title}</h1>
                <div className={styles.headerContent}>
                    <p>{propertyDetail.address}</p>
                    <div className={styles.buttons}>
                        <button>
                            <img src ={Share} alt =""/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src ={Love} alt =""/>
                            <span>Favorite</span>
                        </button>
                    </div>
                </div>
                <div className={styles.propertyContent}>
                <div className={styles.leftContent}>
                    <div className={styles.mainImage}>
                      
                              {propertyDetail.imageUrl &&
                                 <img src={propertyDetail.imageUrl.imageOne} alt ="Property"/>

                              }

              
                 
                    </div>
                    <ul className={styles.highlights}>
                        <li>
                            <p>Bedrooms</p>
                            <h6><img src={Bed} alt ="bed"/> <span>
                                
                                {propertyDetail.highlight && propertyDetail.highlight.numberOfBedRooms}</span></h6>
                        </li>
                        <li>
                            <p>Bathroom</p>
                            <h6><img src={Bath} alt ="bath"/> <span>{propertyDetail.highlight && propertyDetail.highlight.numberOfBath}</span></h6>
                        </li>
                        <li>
                            <p>Slots</p>
                            <h6><img src={Slot} alt ="icon"/> <span>40 slots available</span></h6>
                        </li>
                        <li>
                            <p>Status</p>
                            <h6><img src={Tick} alt ="icon"/> <span>{propertyDetail.highlight && propertyDetail.highlight.houseType}</span></h6>
                        </li>
                    </ul>
                    <section className={styles.about}>
                        <h2>About this Property</h2>
                        <p>{propertyDetail.description}</p>
                        
                    </section>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.images}>
                    {propertyDetail.imageUrl &&
                    <img src={propertyDetail.imageUrl.imageTwo} alt ="Property"/>
     }
            {propertyDetail.imageUrl &&
                    <img src={propertyDetail.imageUrl.imageThree} alt ="Property"/>
            }
                    </div>
                    <section className={styles.action}>
                        <h6>Price</h6>
                        <h3>N24,400,000 <span>/unit</span></h3>
                        <button><img src={Apply} alt =""/> <span>Apply now</span></button>
                        <div className={styles.divide}/>
                      
                        <h4>Schedule inspection</h4>
                        <div className={styles.buttons}>
                        <button><img src={Home} alt =""/> <span>In person</span></button>
                        <button><img src={Video} alt =""/> <span>Virtual</span></button>
                        </div>
                        <button className={styles.request}><img src={Send} alt =""/> <span>Send Request</span></button>
                        <h6>It’s free, with no obligation － cancel anytime.</h6>

                    </section>
                </div>
                
                </div>
              
            </div>
            </div>
            <Footer/>
     
            
        </div>
    );
     }
       
};

export default PropertyDetails;