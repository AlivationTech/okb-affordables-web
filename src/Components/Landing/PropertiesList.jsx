import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//Component Imports
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

import { GET } from "../Services/Backend";

import PropertyCard from "./Common/PropertyCard";
//styles import
import styles from "./css/propertylist.module.css";

const PropertiesList = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [allProperties, setAllProperties] = useState([]);
 
  const getAllProperties = async () => {
    try {
    
      const response = await GET(`/project/user/all-project?page=0&size=10${location.state.city}`);

      setAllProperties(response.data.data.projects);

    
    } catch (err) {
      return err.response;
    }
  };
  useEffect(() => {
    getAllProperties();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Navbar />
        <div className={styles.property}>
         <div className={styles.header}>
            <h2>Listed Properties</h2>
            <button>Filter by location</button>
         </div>
          <div className={styles.propertyList}>
            {allProperties.map((property) => (
              <PropertyCard
                propertyImage={property.imageUrl.featuredImage}
                propertyTitle={property.name}
                propertyDescription="3 Bedroom Detached Terrace Duplex"
                propertyDetails={
                  <ul>
                    <li>{property.projectHighlight.numberOfBedRooms} Bed</li>{" "}
                    <li>{property.projectHighlight.areaOfSite}sqm</li>
                  </ul>
                }
                addressContent={property.address}
                price="N 15 million outright payment"
                priceDets="Payment 2: 19 million (12 million equity, 7 million mortgage)"
                viewDetails={() =>
                  navigate("/Property/Details", {
                    state: {
                      id: property.id,
                    },
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesList;
