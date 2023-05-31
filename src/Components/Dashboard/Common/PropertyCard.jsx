import React, { useState, useEffect } from "react";
import { BsFillGridFill} from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import PropertyModal from "../Components/Modal"



//Import style
import styles from "../Components/css/PropertyCard.module.css";

const PropertyCard = (props) => {

  const [filterToggle, setFilterToggle] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };


  const toggleFilter = () => {
    setFilterToggle(!filterToggle)
    // setFilterToggle(false)

  }
  const handleAddProperty = (newProperty) => {
    // Add logic to handle adding the new property to the list
    console.log(newProperty);
    setModalIsOpen(false);
  };

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
  }


  const [formData, setFormData] = useState({
    projectTitle: '3 Bedrooms',
    houseName: 'Baracks House',
    numUnits: '40',
    address: '2, Ibeju-lekki Lagos.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod vehicula nisl ac convallis. Aliquam semper, nunc et efficitur placerat, augue diam molestie ligula, id lobortis nibh neque a est. Phasellus velit justo, facilisis nec iaculis vel, vulputate id augue. Nunc aliquam in massa quis cursus. Integer dignissim odio eget lacinia faucibus. very fab!!',
    type: 'normalPiece',
    price: 300000000,
    numBedrooms: '3',
    numBathrooms: '4',
    image: null,
  });
  return (
    <div className={styles.container}>
        <div className={styles.filterSec}>
              <button className={styles.dots} onClick={toggleFilter}>. . .</button>
            {filterToggle &&
              <ul className={styles.actionList}>
                <li onClick={() => {
                   navigate("/PropertyDetails", {
                    // state: {
                    //   id: property.id,
                    // },
                  });
                  setFilterToggle(false)
             
                }}>View Details</li>
                <li onClick={toggleModal}>Edit Project</li>
                  {modalIsOpen && (
          <PropertyModal
           open={modalIsOpen} 
          //  onClose={handleCloseModal} 
          toggleModal={toggleModal}
           content={
            <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.propheader}>Edit Property</h2>
            <div className={styles.formControls}>
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
            </div>    
            
            <button type="update">Submit</button>
            <button className={styles.closebtn} onClick={toggleModal}>Close</button>

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
                <li  onClick={() => {
                  navigate("/PropertyDetails", {
                  // state: {
                  //   id: property.id,
                  // },
                  });                  
                  setFilterToggle(false)
          
                }}>Remove Project</li>
              </ul>
            }
            </div>
      <img src={props.propertyImage} alt={props.propertyTitle} />
      <h3>{props.propertyDescription}</h3>
      
      <div className={styles.address}>
        <div className={styles.listStyle}>
            <span></span>
        </div>
        <div>
            <h4>{props.propertyTitle}</h4>
            <p>{props.addressContent}</p>

        </div>
      </div>
      <div className={styles.priceDetails}>
        <div>
            <h4>{props.price}</h4>
            {/* <p>{props.priceDets}</p> */}
         
        </div>
      </div>
      {/* <button className={styles.viewDetails} onClick={props.viewDetails}>View Details</button>
      <button className={styles.removeProperty} onClick={props.viewDetails}>Remove Property</button> */}


    </div>
  );
};

export default PropertyCard;
