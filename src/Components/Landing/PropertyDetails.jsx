import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

//component imports
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import styles from "./css/property.module.css"
// import Carousel from "../Landing/Common/PropertyCarousel"

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
    const [propertyTypeDetail, setpropertyTypeDetail] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isType, setisType] = useState(false)
    const [pricePerUnit, setpricePerUnit] = useState()
    const [images, setImages]= useState([])
    const [unit, setunit]= useState()
    const [availableUnit, setAvailableUnit]= useState()
    const [unitPer, setunitPer]= useState()
    const [activeIndex, setActiveIndex] = useState(0);

    

    const location = useLocation()
    const getPropertyDetail = async () => {

        try {
            console.log(location.state.id)
            const response = await GET(`/project/user/project/${location.state.id}`)

            console.log(response)
            console.log(propertyTypeDetail)

            const imageList =[]
            imageList.push(
                response.data.data.imageUrl.featuredImage,
                response.data.data.imageUrl.imageThree,
                response.data.data.imageUrl.imageTwo
                )
             
            console.log(imageList)
            const per = ((availableUnit/unit) * 100)
            const Type = ((response.data.data.propertyTypes).length >1)


           

             setPropertyDetails(response.data.data)

            setImages(imageList)
            setpropertyTypeDetail(response.data.data.propertyTypes)
            setpricePerUnit(new Intl.NumberFormat().format(response.data.data.propertyTypes[0].unitPrice))
            setunit(response.data.data.propertyTypes[0].totalUnit)
            setAvailableUnit(response.data.data.propertyTypes[0].availableUnit)
            setunitPer(per)

            setisType(Type)
         

        // getPropertyType()


        }
        catch (err) {
            return err.response
        }

    }


 
  
 
    
    
    const getPropertyTypeDetail = (e) => {
        let content = e.target.textContent

            if (content === 'Normal Piece Price'){
                let per = (availableUnit/unit) * 100
                setpricePerUnit(new Intl.NumberFormat().format(propertyTypeDetail[0].unitPrice))
                setunit(propertyTypeDetail[0].totalUnit)
                setAvailableUnit(propertyTypeDetail[0].availableUnit)
                setunitPer(per)

           }
            else if (content === 'Corner Piece Price'){
                let per = (availableUnit/unit) * 100
                setpricePerUnit(new Intl.NumberFormat().format(propertyTypeDetail[1].unitPrice))
                setunit(propertyTypeDetail[1].totalUnit)
                setAvailableUnit(propertyTypeDetail[1].availableUnit)
                setunitPer(per)


           }    
    }

    const handlePropertyTypeClick = (index) => {
        setActiveIndex(index);
      };    

    const getPropertyType  = (      
        <div  onClick={getPropertyTypeDetail}>
          <div className={styles.actionLabel}>
            <h6 className={activeIndex === 0 ? styles.active : ''} onClick={() => handlePropertyTypeClick(0)}>Normal Piece Price</h6>
            <div></div>
            <h6 className={activeIndex === 1 ? styles.active : ''} onClick={() => handlePropertyTypeClick(1)}>Corner Piece Price</h6> 
          </div>
          <hr />
        </div>
      );
    


    const goToImage = id =>{
        setCurrentIndex(id)
    }
 
    useEffect(() => {
        getPropertyDetail()




    }, [])

    if (propertyDetail !== {}) {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <Navbar />
                    <div className={styles.header}>
                        <Link to="/Property"><span><img src={Back} alt="<" /> Back</span></Link>
                        <h1>{propertyDetail.title}</h1>
                        <div className={styles.headerContent}>
                            <p>{propertyDetail.address}</p>
                            <div className={styles.buttons}>
                                <button>
                                    <img src={Share} alt="" />
                                    <span>Share</span>
                                </button>
                                <button>
                                    <img src={Love} alt="" />
                                    <span>Favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.propertyContent}>
                        <div className={styles.leftContent}>
                            <div className={styles.mainImage}>
                                {propertyDetail.imageUrl &&
                                    <img src={images[currentIndex]
                                    } alt="Property"/>

                                }
                            </div>
                            <div className={styles.subImages}>
                                {images.map((image,id) =>(
                                    <img key={id} src={image} onClick={() =>goToImage(id)}/>
                                ))}
                            </div>
                            <ul className={styles.highlights}>
                                <li>
                                    <p>Bedrooms</p>
                                    <h6><img src={Bed} alt="bed" /> <span>

                                        {propertyDetail.highlight && propertyDetail.highlight.numberOfBedRooms}</span></h6>
                                </li>
                                <li>
                                    <p>Bathroom</p>
                                    <h6><img src={Bath} alt="bath" /> <span>{propertyDetail.highlight && propertyDetail.highlight.numberOfBath}</span></h6>
                                </li>
                                <li>
                                    <p>Area</p>
                                    <h6><img src={Slot} alt="icon" /> <span>{propertyDetail.highlight && propertyDetail.highlight.areaOfSite}sqm</span></h6>
                                </li>
                                <li>
                                    <p>Type</p>
                                    <h6><img src={Tick} alt="icon" /> <span>{propertyDetail.highlight && propertyDetail.highlight.houseType}</span></h6>
                                </li>
                            </ul>
                            <section className={styles.about}>
                                <h2>About this Property</h2>
                                <p>{propertyDetail.description}</p>

                            </section>
                         
                            <div className={styles.map
                            }>
                                <iframe title='address' style={{ borderRadius: "12px" }} width="100%" height="300" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.446574136213!2d3.3987428152557912!3d6.591283924199067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92c035813125%3A0x4202d803e3667b52!2sJEXTOBAN%20Secondary%20School!5e0!3m2!1sen!2sng!4v1679832432951!5m2!1sen!2sng" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>

                        </div>
                        <div className={styles.rightContent}>

                            <section className={styles.action}>
                                {console.log(isType)}
                                {getPropertyDetail}
                                {isType ? getPropertyType: ( 
                                <div>               
                                    <h6>Price</h6>   
                                </div>)}
                                <h3>{pricePerUnit} <span>/unit</span></h3>
                                <Link to='/login'  target="_blank" rel="noreferrer">
                                <button><img src={Apply} alt="" /> <span>Apply now</span></button>
                                </Link>
                                <div className={styles.divide} />

                                <h4>Schedule inspection</h4>
                                <div className={styles.buttons}>
                                    <button><img src={Home} alt="" /> <span>In person</span></button>
                                    <button><img src={Video} alt="" /> <span>Virtual</span></button>
                                </div>
                                <button 
                                 className={styles.request}><a href="https://forms.gle/ToV3VNk2vF6HMQCs9" target="_blank" rel="noreferrer" ><img src={Send} alt="" /> <span>Send Request</span></a></button>
                                <p>It’s free, with no obligation － cancel anytime.</p>

                            </section>
                            <div className={styles.avaliablity}>
                                <h3>Available Units</h3>
                                <p>This shows total number available</p>
                                <div className="w3-border">
                                    <div className="w3-blue" style={{ height: "24px", width: (unitPer)}}></div>
                                </div>


                                <div className={styles.slot}>
                                <h4>{availableUnit} available of {unit} units</h4>
                                    <p>{unitPer}%</p>
                                </div>



                            </div>
                        </div>

                    </div>


                </div>
                <Footer />


            </div>
        );
    }

};

export default PropertyDetails;