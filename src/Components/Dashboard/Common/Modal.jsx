import React from 'react';
import styles from './css/Modal.module.css'
import {AiFillCloseCircle} from "react-icons/ai"


const Modal = (props) => {

    return (
        <div className={props.open?styles.modal: styles.hideModal}>
            <div className={styles.modalContent}>
                <div className={styles.close} onClick={props.toggleModal}>
                    <i className='fa fa-close'></i>
                </div>
                <div className={styles.formControl}>
                    {props.content}
                </div>
            </div>
           
        </div>
    );
};

export default Modal;