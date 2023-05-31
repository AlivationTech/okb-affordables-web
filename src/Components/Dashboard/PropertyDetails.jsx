import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';
// import  Styles  from '../Components/css/Sidebar.module.css';
import Sidebar from '../Components/Sidebar';
import Topnav from '../Components/Topnav';
import Styles from './css/PropertyDetails.module.css';
import Chart from "react-apexcharts";
import dummyImage from '../Assets/dummy.png';
import logo from "../Assets/bigLogo.png"
import { BsFillHousesFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiPayMoney,GiReceiveMoney } from "react-icons/gi";
import Footer from "../Components/Footer"
import dummy from "../Assets/dummy-one.png"


//Resoure Imports 
import Apply from "../Assets/apply.png"
import Back from "../Assets/back.png"
// import Bath from "../../Assets/bath.png"
// import Bed from "../../Assets/bed.png"
import Send from "../Assets/send.png"
import Video from "../Assets/video-icon.png"
import Home from "../Assets/home.png"
// import Love from "../../Assets/love.png"
// import Share from "../../Assets/share.png"
// import Slot from "../../Assets/slot.png"
// import Tick from "../../Assets/tick.png"

import { GET } from '../Services/Backend';





function PropertyDetails() {
    const [properties, setPropertyDetails] = useState({})
    const [propertyTypeDetail, setpropertyTypeDetail] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isType, setisType] = useState(false)
    const [pricePerUnit, setpricePerUnit] = useState()
     const [images, setImages]= useState([])
    const [unit, setunit]= useState()
    const [availableUnit, setAvailableUnit]= useState()
    const [unitPer, setunitPer]= useState()
    const [activeIndex, setActiveIndex] = useState(0);

    const thisProperties= {
          id: 1,
          img: dummy,
          name: "Luxury Apartment",
          address: "123 Main St, New York",
          price: "$1,500,000",
          unit: "3 bedrooms, 2 baths",
          applicants: 5,
          areaOfSite:"200,000", 
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod vehicula nisl ac convallis. Aliquam semper, nunc et efficitur placerat, augue diam molestie ligula, id lobortis nibh neque a est. Phasellus velit justo, facilisis nec iaculis vel, vulputate id augue. Nunc aliquam in massa quis cursus. Integer dignissim odio eget lacinia faucibus. very fab!!",
          highlight :{
            homebuyers:"200",
            amountPaid: "200,000",
            amountowed : "100,000",
            property : "20"

          }
        }

        const houses = [
            {
              name: 'Sunny Villa',
              address: '123 Main Street',
              price: '$500,000',
              applicants: 10,
              remainingUnits: 5,
            },
            {
              name: 'Ocean View',
              address: '456 Beach Blvd',
              price: '$1,200,000',
              applicants: 7,
              remainingUnits: 2,
            },
            {
              name: 'Cozy Cottage',
              address: '789 Maple Ave',
              price: '$250,000',
              applicants: 2,
              remainingUnits: 1,
            },{
              name: 'Cozy Cottage',
              address: '789 Maple Ave',
              price: '$250,000',
              applicants: 2,
              remainingUnits: 1,
            },{
              name: 'Cozy Cottage',
              address: '789 Maple Ave',
              price: '$250,000',
              applicants: 2,
              remainingUnits: 1,
            },{
              name: 'Cozy Cottage',
              address: '789 Maple Ave',
              price: '$250,000',
              applicants: 2,
              remainingUnits: 1,
            },{
              name: 'Cozy Cottage',
              address: '789 Maple Ave',
              price: '$250,000',
              applicants: 2,
              remainingUnits: 1,
            },{
              name: 'Cozy Cottage',
              address: '789 Maple Ave',
              price: '$250,000',
              applicants: 2,
              remainingUnits: 1,
            },{
              name: 'Cozy Cottage',
              address: '789 Maple Ave',
              price: '$250,000',
              applicants: 2,
              remainingUnits: 1,
            },{
              name: 'Cozy Cottage',
              address: '789 Maple Ave',
              price: '$250,000',
              applicants: 2,
              remainingUnits: 1,
            },
            // Add more houses as needed
          ];


        
   
    const getPropertyDetail = async () => {

        try {
            console.log(window.location.state.id)
            const response = await GET(`/project/user/project/${window.location.state.id}`)

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
          <div className={Styles.actionLabel}>
            <h6 className={activeIndex === 0 ? Styles.active : ''} onClick={() => handlePropertyTypeClick(0)}>Normal Piece Price</h6>
            <div></div>
            <h6 className={activeIndex === 1 ? Styles.active : ''} onClick={() => handlePropertyTypeClick(1)}>Corner Piece Price</h6> 
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

  
return(

<div className={Styles.content}>
<Sidebar/>
<Topnav/>
<div className={Styles.header}>
    <Link to="/Property"><span><img src={Back} alt="<" /> Back</span></Link>
    <h1>{thisProperties.name}</h1>
    <div className={Styles.headerContent}>
        <p>{thisProperties.address}</p>
    </div>
</div>
<div className={Styles.propertyContent}>

<div className={Styles.leftContent}>
    <div className={Styles.mainImage}>
        {/* {thisProperties.imageUrl &&
            <img src={images[currentIndex]
            } alt="Property"/>

        } */}
        <img src={dummy} alt="" />
    </div>
    <div className={Styles.subImages}>
        {/* {images.map((image,id) =>(
            <img key={id} src={image} />
        ))} */}
                <img src={dummy} alt="" />
                <img src={dummy} alt="" />
                <img src={dummy} alt="" />
                <img src={dummy} alt="" />

    </div>
    <ul className={Styles.highlights}>
        <li>
            <p>Total Homebuyers</p>
            <h6>
                 <span>

                {thisProperties.highlight && thisProperties.highlight.homebuyers}</span></h6>
        </li>
        <li>
            <p>Amount Paid</p>
            <h6>
                <span>{thisProperties.highlight && thisProperties.highlight.amountPaid}</span></h6>
        </li>
        <li>
            <p>Amount Owed</p>
            <h6>
                 <span>{thisProperties.highlight && thisProperties.highlight.amountowed}sqm</span></h6>
        </li>
        <li>
            <p>Available properties</p>
            <h6>
                <span>{thisProperties.highlight.property}</span></h6>
        </li>
    </ul>
    <section className={Styles.about}>
        <h2>About this Property</h2>
        <p>{thisProperties.description}</p>

    </section>

</div>
<div className={Styles.rightContent}>

<section className={Styles.action}>
        {console.log(isType)}
        {getPropertyDetail}
        {isType ? getPropertyType: ( 
        <div>               
            <h6>Price</h6>   
        </div>)}
        <h3>{pricePerUnit} <span>40,000,000/unit</span></h3>
        <Link to='/login'  target="_blank" rel="noreferrer">
        {/* <button><img src={Apply} alt="" /> <span>Apply now</span></button> */}
        </Link>
        <div className={Styles.divide} />
        <h2 className={Styles.heading}>Homebuyers</h2>
      <div className={Styles.topHousescontainer}>
        {houses.map((house, index) => (
          <div className={Styles.house} key={index}>
            <img src={dummyImage} alt="House" className={Styles.image} />
            <div className={Styles.details}>
             <p className={Styles.price}>Name: {house.name}</p>
              <p className={Styles.applicants}>No of Property Bought: {house.applicants}</p>
              <p className={Styles.remaining}>Total amount paid: {house.remainingUnits}</p>
            
            </div>
          </div>
        ))}
      </div>

    </section>
</div>

</div>
</div>

)
}

export default PropertyDetails;
