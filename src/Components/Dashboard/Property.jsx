import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//Component Imports
import Sidebar from '../Components/Sidebar';
import Topnav from '../Components/Topnav';
// import Arrow from "../../Assets/arrowdown.png"
import logo from "../Assets/bigLogo.png"
import dummy from "../Assets/dummy-one.png"
import { AiOutlineArrowDown} from "react-icons/ai";
import Footer from "../Components/Footer"
import PropertyModal from "../Components/Modal"





import PropertyCard from "../Components/PropertyCard";
//styles import
import styles from "../Pages/css/Property.module.css";

const PropertiesList = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [allProperties, setAllProperties] = useState([]);
  const [filter, setFilter] = useState("")
  const [filterToggle, setFilterToggle] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleAddProperty = (newProperty) => {
    // Add logic to handle adding the new property to the list
    console.log(newProperty);
    setModalIsOpen(false);
  };

  const [properties, setProperties] = useState([
    {
      id: 1,
      img: dummy,
      name: "Luxury Apartment",
      address: "123 Main St, New York",
      price: "$1,500,000",
      unit: "3 bedrooms, 2 baths",
      applicants: 5,
      areaOfSite:"200,000"
    },
    {
      id: 2,
      img: dummy,

      name: "Modern Townhouse",
      address: "456 Oak St, San Francisco",
      price: "$1,200,000",
      unit: "4 bedrooms, 3 baths",
      applicants: 8,
      areaOfSite:"200,000"

    },
    {
      id: 3,
      img: dummy,

      name: "Spacious Condo",
      address: "789 Pine St, Los Angeles",
      price: "$1,800,000",
      unit: "2 bedrooms, 2 baths",
      applicants: 3,
      areaOfSite:"200,000"

    },
    {
      id: 3,
      img: dummy,

      name: "Spacious Condo",
      address: "789 Pine St, Los Angeles",
      price: "$1,800,000",
      unit: "2 bedrooms, 2 baths",
      applicants: 3,
      areaOfSite:"200,000"

    }, {
      id: 3,
      img: dummy,

      name: "Spacious Condo",
      address: "789 Pine St, Los Angeles",
      price: "$1,800,000",
      unit: "2 bedrooms, 2 baths",
      applicants: 3,
      areaOfSite:"200,000"

    }, {
      id: 3,
      img: dummy,

      name: "Spacious Condo",
      address: "789 Pine St, Los Angeles",
      price: "$1,800,000",
      unit: "2 bedrooms, 2 baths",
      applicants: 3,
      areaOfSite:"200,000"

    }, {
      id: 3,
      img: dummy,

      name: "Spacious Condo",
      address: "789 Pine St, Los Angeles",
      price: "$1,800,000",
      unit: "2 bedrooms, 2 baths",
      applicants: 3,
      areaOfSite:"200,000"

    }, {
      id: 3,
      img: dummy,

      name: "Spacious Condo",
      address: "789 Pine St, Los Angeles",
      price: "$1,800,000",
      unit: "2 bedrooms, 2 baths",
      applicants: 3,
      areaOfSite:"200,000"

    }
  ]);

  const [formData, setFormData] = useState({
    projectTitle: '',
    houseName: '',
    numUnits: '',
    address: '',
    description: '',
    type: 'normalPiece',
    price: '',
    numBedrooms: '',
    numBathrooms: '',
    image: null,
  });

  const handleInputChange = (event) => {
    if (event.target.type === 'file') {
      setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  const toggleFilter = () => {
    setFilterToggle(!filterToggle)

  }

 
 
  return (
    <div className={styles.container}>
         <Topnav />
        <Sidebar />
      <div className={styles.content}>
        <button className={styles.addPropertyButton}  onClick={toggleModal}>
        Add Property
      </button>
      {modalIsOpen && (
          <PropertyModal
           open={modalIsOpen} 
          //  onClose={handleCloseModal} 
          toggleModal={toggleModal}
           content={
            <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.propheader}>Add Property</h2>
            <div className={styles.formControlLeft}>
            <div className={styles.formControl}>
            <label htmlFor="projectTitle">Title of Project: </label>
            <input type="text" id="projectTitle" name="projectTitle" value={formData.projectTitle} onChange={handleInputChange} required />
            </div>

            <div className={styles.formControl}>
            <label htmlFor="numUnits">Number of Units: </label>
            <input type="number" id="numUnits" name="numUnits" value={formData.numUnits} onChange={handleInputChange} required />
            </div>
            <div className={styles.formControl}>
            <label htmlFor="type">Type: </label>
            <select id="type" name="type" value={formData.type} onChange={handleInputChange} required>
              <option value="normalPiece">Normal Piece</option>
              <option value="cornerPiece">Corner Piece</option>
            </select>
            </div>
            <div className={styles.formControl}>
           <label htmlFor="numBedrooms">Number of Bedrooms: </label>
            <input type="number" id="numBedrooms" name="numBedrooms" value={formData.numBedrooms} onChange={handleInputChange} required />
           </div>
           <div className={styles.formControl}>
           <label htmlFor="image">Image: </label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleInputChange} required />
           </div>
            </div>

            <div className={styles.formControlRight}>
            <div className={styles.formControl}>
            <label htmlFor="houseName">Name of House: </label>
            <input type="text" id="houseName" name="houseName" value={formData.houseName} onChange={handleInputChange} required />
            </div>
            <div className={styles.formControl}>
            <label htmlFor="address">Address: </label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
            <div className={styles.formControl}>
            <label htmlFor="price">Price: </label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} required />
            </div>
            <div className={styles.formControl}>
           <label htmlFor="numBathrooms">Number of Bathrooms: </label>
            <input type="number" id="numBathrooms" name="numBathrooms" value={formData.numBathrooms} onChange={handleInputChange} required />
           </div>
           <div className={styles.formControl}>
            <label htmlFor="description">Description: </label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} required />
            </div>
            </div>

            
            <button type="submit">Submit</button>
            <button className={styles.close} onClick={toggleModal} type="close">Close</button>

          </form>
           }  
           onAddProperty={handleAddProperty} 
           viewDetails={() =>
            navigate("/PropertyDetails", {
              // state: {
              //   id: property.id,
              // },
            })
          }/>
           )
      }

        <div className={styles.property}>
          <div className={styles.header}>
            <h2>Listed Properties</h2>
            <div className={styles.filterSec}>
              <button onClick={toggleFilter}>Filter by location <img src={AiOutlineArrowDown} alt="" /></button>
              
            
            {filterToggle &&
              <ul className={styles.locationList}>
                <li onClick={() => {
                  setFilter("&city= ");
                  setFilterToggle(false)
             
                }}>All</li>
                <li onClick={() => {
                  setFilter("&city=kosofe");
                  setFilterToggle(false)
             
                }}>Kosofe</li>
                <li  onClick={() => {
                  setFilter("&city=kuje");
                  setFilterToggle(false)
          
                }}>Kuje</li>
                <li  onClick={() => {
                  setFilter("&city=lekki");
                  setFilterToggle(false)
            
                }}>Lekki</li>
              </ul>


            }

            </div>
         
          </div>
          <div className={styles.propertyList}>
            {properties.map((property) => (
              <PropertyCard
                propertyImage={property.img}
                propertyTitle={property.name}
                propertyDescription="3 Bedroom Detached Terrace Duplex"
                propertyDetails={
                  <ul>
                    <li>{property.unit} Bed</li>{" "}
                    <li>{property.areaOfSite}sqm</li>
                  </ul>
                }
                addressContent={property.address}
                price="N 15 million outright payment"
                priceDets="Payment 2: 19 million (12 million equity, 7 million mortgage)"
                viewDetails={() =>
                  navigate("/PropertyDetails", {
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
          
    <Footer/>
    </div>
  );
};

export default PropertiesList;
