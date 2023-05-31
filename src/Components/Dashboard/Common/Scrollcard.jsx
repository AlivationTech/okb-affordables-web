import React, {useState} from 'react';
// import { NavLink } from 'react-router-dom';
// import  Styles  from '../Components/css/Sidebar.module.css';
import Sidebar from '../Components/Sidebar';
import Topnav from '../Components/Topnav';
import Styles from '../Pages/css/Dashboard.module.css';
import Chart from "react-apexcharts";
import dummyImage from '../Assets/dummy.png';
import logo from "../Assets/bigLogo.png"
import { BsFillHousesFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiPayMoney,GiReceiveMoney } from "react-icons/gi";
import Footer from "../Components/Footer"





function Scrollcard() {

  
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
  
return(
   
   
    <div className={Styles.card}>
      <h2 className={Styles.heading}>Top Selling Houses</h2>
      <div className={Styles.topHousescontainer}>
        {houses.map((house, index) => (
          <div className={Styles.house} key={index}>
            <img src={dummyImage} alt="House" className={Styles.image} />
            <div className={Styles.details}>
              <h2 className={Styles.name}>{house.name},{house.address}</h2>
             <p className={Styles.price}>Price: {house.price}</p>
              <p className={Styles.applicants}>No of applicants: {house.applicants}</p>
              <p className={Styles.remaining}>Remaining units: {house.remainingUnits}</p>
            
            </div>
          </div>
        ))}
      </div>
    </div>        
   
   
    );
}

export default Scrollcard;
